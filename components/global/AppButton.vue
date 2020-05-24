<template>
    <button :class="bindClass">
        <slot name="prepend"></slot>
        <slot></slot>
    </button>
</template>
<script>
export default {
    props: {
        enabled: { type: Boolean, default: () => true },
        activeClass: { type: [String, Array], default: () => '' }
    },
    data() {
        return {}
    },
    computed: {
        bindClass() {
            let result = ['flex', 'flex-row', 'items-center', 'justify-center', 'rounded', 'items-center', 'text-white'];
            return result.concat(this.enabledClass, this.activeClass)
        },
        enabledClass() {
            let result = []
            if (!this.enabled) {
                result.push('cursor-not-allowed', 'opacity-50')
            }
            return result
        }
    }
}
</script>
<style scoped>

</style>