<template>
    <nuxt-link to='/goods/123' class="d1-item2">{{data.name}}</nuxt-link>
</template>
<script>
export default {
    data() {
        return {}
    },
    props: {
        data: {
            type: Object,
            required: true
        }
    }
}
</script>