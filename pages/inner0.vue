<template>
<div class="bg-n0">
  
  <div class="p-4 bg-white">
    <div class="flex border border-n1 rounded-md">
        <span class="iconfont text-4xl text-center border-r w-24">&#xe7b2;</span>
        <input class="flex-1 placeholder-n2 placeholder-opacity-50 py-2 px-4" placeholder="jane@example.com">
      <button @click.stop='onSelectedAllHandle'>{{!selectedAll ? '全选' : '取消全选'}}</button>
    </div>
  </div>
  <tab> </tab>
  <div class="card_box">
    <accordionGroup :data='accordions' v-model="selected"></accordionGroup>  
    <!-- <card-group :type='true' :data='cards' v-model='selected'></card-group> -->
  </div>
  <action :enabledPositive='enabledAction' :enabledNevigate='enabledAction' :onNevigate='onHandle' :onPositive='onHandle' class="action fixed bottom-0"></action>
</div>
  
</template>

<script>
import { concat, groupBy, partition } from 'lodash'
import cardGroup from '@/components/CardGroup'
import accordionGroup from '@/components/AccordionGroup'
import card from '@/components/Card'
export default {
  // layout: 'action',
  components:{
    cardGroup, card, accordionGroup
  },
  data() {
    return {
      selectedAll: false,
      groupByCards: {},
      selected: [],
       cards: [
        {num: 'DCV-SSVRT-0001', name: 'xxxxxxxxxxxxxxxxxxx' , people: '审批列表', date: '2020-05-10 09:00', status: 0 },
        {num: 'DCV-SSVRT-0002', name: 'xxxxxxxxxxxxxxxxxxx' , people: '审批列表', date: '2020-05-10 09:00', status: 0 },
        {num: 'DCV-SSVRT-0003', name: 'xxxxxxxxxxxxxxxxxxx' , people: '审批列表', date: '2020-05-10 09:00', status: 1 },
        {num: 'DCV-SSVRT-0004', name: 'xxxxxxxxxxxxxxxxxxx' , people: '审批列表', date: '2020-05-10 09:00', status: 1 },
        {num: 'DCV-SSVRT-0005', name: 'xxxxxxxxxxxxxxxxxxx' , people: '审批列表', date: '2020-05-10 09:00', status: 0 },
        {num: 'DCV-SSVRT-0006', name: 'xxxxxxxxxxxxxxxxxxx' , people: '审批列表', date: '2020-05-10 09:00', status: 0 },
        {num: 'DCV-SSVRT-0007', name: 'xxxxxxxxxxxxxxxxxxx' , people: '审批列表', date: '2020-05-10 09:00', status: 0 },
        {num: 'DCV-SSVRT-0008', name: 'xxxxxxxxxxxxxxxxxxx' , people: '审批列表', date: '2020-05-10 09:00', status: 0 },
      ],
      accordions:[
        { title: '标题0', view: 'item0', count: 0 },
        { title: '标题1', view: 'item0', count: 100 },
        { title: '标题2', view: 'item1', flag: false },
        { title: '标题3', view: 'item1', flag: true },
        { title: '标题4', view: 'item0', count: 29 },
        { title: '标题5', view: 'item2', flag: true },
      ]
    }
  },
  mounted() {
    this.selected.push(
      this.cards[0], this.cards[1]
    )
  },
  computed: {
    enabledAction() {
      return this.selected && this.selected.length > 0
    }
  },
  methods: {
    onHandle(flag) {
      console.info(flag)
    },
    onSelectedAllHandle() {
      this.selectedAll = !this.selectedAll
      if (this.selectedAll) {
        this.selected = concat(this.cards)
      } else {
        this.selected = []
      }
    }
  }
}
</script>

<style scoped>

</style>
