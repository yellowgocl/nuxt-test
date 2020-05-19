<template>
   <div class="p-8 bg-white rounded border border-gray-300 h-56 w-56 relative">
       <span class="point rounded-full items-center justify-center h-10 w-10 absolute text-lg text-white">{{data.anchor_img}}</span>
       <div class="icon text-center h-20"><img v-bind:src='getImgUrl(data.image)'></div>
       <div class="name text-3xl text-center m-10">{{data.name}}</div>
    </div>
</template>
<style scoped>
.box{
    /* height:13.4rem;
    background-color: #fff;
    background-size: 100%;
    border-radius: 0.5rem; */
    position: relative;
    /* transition: all .3s ease-out; */
}
.point{
    /* border-radius: 50%; */
    background-color: #e22021;
    /* width: 2.6rem;
    height: 2.6rem;
    position: absolute;
    right:0.56rem;
    top:0.56rem; */
}
.card-title {
    text-align: center;
    background-image: linear-gradient(40deg, #88754b, #ddca88, #88754b );
}

</style>
<script>
export default {
    props: {
        data: {
            type: Object,
            required: true,
            host:'https://xcx.adparkchina.com',
            
        }
    },
    computed: {
    },
    methods: {
        getImgUrl(icon){
            return require(host+icon);
        }
    }
}
</script>