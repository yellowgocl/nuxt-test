<template>
  <div class="card bg-white rounded-md grid grid-cols-10 gap-1 m-4 p-3 text-sm"  @click.stop="onActive">
      <div class="number col-span-9 text-primary text-base">
       订单号: {{data.num}}
      </div>
      <div class="choose col-span-1 text-right relative">
         <img v-show="!value" class=" w-4 absolute right-0" src="../assets/images/choose0.png"/>
         <img v-show="value"  class=" w-4 absolute right-0" src="../assets/images/choose1.png"/>
      </div>
      <div class="name col-span-10">
        项⽬名称:<span> {{data.name}}</span>
      </div>
      <div class="name col-span-4">
        申请⼈: <span> {{data.people}}</span>
      </div>
      <div class="name col-span-6 text-right">
        申请时间: <span> {{data.date}}</span>
      </div>
  </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    props: {
      value: { type: Boolean },
      data: {
          type: Object,
          required: true
      }
    },
    methods: {
      onActive() {
        this.$emit('input', (!this.value))
      }
    }
}
</script>

<style>

</style>