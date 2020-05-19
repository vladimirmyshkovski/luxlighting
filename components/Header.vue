<template>
  <div class="header">
    <header>
      <div class="logo">
        <img src="../assets/img/logo.png" alt="LUX LIGHTING" width="200">
      </div>
      <nav class="nav">
        <ul class="navbar">
          <li><nuxt-link to="/">Главная</nuxt-link></li>
          <li
            @mouseover="isHover=true"
            @mouseleave="isHover=false"
            class="navbar__catalog"
          >
            <nuxt-link to="/catalog">Каталог</nuxt-link>
            <div v-if="isHover" class="catalog-dropdown">
              <CatalogDropdown />
            </div>
          </li>
          <li><nuxt-link to="/vacancies">Вакансии</nuxt-link></li>
          <li><nuxt-link to="/contacts">Контакты</nuxt-link></li>
        </ul>
      </nav>
      <div class="header-contacts">
        <div class="header-contacts__phone">
          <div>
            <img src="../assets/img/phone.png" alt="">
          </div>
          <div>
            <p>+375 (17) 212-03-59</p>
            <p>+375 (29) 661-33-96</p>
          </div>
        </div>
        <div class="header-contacts__email">
          <div>
            <img src="../assets/img/email.png" alt="info@etline.by">
          </div>
          <p>info@etline.by</p>
        </div>
      </div>
    </header>
    <div class="slogan">
      <p>Прямые поставки электротехнической продукции</p>
    </div>
  </div>
</template>

<script>
import CatalogDropdown from '@/components/CatalogDropdown.vue'
export default {
  components: { CatalogDropdown },
  data() {
    return {
      isHover: false
    }
  }
}
</script>

<style lang="scss">
.header {
  margin: auto;
  height: 486px;
  background-image: url('../assets/img/hero-bg.jpg');
  background-position-x: -1px;
  border-bottom: 9px #f7c601 solid;
  font-size: 14px;

  header {
    display: flex;
    align-items: flex-end;
  
    & .logo {
      margin: 40px 0 0 30px;
    }
  }
}
.nav {
  height: 50px;
  display: flex;
  align-items: center;
}
.navbar {
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-size: 12px;

  li {
    float: left;
    margin-left: 20px;
    color: #fff;

    a {
      display: block;
      padding: 11px 5px;
      text-decoration: none; 

      &:hover {
        color: #000;
        background-color: #f7c601;
      }
    }
  }
  &__catalog {
    position: relative;

    .catalog-dropdown {
      position: absolute;
      top: 35px;
      left: 0;
    }
  }
}
.header-contacts,
.header-contacts__phone,
.header-contacts__email {
  display: flex;
  align-items: center;

  p {
    margin-left: 10px;
  }
}
.header-contacts {
  margin-left: auto;
  margin-right: 20px;
}
.header-contacts__phone {
  font-size: 12px;
}
.header-contacts__email {
  margin-left: 15px;
  font-size: 12px;
}
.slogan p {
  width: 620px;
  margin-top: 25px;
  margin-left: 40px;
  line-height: 55px;
  border-top: 4px #f7c601 solid;
  border-bottom: 4px #f7c601 solid;
  font-size: 16px;
  letter-spacing: 5px;
  text-transform: uppercase;
}
</style>