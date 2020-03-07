<template>
    <div class="header">
        <div class="logo_wrap">
            <nuxt-link to="/home">
                <img src="~assets/images/logo.png" alt="">
            </nuxt-link>
            <ul>
                <li>
                    <nuxt-link to="/home">首页</nuxt-link>
                </li>
                <li>
                    <!-- <nuxt-link>发现</nuxt-link> -->
                </li>
                <li>
                    <!-- <nuxt-link>APP</nuxt-link> -->
                </li>
            </ul>
        </div>
        <div class="operation">
            <div class="search iconfont iconsearch"></div>
            <nuxt-link to="/signup" class="register" tag="div">注册</nuxt-link>
            <nuxt-link to="/login" class="login" tag="div">登录</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 60px;
        height: 68px;
        background: #fff;
        .logo_wrap {
            display: flex;
            align-items: center;
            img {

            }
            ul {
                li {
                    float: left;
                    font-size: 18px;
                    margin-left: 36px;
                }
            }
        }
        .operation {
            display: flex;
            align-items: center;
            div {
                margin-left: 26px;
                font-size: 16px;
            }
            .search {
                font-size: 30px;
            }
            .register {
                color: #999;
                cursor: pointer;
            }
            .login {
                background: $theme-color;
                color: #fff;
                padding: 10px 20px;
                cursor: pointer;
            }
        }
    }
</style>