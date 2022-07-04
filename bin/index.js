#!/usr/bin/env node

const program = require('commander');

program
  .option('-v, --verbose', 'output debug information')
  .option('--username <string>', 'GitHub username');

program
  .command('codersrank')
  .description('Get stats from https://codersrank.io')
  .addArgument(new program.Argument('<action>', 'type of action').choices(['skills-chart-widget', 'b', 'c']))
  .action((action) => {
    console.log({
      action: action,
      
    })
  });

program.parse(process.argv);
