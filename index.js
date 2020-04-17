const chalk = require("chalk");
const yargs = require("yargs");
const os = require('os'); 

const { buildNewSiteChain } = require('./chains/builder');

const options = yargs
    .usage("Usage: -n <name>")
    .option("s", {alias: "sitename", describe: "New site name", type: "string", demandOption: true})
    //.option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
    .argv;

// Steps:
    // Take parameters values. Validate it.
    // Copy source files into a new folder
    // Replace all files with new site id.
    // Zip it.
    // Upload to Sandbox.
    // Import into Sandbox.
    // Delete temp folder.

console.clear();
console.log(chalk.yellow("Creating a new SFCC site named:"),  chalk.greenBright.bold(options.sitename));

const destinationPath = os.tmpdir() + '/' + 'babu';

const chain = buildNewSiteChain({
    dataSourcePath: './site-source-data',
    dataDestinationPath: destinationPath,
    siteName: options.sitename,
});

chain.execute();