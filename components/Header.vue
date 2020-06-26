<template>
  <div class="header">
    <header>
      <div class="logo">
        <img src="../assets/img/logo.png" alt="LUX LIGHTING" width="200" />
      </div>
      <nav class="nav">
        <ul class="navbar">
          <li><nuxt-link to="/">Главная</nuxt-link></li>
          <li class="navbar__dropdown" @mouseover="dropdown = true">
            <CatalogDropdown v-if="dropdown" @chooseCat="chooseCat" />
            <nuxt-link to="/catalog">Каталог</nuxt-link>
          </li>
          <li><nuxt-link to="/vacancies">Вакансии</nuxt-link></li>
          <li><nuxt-link to="/contacts">Контакты</nuxt-link></li>
        </ul>
      </nav>
      <div class="header-contacts">
        <div class="header-contacts__phone">
          <div>
            <img src="../assets/img/phone.png" alt="" />
          </div>
          <div>
            <p>+375 (17) 212-03-59</p>
            <p>+375 (29) 661-33-96</p>
          </div>
        </div>
        <div class="header-contacts__email">
          <div>
            <img src="../assets/img/email.png" alt="info@etline.by" />
          </div>
          <p>info@etline.by</p>
        </div>
      </div>
      <div class="burger-menu" @click="sidebar = true">
        <img src="../assets/img/open-menu.png" width="30" />
      </div>
    </header>
    <div class="header-hero">
      <p class="slogan">Прямые поставки электротехнической продукции</p>
      <div class="search">
        <input type="text" placeholder="Введите наименование (маркировку)" />
        <img src="../assets/img/search.png" />
      </div>
    </div>
    <transition name="slide">
      <ul v-if="sidebar" class="side-navbar" @click="sidebar = false">
        <li><nuxt-link to="/">Главная</nuxt-link></li>
        <li><nuxt-link to="/catalog">Каталог</nuxt-link></li>
        <li><nuxt-link to="/vacancies">Вакансии</nuxt-link></li>
        <li><nuxt-link to="/contacts">Контакты</nuxt-link></li>
      </ul>
    </transition>
    <img
      v-if="sidebar"
      class="close"
      src="../assets/img/close.png"
      width="20"
      @click="sidebar = false"
    />
  </div>
</template>

<script>
import CatalogDropdown from '../components/CatalogDropdown'
export default {
  components: { CatalogDropdown },
  data() {
    return {
      dropdown: false,
      sidebar: false
    }
  },
  methods: {
    chooseCat(id) {
      this.dropdown = false
      this.$router.push({ path: '/catalog', params: { id } })
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

      @media screen and (max-width: 520px) {
        margin-left: 10px;
      }

      img {
        @media screen and (max-width: 876px) {
          width: 100px;
          margin-left: 10px;
        }
        @media screen and (max-width: 520px) {
          width: 90px;
        }
      }
    }
  }
}
.nav {
  height: 50px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 876px) {
    display: none;
  }
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
  &__dropdown {
    position: relative;
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

  @media screen and (max-width: 876px) {
    margin-left: 40px;
  }
  @media screen and (max-width: 520px) {
    margin-left: 25px;
    flex-direction: column;
    align-items: flex-start;
    font-size: 10px;
  }
}
.header-contacts__phone {
  font-size: 12px;

  @media screen and (max-width: 520px) {
    font-size: 10px;
  }
}
.header-contacts__email {
  margin-left: 15px;
  font-size: 12px;

  @media screen and (max-width: 520px) {
    margin: 3px 0 0;
  }
}
.burger-menu {
  display: none;

  @media screen and (max-width: 876px) {
    display: block;
    margin-left: auto;
    margin-right: 30px;
  }
  @media screen and (max-width: 520px) {
    margin-right: 20px;
  }

  img {
    @media screen and (max-width: 520px) {
      width: 20px;
    }
  }
}
.header-hero {
  display: flex;
  align-items: center;

  @media screen and (max-width: 876px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }

  .search {
    margin-left: auto;
    margin-right: 15px;
    margin-top: 25px;
    position: relative;

    @media screen and (max-width: 876px) {
      margin-left: 40px;
    }
    @media screen and (max-width: 520px) {
      margin-left: 20px;
    }

    input {
      width: 265px;
      padding: 5px 10px;
      background-color: transparent;
      border: 2px solid #f7c601;
      border-radius: 9px;

      &::placeholder {
        color: #fff;
        font-size: 12px;
      }
      &:focus {
        outline: none;
      }
      &:focus::placeholder {
        color: #999;
      }
    }

    img {
      position: absolute;
      top: 7px;
      right: 15px;
      cursor: pointer;
    }
  }
}
.slogan {
  width: 620px;
  margin-top: 25px;
  margin-left: 40px;
  line-height: 55px;
  border-top: 4px #f7c601 solid;
  border-bottom: 4px #f7c601 solid;
  font-size: 16px;
  letter-spacing: 5px;
  text-transform: uppercase;

  @media screen and (max-width: 876px) {
    width: 70%;
    line-height: 30px;
  }
  @media screen and (max-width: 876px) {
    font-size: 12px;
  }
  @media screen and (max-width: 520px) {
    width: 265px;
    margin-left: 20px;
  }
}
.side-navbar {
  width: 70%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #523526;
  list-style-type: none;
  text-transform: uppercase;
  font-size: 16px;

  li {
    margin-top: 20px;
    color: #fff;

    a {
      display: block;
      padding: 11px 5px;
      text-decoration: none;
    }
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
.close {
  //display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 99;
}
</style>
