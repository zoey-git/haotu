<template>
    <div class="login">
        <Header />
        <div class="login_box">
            <h4>注册</h4>
            <div class="username">
                <label for="username">用户名*</label>
                <input id="username" type="text">
            </div>
            <div class="email">
                <label for="email">邮箱*</label>
                <input id="email" type="text">
            </div>
            <div class="password">
                <label for="password">密码*</label>
                <input id="password" type="password">
            </div>
            <div class="affirmpassword">
                <label for="affirmpassword">确认密码*</label>
                <input id="affirmpassword" type="password">
            </div>
            <div class="">
                <button>注 册</button>
                <div class="gologin" @click="goLogin">已有账号？去登录</div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
export default {
    methods: {
        goLogin() {
            this.$router.push({
                path: '/login'
            })
        }
    },
    components: {
        Header
    }
}
</script>

<style lang="scss">
    .login_box {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 10px;
        background: #fff;
        width: 400px;
        box-sizing: border-box;
        padding: 20px;
        border: 1px solid rgba($color: #999, $alpha: .4);
        h4 {
            font-size: 24px;
            color: #000;
            padding-bottom: 30px;
            text-align: center;
        }
        .username, .password, .email, .affirmpassword {
            padding-bottom: 30px;
            label {
                font-size: 16px;
                color: #777;
            }
            input {
                border: none;
                display: block;
                height: 50px;
                border: 1px solid rgba($color: #999, $alpha: .4);
                outline: none;
                border-radius: 4px;
                width: 100%;
                margin-top: 10px;
                padding: 10px;
                font-size: 16px;
                color: #555;
            }
        }
        .gologin {
            font-size: 16px;
            color: #555;
            text-align: right;
            margin-top: 20px;
            margin-bottom: 10px;
            cursor: pointer;
        }
        button {
            width: 100%;
            border: none;
            background: $theme-color;
            color: #fff;
            font-size: 18px;
            padding: 10px;
            height: 50px;
            border-radius: 25px;
            font-weight: bold;
            outline: none;
            cursor: pointer;
        }
        button:active {
            background: rgba($color: $theme-color, $alpha: .6)
        }
    }
</style>