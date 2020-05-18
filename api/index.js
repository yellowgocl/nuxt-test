import urls from './url'
import util from './util'
let client

const setClient = (newClient) => {
    client = newClient
}

const request = function(url, method, option = {}) {
    url = util.parseUri(url)
    method = util.parseMethod(method)
    let request = {
        url, method, ...option
    }
    return client(request)
}

export { urls, setClient, request }
