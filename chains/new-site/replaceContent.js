const BaseChain = require('../base-chain');
const replace = require('replace-in-file');

class ReplaceContentStep extends BaseChain {
    async execute() {
        console.log("Replacing content in the new site folder.");

        const options = {
            files: this.data.dataDestinationPath + '/**/*.*',
            from: this.data.replaceToken,
            to: this.data.siteName,
        };

        const results = await replace(options);

        return await super.execute();
    }
}

module.exports = ReplaceContentStep;