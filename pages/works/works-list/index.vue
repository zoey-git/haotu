<template>
    <div class="wrap">
        <div class="photo_list">
            <div v-for="(item) in imgList" :key="item">
                <img :src="item" alt="">
            </div>
            <img src="https://drscdn.500px.org/photo/1011820369/q%3D80_h%3D600/v2?sig=68fd6c8ce336ee0a13f07b0eb5ce07a4a906761f9ce7b631f0148f39f302d9c7" alt="">
        </div>
        <Loding v-if="false" />
    </div>
</template>

<script>
import Loding from '@/components/Loding'
export default {
    data() {
        return {
            imgList: ['http://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1583983658&t=8ce762c6c5c76c734b5940ea2f00905f', 'http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1583983658&t=20756507200e5c178e8c765750dcccfe', 'http://t9.baidu.com/it/u=3363001160,1163944807&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1583983934&t=085334e0b685f2ea2bf3f40ebea6d2f3','http://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1583983658&t=cb9f6fd957b394f18d7c343c687d84ef', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2436786008,3765340035&fm=11&gp=0.jpg', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2401507775,2331183736&fm=26&gp=0.jpg', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1760283799,1689150510&fm=26&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=966626378,2821537066&fm=11&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2519595422,663321187&fm=26&gp=0.jpg', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1614415273,1176774180&fm=26&gp=0.jpg', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4111619919,2955477414&fm=26&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2785392053,1309124002&fm=26&gp=0.jpg', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3791666926,3499265285&fm=11&gp=0.jpg'],
            flag: true
        }
    },
    mounted() {
        window.onscroll = () => {
            if (this.flag) {
                this.flag = false
                setTimeout(() => {

                    this.flag = true
                }, 1000)
            }
        }
    },
    components: {
        Loding
    }
}
</script>

<style lang="scss">
    .wrap {
        width: 1200px;
        margin: 0 auto;
    }
    .photo_list {
        width: 100%;
        column-count:4;
        column-gap: 10px;
        div {
            break-inside: avoid;
            padding-bottom: 10px;
            img {
                width: 100%;
                height: auto;
                max-height: 500px;
                object-fit: cover;
            }
        }
    }
    .wrap:after{
        display: block;
        content: '';
        flex-grow: 9999;
    }
</style>