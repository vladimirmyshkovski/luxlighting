<template>
  <div class="dropdown">
    <div class="tabs">
      <div class="tab">
        <input
          id="check-1"
          type="checkbox"
          value="Лампы промышленные"
          @click="checkCategory"
        />
        <label class="tab__label" for="check-1">Лампы промышленные</label>
        <div class="tab__content">
          <p>Лампы газоразрядные ДНАТ, ДРИ, ДРЛ, ДРВ</p>
          <p>Лампы люминисцентные и светодиодные</p>
        </div>
      </div>
      <div class="tab">
        <input
          id="check-2"
          type="checkbox"
          value="Светильники светодиодные"
          @click="checkCategory"
        />
        <label class="tab__label" for="check-2">Светильники светодиодные</label>
        <div class="tab__content">
          <p>Лампы газоразрядные ДНАТ, ДРИ, ДРЛ, ДРВ</p>
          <p>Лампы люминисцентные и светодиодные</p>
        </div>
      </div>
      <div class="tab">
        <input
          id="check-3"
          type="checkbox"
          value="Блоки аварийного питания БАП"
          @click="checkCategory"
        />
        <label class="tab__label" for="check-3"
          >Блоки аварийного питания БАП</label
        >
        <div class="tab__content">
          <p>Лампы газоразрядные ДНАТ, ДРИ, ДРЛ, ДРВ</p>
          <p>Лампы люминисцентные и светодиодные</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    checkCategory(e) {
      if (process.browser) {
        localStorage.setItem('category', e.target.value)
      }
    }
  }
}
</script>

<style lang="scss">
.dropdown {
  width: 230px;
  text-transform: uppercase;

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
          transition: all 0.35s;
        }
      }
      &__content {
        max-height: 0;
        background-color: #30180b;
        font-size: 10px;
        cursor: pointer;

        p {
          padding: 10px;
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
      }
      input:checked {
        + .tab__label::after {
          transform: rotate(90deg);
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
