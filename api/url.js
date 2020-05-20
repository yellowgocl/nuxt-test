
const mod = {
    LOGIN: { url: '/api/v3/token', method: 'post', mock: false },
    TEST: { url: '/api/test' },
    GOODS: { url: '/api/goods', method: 'post' }
}

exports.url = mod
module.exports = mod
// export default mod