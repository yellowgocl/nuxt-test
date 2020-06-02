import urls from './url'
import util from './util'
import { merge } from 'lodash'
let client

const setClient = (newClient) => {
    client = newClient
}
const get = function (url, option) {
    return request(url, 'get', option)
}
const post = function(url, option) {
    return request(url, 'post', option)
}
const del = function(url, option) {
    return request(url, 'delete', option)
}
const put = function(url, option) {
    return request(url, 'put', option)
}
const request = function(url, method, option = {}) {
    url = util.parseUri(url)
    method = util.parseMethod(method)
    console.info(url)
    let request = {
        url, method, ...option
    }
    return client(request)
}
const getContract = (params) => {
    let _base = {
        "method": 'auditjson',
        "page": 1,
        "rows": 10,
        "workedProcessFlag": 'PD',
        "scontractNoLike": null,
        "screatorLike": null,
        "scontractNameLike": null
    }
    params = merge({}, _base, params)
    return get(urls.GET_CONTRACT, { params })
}

export { urls, setClient, request, get, post, del, put, getContract}
