<template>
  <div>
    <Product 
      :title="product.title"
      :image="require(`@/assets/img/${product.image}`)"
      :features="product.features"
      :price="product.price"
    />
  </div>
</template>

<script>
import Product from '@/components/Product.vue'
export default {
  components: { Product },
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  data () {
    return {
      product:
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
        }
    }
  }
}
</script>

<style>

</style>