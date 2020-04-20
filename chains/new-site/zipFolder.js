const BaseChain = require('../base-chain');
const archiver = require('archiver');
var fs = require('fs');

class ZipFolder extends BaseChain {
    async execute() {
        const zipPath = `./${this.data.siteName}.zip`;
        console.log("Zipping updated folder to ", zipPath);

        await this.zipContent(this.data.dataDestinationPath, zipPath);

        this.data.zipFilePath = zipPath;
        return await super.execute();
    }

    zipContent(folderToZip, zipPath) {
        return new Promise((resolve, reject) => {
            var output = fs.createWriteStream(zipPath);
            var archive = archiver('zip', {
                zlib: { level: 9 } // Sets the compression level.
            });

            archive.on('error', function(err) {
                console.error("Error: ", err);
                reject(err);
            });

            output.on('end', function () {
                console.log('Data has been drained');
                resolve();
            });

            output.on('close', function() {
                console.log(archive.pointer() + ' total bytes');
                console.log('archiver has been finalized and the output file descriptor has closed.');
                resolve();
            });

            // pipe archive data to the file
            archive.pipe(output);

            archive.directory(folderToZip, 'new-subdir');

            archive.finalize();
        });
    }
}

module.exports = ZipFolder;