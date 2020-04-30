const urls = require('../url')
const mockjs = require('mockjs')
const mod = {
    LOGIN: (req, res) => {
        return res.json({
            code: 200,
            message: 'success',
            data: {}
        })
    },
    TEST: mockjs.mock({
        code: 200,
        message: 'ok',
        data: {
            "errcode": 0, // errcode = 0 代表成功；errcode = 1 代表未创建直播房间
            "errmsg": "ok",
            "room_info|1-3": [{
                "name": "直播房间@integer(1, 10)",
                "roomid|1": 1,
                "cover_img": '@image("200x200", @hex)',
                "live_satus": '@pick([101, 102, 103, 104, 105, 106, 107])',
                "start_time": '@date("T")',
                "end_time": '@date("T")',
                "anchor_name": '@CFIRST@CLAST',
                "anchor_img": mockjs.Random.image('125x125', '头像'),
                "goods": [{
                        "cover_img": mockjs.Random.image('200x200', '#fff'),
                        "url": "pages/goods/index",
                        "price": '@integer(60,1000)',
                        "name": '@ctitle(3, 7)'
                }]
            }],
            "total": 1
        }
    })
}

exports.url = mod
module.exports = mod
