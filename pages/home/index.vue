<template>
    <div class="wrap">
        <Header />
        <photo-list :imgList="imgList"></photo-list>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import PhotoList from '@/components/PhotoList'
export default {
    async asyncData(context) {        
        let params = {
            pageSize: 100,
            currentPage: 1
        }
        let res
        try {
            res = await context.$axios.post('/api/photo/photo_list', params)
        } catch (error) {
            console.log(error);
        }
        return {
            imgList: res.data.photoList
        }
    },
    data() {
        return {
            uesrList: [],
            pageSize: 20,
            currentPage: 2,
            flag: true
        }
    },
    mounted() {
        window.onscroll = async () => {
            if (this.flag) {
                this.flag = false
                let params = {
                    pageSize: this.pageSize,
                    currentPage: this.currentPage
                }
                let res = await this.$axios.post('/api/photo/photo_list', params)
                if (res.code === 200) {
                    this.imgList = this.imgList.concat(res.data.photoList)
                }
                this.currentPage++
                setTimeout(() => {
                    this.flag = true
                }, 1000)
            }
        }
    },
    methods: {

    },
    components: {
        Header,
        PhotoList
    }
}
</script>

<style lang="scss">
    .wrap {
        width: 1200px;
        margin: 0 auto;
    }
</style>