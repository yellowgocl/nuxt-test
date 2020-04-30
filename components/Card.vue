<template>
    <div class="card relative bg-indigo-200 bg-center" :style='bindStyle'>
        <div class="card-title truncate font-bold absolute inset-x-card bottom-card bottom-0 text-lg md:text-xl p-2">{{data.name}}</div>
    </div>
</template>
<style scoped>
.card{
    height: 16rem;
    background-size: 100%;
    transition: all .3s ease-out;
}
.card:hover{
    background-size: 110%;
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
            required: true
        }
    },
    computed: {
        bindStyle() {
            return [{
                'background-image': `url('${this.data.image}')`
            }]
        }
    }
}
</script>