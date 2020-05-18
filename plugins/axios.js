import * as api from '~/api'
export default ({ $axios, redirect }) => {
    $axios.onError(error => {
        if (!error.response || error.response.status == 500) {
            redirect('/error')
        }
       //  return error
    })
    $axios.onResponse(response => {
        let data = response.data
        // console.info(response)
        if (data && data.code == 200) {
            return data.data
        } else {
            return Promise.reject(data)
        }
    })
    api.setClient($axios)
}