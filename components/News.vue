<template>
  <div class="news">
    <div class="news__title">НОВОСТИ</div>
    <div class="title__divider"></div>
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
</template>

<script>
export default {
  data () {
    return {
      articles: [
        {
          id: 1,
          date: "23.10.2019",
          text: "светодиодные лампы серии Т8 с цоколем Г13 давно пользуются популярностью и широко применяются в различных сферах деятельности человека: бытовые и подсобные..."
        },
        {
          id: 2,
          date: "23.10.2019",
          text: "светодиодные лампы серии Т8 с цоколем Г13 давно пользуются популярностью и широко применяются в различных сферах деятельности человека: бытовые и подсобные..."
        },
        {
          id: 3,
          date: "23.10.2019",
          text: "светодиодные лампы серии Т8 с цоколем Г13 давно пользуются популярностью и широко применяются в различных сферах деятельности человека: бытовые и подсобные..."
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
.article {
  margin-bottom: 20px;
  font-size: 12px;

  &__date {
    margin-bottom: 10px;
    display: block;
  }
  &__text {
    
  }
  &__divider {
    width: 100%;
    height: 1px;
    margin-top: 15px;
    background-color: #fff;
  }
}
</style>