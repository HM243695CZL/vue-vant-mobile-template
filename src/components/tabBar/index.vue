<template>
    <div class="tab-bar-container">
        <van-tabbar v-model="active">
            <van-tabbar-item
                    icon="home-o"
                    v-for="item in tabBarList"
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
                        icon: 'home-o'
                    },
                    {
                        id: 2,
                        name: '分类',
                        path: '/category',
                        icon: 'home-o'
                    },
                    {
                        id: 3,
                        name: '挂号',
                        path: '/category',
                        icon: 'home-o'
                    },
                    {
                        id: 4,
                        name: '消息',
                        path: '/news',
                        icon: 'home-o'
                    },
                    {
                        id: 5,
                        name: '我的',
                        path: '/platform',
                        icon: 'home-o'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
