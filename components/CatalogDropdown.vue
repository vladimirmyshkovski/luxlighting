<template>
  <div class="catalog__dropdown">
    <div class="tabs">
      <div v-for="(cat, index) in categories" :key="index" class="tab">
        <input :id="`check-${index}`" type="checkbox" :value="cat.cat" />
        <label class="tab__label" :for="`check-${index}`">
          {{ cat.cat }}
        </label>
        <div class="tab__content">
          <div v-for="(subcat, idx) in cat.subcats" :key="idx">
            <p>
              {{ subcat.name }}
            </p>
            <!-- <ul v-if="details" class="details">
              <li v-for="(detail, i) in subcat.details" :key="i">
                - Длина: {{ detail }} мм
              </li>
            </ul> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import categories from '../categories.json'
export default {
  data() {
    return {
      categories,
      catIndex: null,
      showCategories: false,
      details: false
    }
  },
  methods: {
    showDetails(item, index) {
      //
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog__dropdown {
  width: 230px;
  position: absolute;
  top: 45px;
  left: 0;

  .tabs {
    overflow: hidden;

    .tab {
      width: 100%;
      background-color: #523526;
      overflow: hidden;

      &__label {
        padding: 10px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #835d49;
        font-family: 'MyRiad Pro Semibold';
        font-size: 12px;
        cursor: pointer;

        &:hover {
          background-color: darken(#835d49, 10%);
        }

        &::after {
          content: '\276F';
          width: 15px;
          height: 15px;
          text-align: center;
          transform: rotate(90deg);
          transition: all 0.35s;
        }
      }
      &__content {
        max-height: 0;
        padding: 0;
        background-color: #30180b;
        font-size: 10px;
        cursor: pointer;
        list-style-type: none;

        p {
          padding: 5px 10px;
          border-bottom: 1px solid #523526;

          &:hover {
            background-color: darken(#30180b, 5%);
          }
        }
      }
      input {
        position: absolute;
        opacity: 0;
        z-index: -1;

        &:checked {
          + .tab__label {
            color: #f7c601;
          }
          + .tab__label::after {
            transform: rotate(-90deg);
          }
          ~ .tab__content {
            max-height: 100vh;
          }
        }
      }
    }
  }
}
</style>
