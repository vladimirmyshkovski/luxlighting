<template>
  <div class="catalog-item">
    <div class="catalog-item__title">
      <p>{{ title }}</p>
    </div>
    <div class="catalog-item__image"><img :src="image" alt="title" /></div>
    <ul class="catalog-item__features">
      <li class="feature">
        <span class="feature__prop">Потребляемая мощность, Вт</span>
        <span class="feature__value">{{ features.power }}</span>
      </li>
      <li class="feature">
        <span class="feature__prop">Напряжение питания, В</span>
        <span class="feature__value">{{ features.voltage }}</span>
      </li>
      <li class="feature">
        <span class="feature__prop">Частота, Гц</span>
        <span class="feature__value">{{ features.frequency }}</span>
      </li>
      <li class="feature">
        <span class="feature__prop">Цоколь</span>
        <span class="feature__value">{{ features.cap }}</span>
      </li>
      <li class="feature">
        <span class="feature__prop">Цветовая температура, K</span>
        <span class="feature__value">{{ features.colorTemperature }}</span>
      </li>
      <li class="feature">
        <span class="feature__prop">Кабаритные размеры, мм</span>
        <span class="feature__value">{{ features.sizes }}</span>
      </li>
      <li class="feature">
        <span class="feature__prop">Индекс цветопередачи, Ra</span>
        <span class="feature__value">{{ features.colorRenderIndex }}</span>
      </li>
      <li class="feature">
        <span class="feature__prop">Световой поток, Лм</span>
        <span class="feature__value">{{ features.lightFlow }}</span>
      </li>
      <li class="feature">
        <span class="feature__prop">Количество в упаковке, шт</span>
        <span class="feature__value">{{ features.quantity }}</span>
      </li>
      <li class="price">
        <span class="price__prop">Цена, без учета НДС</span>
        <span class="price__value">{{ price }} руб</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    image: String,
    features: [Array, Object],
    price: [String, Number]
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
  &__features {
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
}</style
>>
