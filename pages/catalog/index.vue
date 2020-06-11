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
  display: flex;

  .catalog-wrapper {
    width: 100%;
    margin-left: 45px;
  }

  .breadcrumbs {
    width: 100%;
    margin-top: 12px;
    padding-bottom: 10px;
    border-bottom: 4px solid #f7c601;
    font-size: 14px;
    text-transform: uppercase;
    position: relative;

    &:after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      bottom: -11px;
      width: 100%;
      height: 3px;
      background-color: #f7c601;
    }

    span {
      color: #f7c601;
      cursor: pointer;
    }

    &__absolute-path {
      font-size: 12px;
    }

    &__relative-path {
      font-size: 14px;
    }
  }

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
