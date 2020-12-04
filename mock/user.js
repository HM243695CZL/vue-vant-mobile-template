import {userList} from "./data/userData";
export default [
    {
        url: '/web/getUserList',
        type: 'post',
        response: config => {
            return {
                content: {
                    head: {
                        errorCode: '00'
                    },
                    data: {
                        userList
                    }
                }
            }
        }
    }
]
