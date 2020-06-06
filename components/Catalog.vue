<template>
  <div>
    <div class="category">
      <div
        v-for="category in categories"
        :key="category.id"
        class="category__item"
      >
        <div class="item__img">
          <img :src="require(`@/assets/img/products/${category.img}`)" />
        </div>
        <div class="item__title">
          <p>{{ category.cat || category.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
.category {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  &__item {
    margin-top: 50px;
    width: 190px;
    text-align: center;
    cursor: pointer;

    .item__img {
      margin: auto;
      margin-bottom: 15px;
      width: 190px;
      height: 190px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      border: 2px solid #f7c601;
      position: relative;

      &:before {
        content: '';
        min-width: 198px;
        height: 198px;
        display: block;
        border: 2px solid #f7c601;
        position: absolute;
        top: -6px;
        left: -6px;
      }
    }
    .item__title {
      text-align: center;
      font-size: 14px;
      text-transform: uppercase;
    }
  }
}
</style>
