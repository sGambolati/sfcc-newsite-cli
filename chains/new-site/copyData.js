const BaseChain = require('../base-chain');
const ncp = require('ncp').ncp;

class CopySourceData extends BaseChain {
    async execute() {
        // Copy source files into a new folder
        console.log(`Copying into new folder from: ${this.data.dataSourcePath} to ${this.data.dataDestinationPath}.`);

        return await this.copyDirectory(this.data.dataSourcePath, this.data.dataDestinationPath)
            .catch(err => console.error("Error: ", err));
    }

    copyDirectory(source, destination) {
        return new Promise((resolve, reject) => {
            ncp(source, destination, (err) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    console.log("Copy completed.");
                    resolve();
                }
            })
        });
    }
}

module.exports = CopySourceData;