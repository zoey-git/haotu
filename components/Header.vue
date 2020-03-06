<template>
    <div class="header">
        <div class="logo_wrap">
            <img src="~assets/images/logo.png" alt="">
            <ul>
                <li>首页</li>
                <li>发现</li>
                <li>APP</li>
                <li>POCO认证</li>
            </ul>
        </div>
        <div class="operation">
            <div class="search iconfont iconsearch"></div>
            <div class="register">注册</div>
            <div class="login">登录</div>
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
            }
            .login {
                background: $theme-color;
                color: #fff;
                padding: 10px 20px;
            }
        }
    }
</style>