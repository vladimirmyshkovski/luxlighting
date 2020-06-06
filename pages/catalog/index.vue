<template>
  <div class="catalog">
    <p class="catalog__category">{{ category }}</p>
    <catalog :products="products" />
  </div>
</template>

<script>
import Catalog from '@/components/Catalog.vue'
export default {
  components: { Catalog },
  async asyncData({ $axios }) {
    const response = await $axios.get('products')
    return {
      category: '',
      products: response.data
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.category = localStorage.getItem('category')
    })
  }
}
</script>

<style lang="scss">
.catalog {
  margin-top: 60px;
  margin-bottom: 75px;

  &__category {
    color: #f7c601;
    padding-bottom: 5px;
    border-bottom: 2px solid #fff;
    font-family: 'Myriad Pro Semibold';
    text-transform: uppercase;
    font-size: 24px;

    @media screen and (max-width: 876px) {
      padding-left: 20px;
    }
  }
}
</style>
