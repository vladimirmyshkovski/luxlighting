<template>
  <div>
    <div class="category">
      <div class="subcategory">
        <p class="subcategory__title">Лампы газоразрядные ДНАТ</p>
        <div class="catalog-wrapper">
          <CatalogItem
            v-for="product in products"
            :key="product.id"
            :product="product"
            @click.native="$router.push({ path: `/catalog/${product.id}` })"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CatalogItem from '@/components/CatalogItem.vue'
export default {
  components: { CatalogItem },
  props: {
    products: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      subcats: ['Лампы газоразрядные ДНАТ', 'Лампы газоразрядные ДРИ']
    }
  }
}
</script>

<style lang="scss">
.subcategory__title {
  margin-top: 20px;
  text-transform: uppercase;

  @media screen and (max-width: 876px) {
    padding-left: 20px;
  }
}
.catalog-wrapper {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
