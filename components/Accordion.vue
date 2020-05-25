<template>
    <div class="accordion ">
        <div class="tab_header  bg-primary rounded p-2">
            <div href="#" class="text-white relative text-base" @click.stop="onActive">
                {{title}}
                <span class="down-Arrow absolute right-0" v-show="!value"><span class="iconfont w-5">&#xe7b2;</span></span>
                <span class="up-Arrow absolute right-0" v-show="value"><span class="iconfont w-5">&#xe743;</span></span>
            </div>
        </div>
        <transition name="fade">
            <div class="tab_content" v-show="value"><slot/></div>
        </transition>
    </div>
</template>
<script>
export default{
    data(){
        return{}
    },
    props: {
      value: { type: Boolean },
      title: { type: String , default: () => '未知标题' }
    },
    methods: {
      onActive() {
        this.$emit('input', (!this.value))
      }
    }
}
</script>
<style sc>
 
     /* .fade-enter-active, .fade-leave-active {
        max-height: 100vh;
        transition: all .3s ease-out;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
        max-height: 0;
    } */
</style>