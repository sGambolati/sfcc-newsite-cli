const BaseChain = require('../base-chain');
const sfcc = require('sfcc-ci');

class UploadToSandbox extends BaseChain {
    async execute() {
        console.log("Uploading file to Sandbox");

        await this.uploadFile('bfgv-002.sandbox.us01.dx.commercecloud.salesforce.com', this.data.zipFilePath, this.data.token)
            .then(async () => {
                return await super.execute();
            });
    }

    uploadFile(instanceName, zipFilePath, token) {
        return new Promise((resolve, reject) => {
            sfcc.instance.upload(instanceName, zipFilePath, token, null, function async (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        })
    }
}

module.exports = UploadToSandbox;