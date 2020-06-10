<template>
  <div>
    <p class="page-title">
      {{ page.content.title }}
    </p>
    <div class="vacancy-card-container">
      <VacancyCard
        :position="page.content.position"
        :subposition="page.content.subposition"
        :skills="page.content.skills.skills"
        :img="page.content.image.url"
      />
    </div>
  </div>
</template>

<script>
import VacancyCard from '@/components/VacancyCard.vue'
export default {
  components: {
    VacancyCard
  },
  async asyncData({ $axios }) {
    const response = await $axios.get(`pages?path=vacancies`)
    const page = response.data[0]
    const content = page.content[0]
    if (content.__component === 'vacancie.vacancie') {
      page.content = content
      return {
        page
      }
    }
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
  },
  computed: {
    head() {
      return {
        title: this.page.title,
        description: this.page.description
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.vacancy-card-container {
  margin-bottom: 75px;
}
</style>
