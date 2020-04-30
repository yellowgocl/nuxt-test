<template>
  <div>
    <navbar class='sticky top-0 z-10'></navbar>
    <div class="viewport pb-footer md:pb-footer-md lg:pb-footer-lg xl:pb-footer-xl"><nuxt /></div>
    <app-footer class='fixed inset-x-0 bottom-0'></app-footer>
  </div>
</template>
<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: { Navbar, 'app-footer': Footer }
}
</script>
<style>
</style>
