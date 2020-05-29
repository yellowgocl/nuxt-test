const env = require('../env')
module.exports = {
    '/mock': {
        target: env.MOCK_SERVER || '',
    },
    '/api/': {
        target: env.API_URL, // 填入你的需要代理的url,
        pathRewrite: {
            '^/api': '/',
        },
        changeOrigin: true
    }
}