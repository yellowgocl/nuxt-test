const env = require('../env')
module.exports = {
    '/api': {
        target: env.API_URL, // 填入你的需要代理的url,
        // pathRewrite: {
        //     '^/api': '/api',
        //     chnageOrigin: true
        // }
    },
    '/mock': {
        target: 'http://127.0.0.1:3721',
    }
}