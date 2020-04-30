<template>
  <div class="bg-primary pb-4">
      <navbar />
      <div class="container mx-auto">
        <div class="px-2 lg:px-96 mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <card class='' v-for="(item) in cards" :key='item.name' :data='item'></card>
        </div>
        <div class="pad py-8"></div>
        <div class="action-main w-2/3 mx-auto lg mt-8">Back</div>
      </div>
      <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Card from '~/components/Card.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Navbar, Card, 'app-footer': Footer
  },
  asyncData({ app }) {
    // app.$api.request(app.$api.urls.TEST)
  },
  mounted() {
    this.$api.request(this.$api.urls.TEST)
  },
  data() {
    return {
      cards: [
        { image: 'https://placem.at/places?h=400&random=1&txt', name: 'Category Seed1' },
        { image: 'https://placem.at/places?h=400&random=2&txt', name: 'Category Seed2' },
        
      ]
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
