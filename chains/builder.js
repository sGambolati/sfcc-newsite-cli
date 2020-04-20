const copyDataStep = require('./new-site/copyData');
const replaceContentStep = require('./new-site/replaceContent');
const zipFolderStep = require('./new-site/zipFolder');
const getTokenStep = require('./new-site/sfcc-token');
const uploadToSBStep = require('./new-site/uploadToSandbox');
const importtoSBStep = require('./new-site/importData');

buildNewSiteChain = (data) => {
    return new copyDataStep(data,
        new replaceContentStep(data,
        new zipFolderStep(data,
        new getTokenStep(data,
        new uploadToSBStep(data,
        new importtoSBStep(data,
        null
    ))))));
}

module.exports = { buildNewSiteChain };