const CopyData = require('./new-site/copyData');

buildNewSiteChain = (data) => {
    return new CopyData(data, null);
}

module.exports = { buildNewSiteChain };