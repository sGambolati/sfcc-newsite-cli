const chalk = require("chalk");
const yargs = require("yargs");
const os = require('os');
const rimraf = require('rimraf');
const { v4: uuidv4 } = require('uuid');

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

const proccess = async () => {
    console.clear();
    console.log(chalk.yellow("Creating a new SFCC site named:"),  chalk.greenBright.bold(options.sitename));

    const destinationPath = os.tmpdir() + '/' + uuidv4();

    const chain = buildNewSiteChain({
        dataSourcePath: './site-source-data',
        dataDestinationPath: destinationPath,
        replaceToken: /#-newsitename-#/g,
        siteName: options.sitename,
    });

    await chain.execute()
        .then(() => {
            console.log("Finished!");
        });

    // Delete temporary folder.
    rimraf(destinationPath, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Cleaned up.");
        }
    });
}

proccess();