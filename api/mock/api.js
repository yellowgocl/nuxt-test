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
            "info|6-20": [{
                "id|+1": 1,
                "name": "测试入口-@id",
                "image": 'https://placem.at/places?h=400&random=@id&txt=""',
                "status": '@pick([101, 102, 103, 104, 105, 106, 107])',
                "start_time": '@date("T")',
                "end_time": '@date("T")',
                "anchor_name": '@CFIRST@CLAST',
                "anchor_img": mockjs.Random.image('125x125', '头像')
            }]
        }
    }),
    GOODS: (req, res) => {
        let id = req.query.id || req.params.id || req.body.id || 0
        return res.json(mockjs.mock({
            code: 200,
            message: 'ok',
            data: {
                'id': id,
                'name': `商品-${id}`,
                'image': 'https://placem.at/places?h=400&random=@id&txt=""',
                'price|100-999.1-10': 100, 
            }
        }))
    },
    GET_CONTRACT: (req, res) => {
        return res.json(mockjs.mock({
            total: 10,
            totalRecords: 0,
            startIndex: 0,
            start: 0,
            limit: 0,
            pageSize: 10,
            totalCount: 0,
            'rows|5-10': [
                {
                    scontractNo: '@id',
                    scontractName: '@cword',
                    ssupplierName: '@cword'
                }
            ]
        }))
    }
}

exports.url = mod
module.exports = mod
