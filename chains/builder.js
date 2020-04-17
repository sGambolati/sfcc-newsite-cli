const copyDataStep = require('./new-site/copyData');
const replaceContentStep = require('./new-site/replaceContent');

buildNewSiteChain = (data) => {
    return new copyDataStep(data, 
        new replaceContentStep(data,
        null
    ));
}

module.exports = { buildNewSiteChain };