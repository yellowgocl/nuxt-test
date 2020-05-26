<template>
    <div class="d1-item2">{{data.name}}</div>
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