const env = require('../env')
module.exports = {
    // baseURL: env.API_HOST,
    proxy: !env.IS_PRODUCTION,
    debug: !env.IS_PRODUCTION,
}