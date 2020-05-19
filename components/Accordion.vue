<template>
    <div class="accordion border-b border-white">
         <div class="tab__header">
            <a href="#" class="tab__link p-4 block bg-blue-dark hover:bg-blue-darker no-underline text-white  flex justify-between" @click.prevent="active = !active">
                <strong>{{title}}</strong>
                <span class="down-Arrow" v-show="!active">&#9660;</span>
                <span class="up-Arrow" v-show="active">&#9650;</span>
            </a>
        </div>
        <transition name="fade">
            <div class="tab__content p-2" v-show="active"><slot /></div>
        </transition>
    </div>    
</template>

<script>
export default {
    data() {
        return { active: false }
    },
    props: {
        title: { type: String , default: () => '未知标题' }
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

