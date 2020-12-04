import axios from 'axios'
import {Toast, Dialog} from 'vant'
import store from '@/store'
import {getToken} from '@/utils/auth';

const baseURL = window.PLATFORM_CONFIG.baseUrl

const service = axios.create({
    baseURL,
    timeout: 30000,
    withCredentials: false, // 在跨域请求时发送Cookie
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
})
service.interceptors.request.use(
    config => {
        if (store.getters.token) {
            config.headers['token'] = getToken()
        }
        return config
    },
    error => {
        new Promise.reject(error)
    }
)
service.interceptors.response.use(
    response => {
        if(response.data && response.data.content.head.errorCode === '401'){
            Dialog.confirm({
                message: '你的登录已失效，你可以取消停留在此页面，或者再次登录'
            }).then(() => {
                store.dispatch('user/resetToken').then(() => {
                    location.reload()
                })
            }).catch(() => {
                console.log('停在当前页');
            })
        }else if(response.data && response.data.content.head.errorCode === '402'){
            Toast.fail('参数值不对');
            return Promise.reject(response)
        }else{
            response.rsp = response.data.content
            return response
        }
    },
    error => {
        console.log('err: ' + error);
        Dialog.alert({
            title: '警告',
            message: '登录连接超时'
        })
        return Promise.reject(error)
    }
)
export default service
