<template>
  <div class="container bg-n0 h-screen">
    <div class="panel  grid grid-cols-3 gap-4 p-4">
      <template v-for="(item, index) in entries">
        <nuxt-link :to='item.url' :key='item.name + index' class="card pb-2 flex flex-col justify-center items-center h-card--index bg-white rounded-md relative ">
          <span v-if='!!item.badge' class="badge text-xs text-white text-center bg-red-600 rounded-full absolute">{{item.badge}}</span>
          <img class="pic flex-1 w-10 object-center object-contain" :src="item.image" /> 
          <span class="word text-center text-base text-n2">{{item.name}}</span>
        </nuxt-link>
      </template>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      entries: [
        { name: '合同审批', image: '/images/index_icon0.png' , badge: 20, url: '/inner0/d1' },
        { name: '订单审批', image: '/images/index_icon1.png' , badge: 10,  url: 'inner0/2' },
        { name: '申购审批', image: '/images/index_icon2.png' , badge: 20, url: 'inner0/3' },
        { name: '招标审批', image: '/images/index_icon3.png' , badge: 0 , url: 'inner0/4' },
        { name: '评标审批', image: '/images/index_icon4.png' , badge: 20, url: 'inner0/5' },
        { name: '付款审批', image: '/images/index_icon5.png' , badge: 0 , url: 'inner0/6' },
        { name: '出库审批', image: '/images/index_icon6.png' , badge: 0 , url: 'inner0/7' },
        { name: '其他⼊库审批', image: '/images/index_icon7.png' , badge: 0 , url: 'inner0/8' },
      ]
    }
  },
  mounted() {
    this.$axios.get('/api/login.do', { params:{ method: 'getLoginRandomNum' }}).then(res => {
      console.info(res)
    })
  },
  methods: {
    getImage(url){
      return require(url)
    },
    onHandle(flag) {
      console.info(flag)
    }
  }
}
</script>

<style scoped>
.badge{
  right: 0.25rem;
  top: 0.25rem;
  min-height: 1.25rem;
  min-width: 1.25rem;
}
</style>
