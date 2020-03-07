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
            imgList: [],
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