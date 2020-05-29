const env = require('../env')
let isProduction = /^true$/i.test(env.IS_PRODUCTION)
module.exports = {
    // baseURL: env.API_HOST,
    // proxy: !env.IS_PRODUCTION,
    proxy: true,
    timeout: 60 * 1000,    
    debug: !isProduction,
}