<template>
    <div class="d2">d2-{{id}}</div>
</template>
<script>
export default {
    props: {
        id: { type: [String, Number], required: true }
    }
}
</script>