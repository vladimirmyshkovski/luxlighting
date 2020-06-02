<template>
  <div class="vacancy-card bordered">
    <div class="vacancy-card__description">
      <div class="description__position">
        <p>Приглашаем на работу {{ position }}</p>
        <p class="subposition">{{ subposition }}.</p>
      </div>
      <div>
        <div class="vacancy-card__skills">
          <p>Необходимые навыки:</p>
          <ul>
            <li v-for="(skill, index) in skills" :key="skill" :index="index">
              - {{ skill }}{{ index !== skills.length - 1 ? ';' : '.' }}
            </li>
          </ul>
        </div>
        <p class="vacancy-card__feedback">
          Если Вас заинтересовала данная вакансия, откликнуться можно <br />
          отправив резюме на
          <span>e-mail: luxllighting@inbox.ru </span> с пометкой «соискатель»
        </p>
      </div>
    </div>
    <div class="vacancy-card__image">
      <img :src="require(`@/assets/img/${img}`)" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      default: ''
    },
    subposition: {
      type: String,
      default: ''
    },
    skills: {
      type: Array,
      default: () => []
    },
    img: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.vacancy-card {
  padding: 20px 60px;

  @media screen and (max-width: 876px) {
    margin: 0 20px;
    padding: 20px;
  }

  &__skills {
    margin: 30px 0;

    @media screen and (max-width: 876px) {
      font-size: 14px;
    }

    ul {
      margin: 0;
      padding: 0;
      overflow: hidden;

      li {
        display: block;
        margin: 0;
      }
    }
  }
  &__feedback span {
    color: #f7c601;
  }

  &__image {
    @media screen and (max-width: 876px) {
      display: none;
    }
  }
}
.description__position p {
  color: #f7c601;
  font-size: 24px;

  @media screen and (max-width: 876px) {
    font-size: 18px;
  }
}
</style>
