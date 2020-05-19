
const mod = {
    LOGIN: { url: '/api/room/info/list', method: 'get', mock: false },
    TEST: { url: '/api/test' },
    GOODS: { url: '/api/goods', method: 'post' }
}

exports.url = mod
module.exports = mod
// export default mod