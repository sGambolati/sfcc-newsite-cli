const BaseChain = require('../base-chain');
const sfcc = require('sfcc-ci');

class ImportDataToSandbox extends BaseChain {
    async execute() {
        console.log("Importing file to Sandbox...");

        await this.importFile(this.data.instanceName, this.data.siteName + '.zip', this.data.token)
            .then(async () => {
                return await super.execute();
            });
    }

    importFile(instanceName, fileName, token) {
        return new Promise((resolve, reject) => {
            sfcc.instance.import(instanceName, fileName, token, function async (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        })
    }
}

module.exports = ImportDataToSandbox;