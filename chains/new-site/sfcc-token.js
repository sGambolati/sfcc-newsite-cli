const BaseChain = require('../base-chain');
const sfcc = require('sfcc-ci');

class GetSFCCAccessToken extends BaseChain {
    async execute() {
        console.log("Getting SFCC Access Token.");

        this.data.token = await this.getToken(this.data.apiKey, this.data.apiSecret)

        return await super.execute();
    }

    getToken(clientId, clientSecret) {
        return new Promise((resolve, reject) => {
            sfcc.auth.auth(clientId, clientSecret, function(err, token) {
                if (err) {
                    console.error('Authentication error: %s', err);
                    reject(err);
                } else if (token) {
                    resolve(token)
                }
            });
        });
    }
}

module.exports = GetSFCCAccessToken;