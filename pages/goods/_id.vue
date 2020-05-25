<template>
    <div class="goods">
        <label class="bg-white relative rounded-lg m-8 p-6 block">
            <div class='relative'>
                <h2 class="text-lg">Erin Lindford</h2>
                <div>Customer Support</div>
                <div>erinlindford@example.com</div>
                <div>(555) 765-4321</div>
                <input type="checkbox" class="opacity-0 absolute">
                <div class="rounded-full p-2 checked border border-blue-400 w-4 h-4 absolute top-0 right-0"></div>
            </div>
        </label>
        <div class="actions flex fixed inset-x-0 bottom-0 px-5">
            <button class=" text-center  flex flex-row items-center justify-center flex-1 m-3 bg-red-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <i class="mdi mr-2">not_interested</i>
                <span>不通过</span>
            </button>
            <button class="text-center flex flex-row items-center justify-center flex-1 m-3 bg-green-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <i class="mdi mr-2">done</i>
                <span>通过</span>
            </button>
        </div>
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
input:checked + .checked:after {
    content: '';
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    @apply bg-blue-400 absolute block rounded-full    
}
</style>
