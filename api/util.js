
function parseMethod(option) {
    let method = option ? option.method || option : undefined
    if(!method || typeof method != 'string') {
        return 'GET'
    }
    method = method.toUpperCase()
    return (method == 'POST' || method == 'GET' || method == 'DELETE' || method == 'PUT') ? method : 'GET'
}
function parseUri(opt) {
    let result = opt;
    if (typeof opt == 'object') {
        if (/^true$/i.test(process.env.IS_PRODUCTION)) {
            opt.mock = false
        } else {
            opt.mock = opt.mock == undefined || opt.mock == null ? true : opt.mock
        }
        if (typeof opt.mock == 'boolean' || typeof opt.mock == 'number')
            result = opt.mock ? `/mock${opt.url}` : opt.url
        else
            result = opt.mock || opt.url
        // console.info(result)
    }
    return result
}
module.exports = { parseMethod, parseUri }
