<template>
  <div>
    <div class="category">
      <div class="subcategory">
        <p class="subcategory__title">Лампы газоразрядные ДНАТ</p>
        <div class="catalog-wrapper">
          <CatalogItem 
            v-for="product in products"
            :key="product.id"
            :title="product.title"
            :image="require(`@/assets/img/${product.image}`)"
            :features="product.features"
            :price="product.price"
            @click.native="$router.push({path: `/products/${product.id}`})"
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
  data() {
    return {
      subcats: ['Лампы газоразрядные ДНАТ', 'Лампы газоразрядные ДРИ'],
      products: [
        {
          id: 1,
          title: 'Лампа газоразрядная ДНАТ 70ВТ',
          image: 'lamp.png',
          features: {
            power: '9 Вт',
            voltage: '185-265',
            frequency: '50',
            cap: 'G13',
            colorTemperature: '4000/6500',
            sizes: '600x26',
            colorRenderIndex: '>80',
            lightFlow: '800',
            quantity: '30'
          },
          price: '2.63'
        },
        {
          id: 2,
          title: 'Лампа газоразрядная ДНАТ 70ВТ',
          image: 'lamp.png',
          features: {
            power: '9 Вт',
            voltage: '185-265',
            frequency: '50',
            cap: 'G13',
            colorTemperature: '4000/6500',
            sizes: '600x26',
            colorRenderIndex: '>80',
            lightFlow: '800',
            quantity: '30'
          },
          price: '2.63'
        },
        {
          id: 3,
          title: 'Лампа газоразрядная ДНАТ 70ВТ',
          image: 'lamp.png',
          features: {
            power: '9 Вт',
            voltage: '185-265',
            frequency: '50',
            cap: 'G13',
            colorTemperature: '4000/6500',
            sizes: '600x26',
            colorRenderIndex: '>80',
            lightFlow: '800',
            quantity: '30'
          },
          price: '2.63'
        }
      ]
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