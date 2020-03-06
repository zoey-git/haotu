export const state = () => ({
    token: ''
})


const mutations = {
    SET_TOKEN(state, value) {
        state.token = value
    }
}

export default {
    namespace: false,
    state,
    mutations
}