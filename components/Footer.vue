<template>
  <footer>
    <div class="requisites">
      <p class="copy">&copy;</p>
      <p>
        {{ footer.title }} <br />
        УНП {{ footer.tin }} <br />
        тел. {{ footer.phone_number }} <br />
        {{ foter.email }}
      </p>
    </div>
    <!--div class="disclaimer">
      <p>
        Сайт не является интернет-магазином. <br />
        Представленный на сайте товар реализуется только <br />
        юридическим лицам и индивидуальным предпринимателям. <br />
        Данный сайт носит информационный характер и не является <br />
        публичной офертой.
      </p>
    </div-->
    <vue-markdown-it
      v-if="header.disclaimer"
      class="disclaimer"
      :source="header.disclaimer"
    />
    <div class="social">
      <a v-if="header.facebook" :href="header.facebook">
        <img src="../assets/img/social/fb.png" />
      </a>
      <a v-if="header.twitter" :href="header.twitter">
        <img src="../assets/img/social/tw.png" />
      </a>
      <a v-if="header.google" :href="header.google">
        <img src="../assets/img/social/g+.png" />
      </a>
    </div>
  </footer>
</template>

<script>
import VueMarkdownIt from 'vue-markdown-it'

export default {
  components: { VueMarkdownIt },
  data: () => ({
    footer: {
      title: '',
      tin: '',
      phone_number: '',
      email: '',
      disclaimer: '',
      facebook: '',
      twitter: '',
      google: ''
    }
  }),
  async mounted() {
    await this.$nextTick(async () => {
      const response = await this.$axios.get('footer')
      this.footer = response.data
    })
  }
}
</script>

<style scoped lang="scss">
footer {
  height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 4px solid #f7c601;
  font-size: 12px;

  @media screen and (max-width: 1048px) {
    justify-content: space-around;
  }
  @media screen and (max-width: 876px) {
    height: 250px;
    padding: 20px 0;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }

  .requisites,
  .social {
    display: flex;

    p,
    a {
      margin-right: 10px;
    }

    .copy {
      font-size: 18px;

      @media screen and (max-width: 876px) {
        margin-top: 20px;
      }
    }
  }
  .disclaimer {
    max-width: 340px;
    text-align: center;

    @media screen and (max-width: 520px) {
      margin: 10px;
      margin-bottom: 20px;
    }
  }
}
</style>
