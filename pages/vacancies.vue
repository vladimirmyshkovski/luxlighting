<template>
  <div>
    <p class="page-title">
      Работа у нас - отличный способ реализовать свои возможности!
    </p>
    <div class="vacancy-card-container">
      <VacancyCard 
        position="Менеджера"
        subposition="по оптовым продажам электротехнической продукции"
        :skills="skills"
        img="manager.jpg"
      />
    </div>
  </div>
</template>

<script>
import VacancyCard from '@/components/Vacancycard.vue'
export default {
  components: {
    VacancyCard
  },
  data() {
    return {
      skills: [
        'опыт работы от 3-х лет в аналогичной должности',
        'уверенный пользователь 1С Торговля 8.2',
        'приветствуется наличие клиентской базы',
        'знание рынка электротехнической продукции'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .vacancy-card-container {
    margin-bottom: 75px;
  }
</style>>

</style>