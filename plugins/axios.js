export default ({store, redirect, app: { $axios }}) => {

    $axios.onRequest(config => {
        config.headers.common['Authorization'] = store.state.token
    })

    $axios.interceptors.response.use(res => {
        console.log(res);
        
        if (res.code === 304) {
            redirect('/login')
            return alert('未登录')
        }
        return res.data
    })
}