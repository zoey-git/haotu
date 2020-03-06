<template>
    <div>
        <Header />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import { getPhotoList } from '@/api'
export default {
    async asyncData(context) {
        // let params = {

        // }
        // context.$axios.post('/api/photo_list', params).then((res) => {
        //     console.log(res);
        // }).catch((err)=> {
        //     console.log('err');
        // })
        // return {
        //     userList: [123,131321]
        // }
        
        try {
            let res = await getPhotoList()
        } catch (error) {
            console.log(error);
            
        }
        // console.log(res);
        
    },
    data() {
        return {
            uesrList: []
        }
    },
    methods: {

    },
    components: {
        Header
    }
}
</script>