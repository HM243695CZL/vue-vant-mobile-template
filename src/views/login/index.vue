<template>
    <div class="login-container">
        <div class="store_header">
            <div class="store_avatar">
                <img src="../../assets/img/avatar_default.png" alt="头像" width="55" height="55">
            </div>
            <div class="store_name">HM243695CZL</div>
        </div>
        <hw-field-group>
            <hw-field
                    v-model="username"
                    icon="username"
                    placeholder="请输入用户名"
                    right-icon="clear-full"
                    name="user"
                    @right-click="clearText"
            ></hw-field>
            <hw-field
                v-model="password"
                icon="lock"
                placeholder="请输入密码"
                :type="visiblePass ? 'text' : 'password'"
                :right-icon="visiblePass ? 'eye-open' : 'eye-close'"
                name="password"
                @right-click="visiblePass = !visiblePass"
            ></hw-field>
            <div class="forget-register">
                <div class="register">
                    <router-link to="/login/register">免费注册</router-link>
                </div>
                <div class="forget-pass">
                    <router-link to="/login/forget-pass">忘记密码</router-link>
                </div>
            </div>
            <van-button size="large" type="danger" :loading="btnLoading" @click="login">登录</van-button>
        </hw-field-group>
    </div>
</template>

<script>
    import { login } from '@/api/user'
    import Field from '@/components/Field'
    import FieldGroup from '@/components/FieldGroup'
    export default {
        name: "Login",
        data(){
            return {
                username: '',
                password: '',
                visiblePass: false,
                btnLoading: false
            }
        },
        components: {
            [Field.name]: Field,
            [FieldGroup.name]: FieldGroup
        },
        methods: {
            clearText(){
                this.username = ''
            },
            login(){
                login({
                    username: this.username,
                    password: this.password
                }).then(({ rsp }) => {
                    this.$router.replace('/')
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .login-container{
        .store_header{
            text-align: center;
            padding: 30px 0;
            .store_avatar{
                img{
                    border-radius: 50%;
                }
            }
            .store_name{
                padding-top: 5px;
                font-size: 16px;
            }
        }
        .forget-register{
            display: flex;
            justify-content: space-between;
            align-items: center;
            a{
                color: #000;
            }
        }
    }
</style>
