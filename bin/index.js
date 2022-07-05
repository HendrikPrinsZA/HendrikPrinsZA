#!/usr/bin/env node

const program = require('commander');
const download = require('image-downloader');

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
      {
        key: 'github-profile-views',
        url: `https://komarev.com/ghpvc/?username=${this.username}&style=flat-square&color=blue`
      },
      {
        key: 'github-stats',
        url: `https://github-readme-stats.vercel.app/api?username=${this.username}&show_icons=true&theme=${this.theme}`,
      },
      {
        key: 'github-top-lang',
        url: `https://github-readme-stats.vercel.app/api/top-langs?username=${this.username}&layout=compact&theme=${this.theme}`,
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
        url: `https://github-readme-stats-taupe-two.vercel.app/api/wakatime?username=${this.username}&hide_title=true&hide_border=true&langs_count=10&theme=tokyonight&range=last_30_days`
      },
      {
        key: 'github-trophees',
        url: `https://github-profile-trophy.vercel.app/?username=${this.username.toLowerCase()}&theme=tokyonight&no-frame=true&column=-1`
      },
      {
        key: 'codersrank-activity-chart',
        url: `https://cr-ss-service.azurewebsites.net/api/ScreenShot?widget=activity&username=${this.username}&branding=false&legend=true&tooltip=true&labels=true&style=--bg-color-0:%2338bcad;`,
        type: 'png'
      }
    ];

    endpoints.forEach((endpoint) => {
      const type = endpoint.type ?? 'svg';
      const dest = `../../storage/images/${endpoint.key}.${type}`;
      const options = {
        url: endpoint.url,
        dest: dest
      };
  
      download.image(options).then(() => {
        console.log(`Saved image to '${options.dest}'\n\`\`\`\n${options.url}\n\`\`\``);
      }).catch((err) => {
        console.log(`ERROR: Failed to generate image for ${options.dest}`);
        console.error(err);
        process.exit(1);
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
