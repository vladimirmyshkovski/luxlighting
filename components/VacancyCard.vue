<template>
  <div class="vacancy-card bordered">
    <div class="vacancy-card__description">
      <div class="description__position">
        <p>Приглашвем на работу {{ position }}</p>
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
          Если Вас заинтересовала данная вакансия, откликнуться можно <br>
          отправив резюме на 
          <span>e-mail: luxllighting@inbox.ru </span> с пометкой «соискатель»
        </p>
      </div>
    </div>
    <div class="vacancy-card__image">
      <img :src="require(`@/assets/img/${img}`)">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    position: String,
    subposition: String,
    skills: Array,
    img: String
  }
}
</script>

<style lang="scss" scoped>
  .vacancy-card {
    padding: 20px 60px;

    &__skills {
      margin: 30px 0;

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
  }
  .description__position p {
    color: #f7c601;
    font-size: 24px;

    .subposition {
      font-size: 18px;
    }
  }
</style>>

</style>