<template>
    <div class="actions flex fixed inset-x-0 bottom-0 px-5 py-4 bg-white border-t">
            <!-- <button class="text-center  flex flex-row items-center justify-center flex-1 m-1 bg-secondary py-2 px-4 rounded inline-flex items-center text-white">
               <span class="iconfont w-5">&#xe75e;</span>
                <span>不通过</span>
            </button> -->
            <!-- <button class="text-center flex flex-row items-center justify-center flex-1 m-1 bg-primary py-2 px-4 rounded inline-flex items-center text-white">
               <span class="iconfont w-5">&#xe767;</span>
                <span>通  过</span>
            </button> -->
        <app-button @click.native='onNevigateHandle' :enabled='enabledNevigate' activeClass='flex-1 py-2 px-4 m-1 bg-secondary'>
            <span slot='prepend' class="iconfont w-5">&#xe75e;</span>
            <span>不通过</span>
        </app-button>
        <app-button @click.native='onPositiveHandle' :enabled='enabledPositive' activeClass='flex-1 py-2 px-4 m-1 bg-primary'>
            <span slot='prepend' class="iconfont w-5">&#xe767;</span>
            <span>通  过</span>
        </app-button>
    </div>
</template>
<script>
export default {
    props: {
        enabledPositive: { type: Boolean, default: () => true },
        enabledNevigate: { type: Boolean, default: () => true },
        onNevigate: {
            type: Function
        },
        onPositive: {
            type: Function
        }
    },
    data() {
        return {}
    },
    methods: {
        onNevigateHandle() {
            // console.info('action-> on nevigate', this.onNevigate)
            this.onNevigate && this.onNevigate.call(this, false)
        },
        onPositiveHandle() {
            // console.info('action-> on positive', this.onPositive)
            this.onPositive && this.onPositive.call(this, true)
        }
    }
}
</script>
<style scoped>

</style>