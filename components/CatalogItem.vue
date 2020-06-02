<template>
  <div class="catalog-item">
    <div class="catalog-item__title">
      <p>{{ product.title }}</p>
    </div>
    <div class="catalog-item__image">
      <img :src="product.image" :alt="product.title" />
    </div>
    <ul class="catalog-item__product">
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
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
.catalog-item {
  width: 320px;
  padding: 0 50px;
  margin-bottom: 60px;
  cursor: pointer;

  &__title {
    text-align: center;
    text-transform: uppercase;
    font-family: 'MyRiad Pro Bold';
    font-size: 16px;
  }
  &__image {
    width: 150px;
    height: 150px;
    margin: 15px auto;
    background-color: #fff;
    border: 3px solid #f7c601;
  }
  &__product {
    list-style-type: none;
    margin: 0;
    padding: 0;
    font-size: 12px;

    .feature,
    .price {
      display: flex;
      align-items: center;
    }

    .price {
      margin-top: 10px;

      &__value {
        padding-top: 2px;
        padding-bottom: 2px;
        padding-left: 4px;
        border: 1px solid #f7c601;
      }
    }

    .feature__prop,
    .price__prop {
      width: 75%;
    }
    .feature__value,
    .price__value {
      width: 25%;
    }
  }
}
</style>
