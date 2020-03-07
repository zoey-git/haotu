<template>
    <div class="photo_list">
        <div v-for="(item, index) in imgList" :key="index">
            <img :src="item.display_url" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imgList: {
            type: Array,
            default: []
        }
    }
}
</script>

<style lang="scss">
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
</style>