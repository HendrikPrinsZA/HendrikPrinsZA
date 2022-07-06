#!/usr/bin/env node

const fs = require('fs');
const program = require('commander');
const download = require('image-downloader');
const TextToSVG = require('text-to-svg');

const DEFAULT_USERNAME = 'HendrikPrinsZA';

class MyStats {
  /** @type {String} */
  username = DEFAULT_USERNAME;

  /** @type {String} */
  theme = 'tokyonight';

  constructor(username) {
    this.username = username;
  }

  images() {
    const endpoints = [
      // {
      //   key: 'github-profile-views',
      //   // url: `https://komarev.com/ghpvc/?username=${this.username}&style=flat-square&color=blue`
      //   url: 'https://hit.yhype.me/github/profile?user_id=21366141'
      // },
      {
        key: 'github-stats',
        url: `https://github-readme-stats.vercel.app/api?username=${this.username}&show_icons=true&theme=${this.theme}&count_private=true&custom_title=Stats%20(Public)`,
      },
      {
        key: 'github-top-lang',
        url: `https://github-readme-stats.vercel.app/api/top-langs?username=${this.username}&layout=compact&theme=${this.theme}&count_private=true&custom_title=Languages%20(Public)`,
      },
      {
        key: 'codersrank-stats',
        url: `https://cr-ss-service.azurewebsites.net/api/ScreenShot?widget=summary&branding=false&username=${this.username}&badges=3&show-avatar=false&style=--bg-color:%23292b3e;color:%231a1b27;--header-bg-color:%231a1b27;--header-text-color:%2370a4fc;--border-radius:0px;--badge-bg-color:%231a1b27;--badge-text-color:%2338bcad;`,
        type: 'png'
      },
      {
        key: 'codersrank-graph',
        url: `https://cr-skills-chart-widget.azurewebsites.net/api/api?username=${this.username}&branding=false&bg=%23292b3e&style=--legend-text-color:%2338bcad;--label-font-weight=300;`
      },
      {
        key: 'wakatime-last-30-days',
        url: `https://github-readme-stats-taupe-two.vercel.app/api/wakatime?username=${this.username}&hide_title=true&hide_border=true&langs_count=10&theme=tokyonight&range=last_30_days&count_private=true&layout=compact`
      },
      {
        key: 'github-trophees',
        url: `https://github-profile-trophy.vercel.app/?username=${this.username.toLowerCase()}&theme=tokyonight&no-frame=true&column=-1`
      },
      {
        key: 'codersrank-activity-chart',
        url: `https://cr-ss-service.azurewebsites.net/api/ScreenShot?widget=activity&username=${this.username}&branding=false&legend=true&tooltip=true&labels=true&style=--bg-color-0:%2338bcad;`,
        type: 'png'
      },
      {
        key: 'wakatime-custom-chart',
        url: `https://wakatime.com/share/@${this.username}/68538132-a5f0-4f81-b811-9e1be2236e0d.svg`
      }
    ];

    endpoints.forEach((endpoint) => {
      const type = endpoint.type ?? 'svg';
      const rel = `./storage/images/${endpoint.key}.${type}`;
      const dest = `../.${rel}`;
      const options = {
        url: endpoint.url,
        dest: dest
      };
  
      const debugLine = `\`\`\`\n${options.url}\n\`\`\``;
      download.image(options).then(() => {
        console.log(`Saved image to '${options.dest}'`);
        console.log(debugLine)
      }).catch((err) => {
        const lines = [
          `ERROR: Failed to generate image for ${options.dest}`,
          debugLine
        ];
        console.log(lines.join("\n"));

        // Fail softly, create placeholder image
        const errorPath = `${rel}.error.svg`;
        const textToSVG = TextToSVG.loadSync();
        const attributes = {fill: 'red', stroke: 'black'};
        const svgOptions = {x: 0, y: 0, fontSize: 24, anchor: 'top', attributes: attributes};
        
        const svg = textToSVG.getSVG(`Failed on "${endpoint.key}"`, svgOptions);
        if (!fs.existsSync(errorPath)) {
          fs.writeFileSync(errorPath, svg.toString(), { flag: 'w+' });
        }
      });
    });
  }
}

program
  .option('-v, --verbose', 'output debug information')
  .option('--username <string>', 'GitHub username', DEFAULT_USERNAME);

program
  .command('images')
  .description('Download profile images')
  .action((action) => {
    const opts = program.opts();
    const username = opts.username ?? null;
    const myStats = new MyStats(username);
    myStats.images(action);
  });

program.parse(process.argv);
