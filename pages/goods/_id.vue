<template>
    <div class="goods">

    </div>
</template>

<script>
export default {
    validate ({ params }) {
        // 校验路由id参数必须是number类型
        return /^\d+$/.test(params.id)
    },
    mounted() {
        this.$api.request(this.$api.urls.GOODS, 'post', { data: { id: this.$route.params.id } }).then(res => {
            console.info(res)
        })
    },
    data() {
        return {}
    }
}
</script>

<style>

</style>
