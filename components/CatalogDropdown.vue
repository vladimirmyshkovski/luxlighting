<template>
  <div class="dropdown">
    <div class="dropdown__title">КАТАЛОГ</div>
    <div class="tabs">
      <div v-for="(cat, index) in categories" :key="index" class="tab">
        <input
          :id="`check-${index}`"
          type="checkbox"
          :value="cat.cat"
          @click="$emit('chooseCategory', cat.id)"
        />
        <label class="tab__label" :for="`check-${index}`">{{ cat.cat }}</label>
        <ul class="tab__content">
          <li
            v-for="(subcat, idx) in cat.subcats"
            :key="subcat.name"
            @click="showDetails(subcat, idx)"
          >
            <p :class="['subcat', { 'subcat-active': activeSubcat === index }]">
              {{ subcat.name }}
            </p>
            <ul v-if="details" class="details">
              <li
                v-for="(detail, i) in subcat.details"
                :key="detail"
                :class="[
                  'details__detail',
                  { 'detail-active': activeProduct === i }
                ]"
                @click.stop="chooseProduct(subcat.name, i)"
              >
                - Длина: {{ detail }} мм
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import categories from '../categories.json'
export default {
  data() {
    return {
      activeSubcat: null,
      activeProduct: null,
      details: false,
      categories
    }
  },
  methods: {
    showDetails(item, index) {
      this.active = index
      // eslint-disable-next-line no-prototype-builtins
      if (item.hasOwnProperty('details') && !this.details) {
        this.details = true
      } else {
        this.details = false
      }
    },
    chooseProduct(item, index) {
      this.activeProduct = index
      this.$emit('chooseProduct', item)
    }
  }
}
</script>

<style lang="scss">
.dropdown {
  min-width: 300px;
  text-transform: uppercase;

  &__title {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 4px solid #f7c601;
    color: #f7c601;
    font-size: 24px;
  }

  .tabs {
    overflow: hidden;

    .tab {
      width: 100%;
      overflow: hidden;

      &__label {
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: 'MyRiad Pro Semibold';
        font-size: 14px;
        cursor: pointer;

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
        padding-left: 20px;
        font-size: 12px;
        cursor: pointer;
        list-style-type: none;
        border-bottom: 1px solid #fff;

        .subcat {
          padding: 2px 0;
        }

        .subcat-active {
          font-family: 'MyRiad Pro Semibold';
        }

        .details {
          padding-left: 20px;
          list-style-type: none;

          &__detail {
            padding: 2px 0;
          }
          .detail-active {
            color: #f7c601;
          }
        }
      }
      input {
        position: absolute;
        opacity: 0;
        z-index: -1;
      }
      input:checked {
        + .tab__label {
          color: #f7c601;
        }
        + .tab__label::after {
          transform: rotate(-90deg);
        }
        ~ .tab__content {
          max-height: 100vh;
          //padding: 15px;
        }
      }
    }
  }
}
</style>
