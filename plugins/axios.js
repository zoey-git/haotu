export default ({store, redirect, app: { $axios }}) => {

    $axios.onRequest(config => {
        console.log("request to " + config.url);
        
    })
    $axios.onError(error => {
        console.log('error.response: '+error.response);
    })

    $axios.interceptors.response.use(res => {
        if (res.code === 304) {
            redirect('/login')
            return alert('未登录')
        }
        return res.data
    })
}