<template>
  <div>
    <main>
      <div class="company">
        <div class="company__about">
          <div class="about__title">Компания <span>ООО «ЛЮКСЛАЙТИНГ»</span> - единственный поставщик светотехнических решений</div>
          <p>
            «люкслайтинг» - активно развивающаяся компания, которая
            занимается реализацией комплексных электротехнических проектов,
            поставкой и продажей светотехники и электрооборудования в минске
            от ведущих производителей. этот сайт электротехники и светотехники
            поможет вам сделать выбор нужного товара из многообразия
            электротехнической продукции.
          </p>
          <p>
            основные партнеры «люкслайтинг» - группа компаний «перспектива
            групп»
            г. санкт-петербург и тм jazzway, предприятие issata limited, один из
            ведущих производителей электротехнической продукции на территории
            кнр, чптуп «витебское электротехническое предприятие «свет» - 
            отечественный производитель и импортер светотехнической продукции
            и многие другие.
          </p>
          <p>
            мы предоставляем вам отличную вохможность выгодно купить
            электротехнику в минске! будучи официальными дилерами и
            партнерами предприятий-изготовителей электротехники и 
            электрооборудования, мы открыты к взаимовыгодному сотрудничеству
          </p>
        </div>
        <div class="certificates">
          <div><img src="../assets/img/c1.png"></div>
          <div><img src="../assets/img/c2.png"></div>
          <div><img src="../assets/img/c3.png"></div>
        </div>
      </div>
      <div class="info">
        <News />
        <div class="to-dealers">
          <div class="to-dealers__title">ДИЛЕРАМ</div>
          <div class="to-dealers__divider"></div>
          <p>светодиодные лампы серии Т8 с цоколем Г13 давно пользуются
            популярностью и широко применяются в различных сферах
            деятельности человека: бытовые и подсобные...
          </p>
        </div>
      </div>
    </main>
    <section>
      <div class="what-we-do">
        <p>
          мы ведем
          прямые
          поставки
          товара <br>
          с заводов <br>
          китая без 
          посредников
        </p>
      </div>
      <div class="map">
        <img src="../assets/img/map.png">
      </div>
      <div class="cargo">
        <img src="../assets/img/cargo.png">
      </div>
    </section>
  </div>
</template>

<script>
import News from '@/components/News.vue'
export default {
  components: {
    News
  }
}
</script>

<style lang="scss" scoped>
  main {
    margin-top: 45px;
    display: flex;
    text-transform: uppercase;

    .company {
      width: 50%;
      padding: 0 20px;

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
      .certificates {
        display: flex;
        justify-content: space-between;
      }
    }
    .info {
      width: 50%;
      padding: 0 20px;
      font-family: 'MyRiad Pro Bold';

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

    .what-we-do {
      width: 260px;
      padding: 20px 45px;
      font-size: 24px;
      text-align: center;
      text-transform: uppercase;
      border: 4px solid #f7c601;
    }
    .map img {
      width: 600px;
      margin-left: 90px;
      margin-right: -90px;
    }
    .cargo {
      position: absolute;
      bottom: 55px;
      right: 120px;
    }
  }
</style>