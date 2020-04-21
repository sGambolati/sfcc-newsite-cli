const BaseChain = require('../base-chain');
const replace = require('replace-in-file');
const fs = require('fs');

class ReplaceContentStep extends BaseChain {
    async execute() {
        console.log("Replacing content in the new site folder.");

        const options = {
            files: this.data.dataDestinationPath + '/**/*.*',
            from: this.data.replaceToken,
            to: this.data.siteName,
        };

        await replace(options);

        // Replace folders name.
        fs.renameSync(
            this.data.dataDestinationPath + '/sites/MelonPunch',
            this.data.dataDestinationPath + `/sites/${this.data.siteName}`);

        fs.renameSync(
            this.data.dataDestinationPath + '/libraries/MelonPunchSharedLibrary',
            this.data.dataDestinationPath + `/libraries/${this.data.siteName}SharedLibrary`);


        return await super.execute();
    }
}

module.exports = ReplaceContentStep;