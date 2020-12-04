import {getToken, setToken, removeToken} from '@/utils/auth';
import {login} from '@/api/user';

const state = {
    token: getToken()
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    }
}
const actions = {
    login({commit}, userInfo) {
        const {username, password} = userInfo
        return new Promise((resolve, reject) => {
            login({ username, password}).then(({ rsp }) => {
                console.log(rsp);
            })
        })
    },
    resetToken({commit}) {
        return new Promise(resolve => {
            commit('SET_TOKEN', '')
            removeToken()
            resolve()
        })
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
