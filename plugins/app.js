import * as api from '~/api'
export default (app, inject) => {
    inject('api', api)
}