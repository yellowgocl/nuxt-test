<template>
    <div class="item-0 text-green-600">
        {{data.title}}-<strong class='text-red-600'>{{data.count}}</strong>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    props: {
        data: { type: Object, required: true, validator: function(n) {
            return n && n.count > 0
        } }
    }
}
</script>