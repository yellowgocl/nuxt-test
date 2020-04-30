function parseMethod(option) {
    let method = option ? option.method : undefined
    if(!method || typeof method != 'string') {
        return 'GET'
    }
    method = method.toUpperCase()
    return (method == 'POST' || method == 'GET' || method == 'DELETE' || method == 'PUT') ? method : 'GET'
}
function parseUri(opt) {
    if (typeof opt == 'string') {
        return opt
    } else if (typeof opt == 'object') {
        return opt.mock || opt.url
    } else {
        return opt
    }
}
module.exports = { parseMethod, parseUri }
