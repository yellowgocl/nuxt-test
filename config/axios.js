const env = require('../env')
module.exports = {
    // baseURL: env.API_HOST,
    // proxy: !env.IS_PRODUCTION,
    // credentials: true,
    proxy: true,
    timeout: 60 * 1000,    
    debug: env.IS_PRODUCTION == 'true',
}