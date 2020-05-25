<template>
    <div class="item-1 text-orange-600" :class='{"text-3xl": data.flag}'>
        {{data.title}}{{ data.flag}}
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    props: {
        data: { type: Object, required: true }
    }
}
</script>