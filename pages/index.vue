<template>
  <div>
    <main>
      <div class="company">
        <div class="company__about">
          <div>{{ page.content.about }}</div>
        </div>
        <vue-markdown-it
          v-if="page.content.text"
          class="company__content"
          :source="page.content.text"
        />
        <div class="certificates">
          <div
            v-for="certificate in page.content.certificates"
            :key="certificate.id"
          >
            <img :src="baseURL + certificate.url" />
          </div>
        </div>
      </div>
      <div class="info">
        <News />
        <div class="to-dealers">
          <div class="to-dealers__title">ДИЛЕРАМ</div>
          <div class="to-dealers__divider"></div>
          <vue-markdown-it
            v-if="page.content.dealers"
            :source="page.content.dealers"
          />
        </div>
      </div>
    </main>
    <section>
      <!--div class="we-are-cool">
        {{ page.content.cta }}
      </div-->
      <vue-markdown-it
        class="we-are-cool"
        v-if="page.content.cta"
        :source="page.content.cta"
      />
      <div class="map">
        <img src="../assets/img/map.png" />
      </div>
      <div class="cargo">
        <img src="../assets/img/cargo.png" />
      </div>
    </section>
  </div>
</template>
<script>
import VueMarkdownIt from 'vue-markdown-it'
import News from '@/components/News.vue'
export default {
  components: {
    VueMarkdownIt,
    News
  },
  async asyncData({ $axios }) {
    const response = await $axios.get(`pages?path=index`)
    const page = response.data[0]
    const content = page.content[0]
    if (content.__component === 'main.main2') {
      page.content = content
      return {
        page
      }
    }
  },
  computed: {
    baseURL() {
      return process.env.BASE_URL
    }
  },
  head() {
    return {
      title: this.page.title,
      description: this.page.description
    }
  }
}
</script>
<style lang="scss" scoped>
main {
  margin-top: 45px;
  display: flex;
  text-transform: uppercase;

  @media screen and (max-width: 1048px) {
    flex-direction: column;
    align-items: center;
  }

  .company {
    width: 50%;
    padding: 0 20px;

    @media screen and (max-width: 1048px) {
      width: 100%;
      padding: 0 30px;
      margin-bottom: 40px;
    }

    &__about {
      font-family: 'MyRiad Pro Bold';

      .about__title {
        margin-bottom: 45px;
        font-size: 14px;

        span {
          font-family: 'MyRiad Pro Semibold';
        }
      }

      p {
        margin-bottom: 30px;
        font-size: 12px;
      }
    }

    &__content {
      font-family: 'MyRiad Pro Bold';

      p {
        font-size: 12px;
        margin-top: 30px;
        margin-bottom: 30px;
      }

      span {
        font-family: 'MyRiad Pro Semibold';
      }
    }

    .certificates {
      display: flex;
      justify-content: space-between;

      @media screen and (max-width: 1048px) {
        justify-content: space-around;
      }
      @media screen and (max-width: 520px) {
        flex-direction: column;
        align-items: center;
      }
    }
  }
  .info {
    width: 50%;
    padding: 0 20px;
    font-family: 'MyRiad Pro Bold';

    @media screen and (max-width: 1048px) {
      width: 100%;
      padding: 0 30px;
      align-items: center;
    }

    .to-dealers {
      margin-top: 48px;

      &__title {
        font-size: 14px;
      }
      &__divider {
        width: 100%;
        height: 2px;
        margin-top: 13px;
        margin-bottom: 20px;
        background-color: #fff;
      }
      & p {
        font-size: 12px;
      }
    }
  }
}
section {
  height: 500px;
  margin-top: 30px;
  border-top: 2px solid #f7c601;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (max-width: 1048px) {
    height: 800px;
    flex-direction: column;
    align-items: center;
  }

  .we-are-cool {
    width: 260px;
    padding: 20px 45px;
    font-size: 24px;
    text-align: center;
    text-transform: uppercase;
    border: 4px solid #f7c601;
  }
  .map img {
    width: 520px;
    margin-left: 90px;
    margin-right: -90px;

    @media screen and (max-width: 1048px) {
      margin: auto;
      margin-top: 60px;
    }
    @media screen and (max-width: 520px) {
      width: 300px;
    }
  }
  .cargo {
    position: absolute;
    bottom: 55px;
    right: 120px;

    @media screen and (max-width: 1048px) {
      right: calc(50% - 120px);
    }

    img {
      @media screen and (max-width: 1048px) {
        width: 120px;
      }
    }
  }
}
</style>
