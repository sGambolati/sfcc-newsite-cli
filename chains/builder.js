const copyDataStep = require('./new-site/copyData');
const replaceContentStep = require('./new-site/replaceContent');
const zipFolderStep = require('./new-site/zipFolder');

buildNewSiteChain = (data) => {
    return new copyDataStep(data,
        new replaceContentStep(data,
        new zipFolderStep(data,
        null
    )));
}

module.exports = { buildNewSiteChain };