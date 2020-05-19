<template>
  <div class="news">
    <div class="news__title">НОВОСТИ</div>
    <div class="title__divider"></div>
    <div class="article-wrapper">
      <div 
        v-for="article in articles"
        :key="article.id"
        class="news__article article"
      >
        <span class="article__date">{{ article.date }}</span>
        <p class="article__text">{{ article.text }}</p>
        <div class="article__divider"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      articles: [
        {
          id: 1,
          date: "23.10.2019",
          text: "светодиодные лампы серии Т8 с цоколем Г13 давно пользуются популярностью и широко применяются в различных сферах деятельности человека: бытовые и подсобные  помещения, коридоры, лестничные пролеты, муниципальные и образовательные учреждения, прочее. Они являются энергоэффективными аналогами люминесцентных ламп, к тому же, на порядок долговечнее, безопаснее, а также имеют ряд технических преимуществ."
        },
        {
          id: 2,
          date: "23.10.2019",
          text: "светодиодные лампы серии Т8 с цоколем Г13 давно пользуются популярностью и широко применяются в различных сферах деятельности человека: бытовые и подсобные  помещения, коридоры, лестничные пролеты, муниципальные и образовательные учреждения, прочее. Они являются энергоэффективными аналогами люминесцентных ламп, к тому же, на порядок долговечнее, безопаснее, а также имеют ряд технических преимуществ."
        },
        {
          id: 3,
          date: "23.10.2019",
          text: "светодиодные лампы серии Т8 с цоколем Г13 давно пользуются популярностью и широко применяются в различных сферах деятельности человека: бытовые и подсобные  помещения, коридоры, лестничные пролеты, муниципальные и образовательные учреждения, прочее. Они являются энергоэффективными аналогами люминесцентных ламп, к тому же, на порядок долговечнее, безопаснее, а также имеют ряд технических преимуществ"
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.news__title {
  font-size: 14px;
}
.title__divider {
  width: 100%;
  height: 2px;
  margin-top: 12px;
  margin-bottom: 45px;
  background-color: #fff;
}
.article-wrapper {
  max-height: 320px;
  overflow-y: auto;
}
.article {
  margin-bottom: 20px;
  font-size: 12px;

  &__date {
    margin-bottom: 10px;
    display: block;
  }
  &__text {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  &__divider {
    width: 100%;
    height: 1px;
    margin-top: 15px;
    background-color: #fff;
  }
}
</style>