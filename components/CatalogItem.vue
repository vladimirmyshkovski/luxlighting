<template>
  <div class="catalog-item">
    <div class="catalog-item__title">
      <p>{{ product.title }}</p>
    </div>
    <div class="catalog-item__image">
      <img :src="baseImageUrl + product.image.url" :alt="product.title" />
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

<style lang="scss">
.catalog-item {
  padding: 0 50px;
  margin-top: 40px;
  margin-bottom: 60px;
  display: flex;
}
&__image {
  width: 260px;
  height: 260px;
  margin-right: 60px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 3px solid #f7c601;
}

&__title {
  margin-top: 4px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  text-transform: uppercase;
  font-size: 24px;
  border-bottom: 1px solid #fff;
}

.features {
  font-size: 14px;
  font-family: 'MyRiad Pro Semibold';
  text-transform: uppercase;
}

&__features {
  &__product {
    list-style-type: none;
    margin-top: 20px;
    padding: 0;
    font-size: 12px;

    .feature,
    .download {
      display: flex;
      align-items: center;
    }

    .download {
      margin-top: 15px;
      align-items: flex-end;
      cursor: pointer;

      &__value {
        padding-top: 2px;
        padding-bottom: 2px;
        padding-left: 4px;
        border: 1px solid #f7c601;
      }
    }

    .feature__prop,
    .download__text {
      width: 75%;
    }
    .download__text {
      color: #f7c601;
      font-size: 14px;
    }
    .feature__value {
      width: 25%;
    }
  }
}
</style>
