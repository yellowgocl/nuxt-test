<template>
    <button :class="bindClass">
        <slot name="prepend"></slot>
        <slot>确定</slot>
        <slot name="append"></slot>
    </button>
</template>
<script>
export default {
    props: {
        rounded: { type: Boolean, default: () => false },
        enabled: { type: Boolean, default: () => true },
        activeClass: { type: [String, Array], default: () => '' }
    },
    data() {
        return {}
    },
    computed: {
        bindClass() {
            let result = ['flex', 'flex-row', 'items-center', 'justify-center', 'rounded', 'items-center', 'text-white', 'bg-primary'];
            return result.concat(this.enabledClass, this.roundedClass, this.activeClass)
        },
        enabledClass() {
            let result = []
            if (!this.enabled) {
                result.push('cursor-not-allowed', 'opacity-50')
            }
            return result
        },
        roundedClass() {
            let result = []
            if (this.rounded) {
                result.push('rounded-full')
            }
            return result
        }
    }
}
</script>
<style scoped>

</style>