<template>
<div class="bg-n0">
  
  <div class="p-4 bg-white">
    <div class="flex border border-n1 rounded-md">
        <span class="iconfont text-4xl text-center border-r w-24">&#xe7b2;</span>
        <input class="flex-1 placeholder-n2 placeholder-opacity-50 py-2 px-4" placeholder="jane@example.com">
      <button></button>
    </div>
  </div>
  <div class="card_box">
    <card-group :type='true' :data='cards' v-model='selected'></card-group>
  </div>
  <action :enabledPositive='enabledAction' :enabledNevigate='enabledAction' :onNevigate='onHandle' :onPositive='onHandle' class="action fixed bottom-0"></action>
</div>
  
</template>

<script>
import cardGroup from '@/components/CardGroup'
import card from '@/components/Card'
export default {
  // layout: 'action',
  components:{
    cardGroup, card
  },
  data() {
    return {
      selected: [],
       cards: [
        {num: 'DCV-SSVRT-0001', name: 'xxxxxxxxxxxxxxxxxxx' , people: '审批列表', date: '2020-05-10 09:00' },
        {num: 'DCV-SSVRT-0002', name: 'xxxxxxxxxxxxxxxxxxx' , people: '审批列表', date: '2020-05-10 09:00' },
        {num: 'DCV-SSVRT-0003', name: 'xxxxxxxxxxxxxxxxxxx' , people: '审批列表', date: '2020-05-10 09:00' },
        {num: 'DCV-SSVRT-0004', name: 'xxxxxxxxxxxxxxxxxxx' , people: '审批列表', date: '2020-05-10 09:00' },
        {num: 'DCV-SSVRT-0005', name: 'xxxxxxxxxxxxxxxxxxx' , people: '审批列表', date: '2020-05-10 09:00' },
        {num: 'DCV-SSVRT-0006', name: 'xxxxxxxxxxxxxxxxxxx' , people: '审批列表', date: '2020-05-10 09:00' },
        {num: 'DCV-SSVRT-0007', name: 'xxxxxxxxxxxxxxxxxxx' , people: '审批列表', date: '2020-05-10 09:00' },
        {num: 'DCV-SSVRT-0008', name: 'xxxxxxxxxxxxxxxxxxx' , people: '审批列表', date: '2020-05-10 09:00' },
      ]
    }
  },
  mounted() {
  },
  computed: {
    enabledAction() {
      return this.selected && this.selected.length > 0
    }
  },
  methods: {
    onHandle(flag) {
      console.info(flag)
    }
  }
}
</script>

<style scoped>

</style>
