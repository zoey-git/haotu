<template>
    <div class="loading">
        <img src="~assets/images/loading.svg" alt="">
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .loading {
        width: 100%;
        height: 40px;
        background: $theme-color;
        border-radius: 6px;
        position: relative;
        margin-bottom: 10px;
        img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
</style>