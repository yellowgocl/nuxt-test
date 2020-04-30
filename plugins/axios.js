import * as api from '~/api'
export default ({ $axios, redirect }) => {
    // $axios.onError(error => {
    //     if (!error.response || error.response.status == 500) {
    //         redirect('/error')
    //     }
    //     return error
    // })
    $axios.onResponse(response => {
        console.info(response)
        return response
    })
    api.setClient($axios)
}