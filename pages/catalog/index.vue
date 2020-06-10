<template>
  <div class="catalog">
    <CatalogDropdown
      @chooseCategory="chooseCategory"
      @chooseProduct="chooseProduct"
    />
    <div class="catalog-wrapper">
      <div class="breadcrumbs">
        <span class="breadcrumbs__absolute-path">
          <span @click="$router.push({ path: '/' })">Главная</span> /
          <span @click="$router.go(-1)">Каталог</span>
          <span v-if="category !== ''">/</span>
        </span>
        <span class="breadcrumbs__relative-path"> {{ category }} </span>
      </div>
      <Catalog v-if="!showProduct" :categories="categories" />
      <CatalogItem
        v-if="showProduct"
        :title="product.title"
        :image="require(`@/assets/img/products/${product.image}`)"
        :features="product.features"
        :price="product.price"
      />
    </div>
  </div>
</template>

<script>
import Catalog from '@/components/Catalog.vue'
import CatalogItem from '@/components/CatalogItem.vue'
import CatalogDropdown from '@/components/CatalogDropdown.vue'
export default {
  components: { Catalog, CatalogItem, CatalogDropdown },
  data() {
    return {
      products: [],
      product: 'null',
      categories: [],
      category: '',
      showProduct: false
    }
  },
  methods: {
    chooseCategory(id) {
      const cats = this.categories.find((cat) => cat.id === id)
      this.categories = cats.subcats
      this.category = this.categories[0].name
    },
    chooseProduct(item) {
      this.showProduct = true
      this.product = this.products.find((product) => item === product.category)
    }
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
