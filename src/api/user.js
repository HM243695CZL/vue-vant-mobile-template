import request from '@/utils/request'
export function login(data) {
    return request({
        url: '/web/getUserList',
        method: 'post',
        data
    })
}
