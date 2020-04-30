<template>
    <div class="card bg-indigo-200 bg-cover bg-center" :style='bindStyle'>
        <div class="card-title truncate font-bold absolute inset-x-card bottom-card bottom-0 text-lg md:text-xl p-2">{{data.name}}</div>
    </div>
</template>
<style scoped>
.card{
    position: relative;
}
.card .card-title{
    /* position: absolute;
    bottom: 2vw;
    left: 2vw;
    right: 2vw;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap; */
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