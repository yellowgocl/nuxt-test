<template>
  <div class="bg-primary pb-4">
      <div class="container mx-auto">
        <div class="px-2 lg:px-96 mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <card class='' v-for="(item) in cards" :key='item.name' :data='item'></card>
        </div>
        <div class="pad py-8"></div>
        <div class="action-main w-2/3 mx-auto lg mt-8">Back</div>
      </div>
  </div>
</template>

<script>
import Card from '~/components/Card.vue'
export default {
  components: {
    Card
  },
  async asyncData({ app }) {
    let data = await app.$api.request(app.$api.urls.TEST)
    // console.info(login)
    return {
      cards: data.info
    }
  },
  mounted() {
    this.$api.request(this.$api.urls.LOGIN, 'POST')
    // let data = this.$api.request(this.$api.urls.TEST)
  },
  data() {
    return {
      cards: []
    }
  },
  
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  
}

</style>
