const env = require('../env')
module.exports = {
    baseURL: env.API_HOST,
    
    debug: !env.IS_PRODUCTION,
}