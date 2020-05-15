<template>
  <div class="container">
    <section>
      <Header />
      <Nuxt />
      <Footer />
    </section>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/style/_base.scss";
</style>