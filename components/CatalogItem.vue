<template>
  <div class="catalog-item">
    <div class="catalog-item__image">
      <img :src="image" alt="title" />
    </div>
    <div>
      <div class="catalog-item__title">
        <p>{{ title }}</p>
      </div>
      <p class="features">Характеристики:</p>
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
        <li class="download">
          <p class="download__text">Открыть спецификацию в PDF</p>
          <img
            class="download__icon"
            src="@/assets/img/download.png"
            alt="Скачать"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    features: {
      type: [Array, Object],
      default: () => {}
    },
    price: {
      type: [String, Number],
      default: ''
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
