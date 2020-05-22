<template>
  <footer>
    <div class="requisites">
      <p class="copy">&copy;</p>
      <p>
        2017-2020 ООО «Люкслайтинг» <br>
        УНП 182982935 <br>
        тел. +375 17 507-51-02 <br>
        luxlighting@inbox.ru
      </p>
    </div>
    <div class="disclaimer">
      <p>
        Сайт не является интернет-магазином. <br>
        Представленный на сайте товар реализуется только <br>
        юридическим лицам и индивидуальным предпринимателям. <br>
        Данный сайт носит информационный характер и не является <br>
        публичной офертой.
      </p>
    </div>
    <div class="social">
      <a href="https://facebook.com"><img src="../assets/img/social/fb.png"></a>
      <a href="https://twitter.com"><img src="../assets/img/social/tw.png"></a>
      <a href="https://google.com"><img src="../assets/img/social/g+.png"></a>
    </div>
  </footer>
</template>

<script>
export default {

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

      p, a {
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