<template>
  <div class="product">
    <div class="product__image">
      <img :src="baseImageUrl + product.image.url" :alt="product.title" />
    </div>
    <div class="product__title">
      <p>{{ product.title }}</p>
    </div>
    <ul class="product__product">
      <li class="feature">
        <span class="feature__prop">Потребляемая мощность, Вт</span>
        <span class="feature__value">{{ product.power }}</span>
      </li>
      <li class="feature">
        <span class="feature__prop">Напряжение питания, В</span>
        <span class="feature__value">{{ product.voltage }}</span>
      </li>
      <li class="feature">
        <span class="feature__prop">Частота, Гц</span>
        <span class="feature__value">{{ product.frequency }}</span>
      </li>
      <li class="feature">
        <span class="feature__prop">Цоколь</span>
        <span class="feature__value">{{ product.cap }}</span>
      </li>
      <li class="feature">
        <span class="feature__prop">Цветовая температура, K</span>
        <span class="feature__value">{{ product.colorTemperature }}</span>
      </li>
      <li class="feature">
        <span class="feature__prop">Кабаритные размеры, мм</span>
        <span class="feature__value">{{ product.sizes }}</span>
      </li>
      <li class="feature">
        <span class="feature__prop">Индекс цветопередачи, Ra</span>
        <span class="feature__value">{{ product.colorRenderIndex }}</span>
      </li>
      <li class="feature">
        <span class="feature__prop">Световой поток, Лм</span>
        <span class="feature__value">{{ product.lightFlow }}</span>
      </li>
      <li class="feature">
        <span class="feature__prop">Количество в упаковке, шт</span>
        <span class="feature__value">{{ product.quantity }}</span>
      </li>
      <li class="price">
        <span class="price__prop">Цена, без учета НДС</span>
        <span class="price__value">{{ product.price }} руб</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    baseImageUrl() {
      return process.env.BASE_URL
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
  min-height: 400px;
  margin: 60px;
  cursor: pointer;

  &__title {
    text-transform: uppercase;
    font-family: 'MyRiad Pro Bold';
    font-size: 16px;
  }
  &__image {
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
    margin-right: 40px;
    background-color: #fff;
    border: 3px solid #f7c601;
  }
  &__product {
    list-style-type: none;
    margin-top: 40px;
    padding: 0;
    font-size: 16px;

    .feature,
    .price {
      display: flex;
      align-items: center;
    }

    .price {
      margin-top: 10px;

      &__value {
        margin-left: -5px;
        padding: 5px;
        border: 1px solid #f7c601;
      }
    }

    .feature__prop,
    .price__prop {
      width: 75%;
    }
  }
}
</style>
