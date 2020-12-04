<template>
    <div class="tab-bar-container">
        <van-tabbar v-model="active">
            <van-tabbar-item
                    v-for="item in tabBarList"
                    :icon="item.icon"
                    :key="item.id"
                    :to="item.path"
            >{{item.name}}</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: "TabBar",
        data(){
            return {
                active: 0,
                tabBarList: [
                    {
                        id: 1,
                        name: '首页',
                        path: '/home',
                        icon: 'wap-home'
                    },
                    {
                        id: 2,
                        name: '分类',
                        path: '/category',
                        icon: 'point-gift'
                    },
                    {
                        id: 3,
                        name: '挂号',
                        path: '/enter-name',
                        icon: 'service'
                    },
                    {
                        id: 4,
                        name: '消息',
                        path: '/news',
                        icon: 'comment'
                    },
                    {
                        id: 5,
                        name: '我的',
                        path: '/platform',
                        icon: 'manager'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
