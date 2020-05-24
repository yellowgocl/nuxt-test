<template>
    <a :href='data.url' taget='blacnk' class="attachment gray_border_box grid  grid-cols-3 gap-1 my-2 p-3  text-n2">
        <span class="text-base col-span-2">
            {{data.name}}
        </span>
        <span class="text-base text-primary col-span-1 text-right">
            查看附件
        </span>
        <span class="text-sm col-span-3 ">
            {{data.date}}
        </span>
    </a>
</template>
<script>
export default{
    data(){
        return{ active : false}
    },
    props: {
        data: {
            type: Object,
            required: true
        }
    }
}
</script>
<style>
 
     .fade-enter-active, .fade-leave-active {
        max-height: 100vh;
        transition: all .3s ease-out;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
        max-height: 0;
    }
</style>