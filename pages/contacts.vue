<template>
  <div>
    <!--p class="page-title">
      Мы работаем только с юридическими лицами и индивидуальными
      предпринимателями и только по безналичному расчету.
    </p-->
    <p class="page-title">
      {{ page.title }}
    </p>
    <div class="contacts bordered">
      <div class="contacts__addresses">
        <div class="address">
          <p class="address__title">Адрес юридический:</p>
          <!--p>
            220073 РБ, г.Минск, ул. Бирюзова, д.4, корп.9, пом.7, каб.19.
          </p-->
          <p>{{ page.legal_address }}</p>
          <p class="address__title">Адрес склада:</p>
          <p>{{ page.warehouse_address }}</p>
          <!--p>
            Минская обл., Минский р-н, Щомыслицкий с/с, 76, район д.Богатырево
            (территория базы ОАО «Озтранс» - Минский р-н, п/о Озерцо,
            Меньковский тракт, 21).
          </p-->
          <p class="address__title inline">Адрес почтовый:</p>
          <!--p>220115 г.Минск, а/я 138.</p-->
          <p>{{ page.post_address }}</p>
          <p class="address__title address__req">Реквизиты</p>
          <!--p>
            р/с BY34 PJCB 3012 0544 9710 0000 0933 в ОАО «Приорбанк» код
            PJCBBY2X 220108 г.Минск, ул. Казинца 92/1 УНП 192982935.
          </p-->
          <!--div>{{ page.content.requisites }}</div-->
          <vue-markdown-it
            v-if="page.requisites"
            class="address__req"
            :source="page.requisites"
          />
        </div>
        <div class="download">
          <div
            class="download__req"
            @click="download(page.requisites_file.url)"
          >
            <img src="../assets/img/requisites.png" alt="скачать реквизиты" />
            <p>
              Скачать <br />
              реквизиты
            </p>
          </div>
          <div
            class="download__route"
            @click="download(page.driving_directions_file.url)"
          >
            <img src="../assets/img/route.png" alt="скачать схему проезда" />
            <p>
              Скачать <br />
              схему проезда
            </p>
          </div>
        </div>
        <div class="law">
          <p>{{ page.law }}</p>
          <!--p>
            Свидетельство о государственной регистрации юридического лица: №
            192982935 от 13 октября 2017 г. выданный Мингорисполкомом.
          </p-->
        </div>
      </div>
      <div class="contacts__info">
        <div class="info__business">
          <div class="business__connection">
            <div class="business__icon">
              <img src="../assets/img/phone_big.png" />
            </div>
            <div>
              <p class="connection__title">Тел.гор.:</p>
              <!--p>{{ page.content.city_phone }}</p-->
              <!--p>+375 (17) 510-28-95;</p>
              <p>+375 (17) 507-51-02.</p-->
              <vue-markdown-it
                v-if="page.city_phone"
                class="connection__title"
                :source="page.city_phone"
              />
              <div class="connection__title">Тел.моб.:</div>
              <!--p>{{ page.content.mobile_phone }}</p-->
              <vue-markdown-it
                v-if="page.mobile_phone"
                :source="page.mobile_phone"
              />
              <!--p>+375 (29) 661-33-96;</p>
              <p>+375 (29) 329-16-89.</p-->
              <div class="connection__title">E-mail:</div>
              <p>{{ page.email }}</p>
            </div>
          </div>
          <div class="business__workhours">
            <div class="business__icon">
              <img src="../assets/img/clock.png" />
            </div>
            <div>
              <p class="connection__title">Режим работы:</p>
              <!--p>Пн-Пт:</p>
              <p>с 09-00 до 17-00</p>
              <p>Сб, Вс: Выходной</p-->
              <!--p>{{ page.content.schedule }}</p-->
              <vue-markdown-it v-if="page.schedule" :source="page.schedule" />
            </div>
          </div>
        </div>
        <div class="info__map">
          <yandex-map
            :coords="coords"
            :zoom="zoom"
            style="width: 100%; height: 100%;"
          >
            <ymap-marker
              v-for="(marker, index) in markers"
              :key="index"
              :index="index"
              :marker-id="index"
              :coords="marker.coords"
              :hint-content="marker.hint"
              marker-type="placemark"
            />
          </yandex-map>
        </div>
      </div>
    </div>
    <div class="attention bordered block">
      <p class="attention__title">ВНИМАНИЕ!</p>
      <!--p class="attention__text">
        Выписка документов и отпуск продукции производится по адресу: Минская
        обл., Минский р-н, Щомыслицкий сельсовет, район д. Озерцо,
        производственно-административное здание № 600/С-94119, офис 2
        (территория базы ОАО «Озтранс» - Минский р-н, п/о Озерцо, Меньковский
        тракт, 21). Возможна предварительная выписка, по согласованию с Вашим
        менеджером.
        <br />
        <br />
        Обязательно наличие действующего договора поставки. При себе иметь
        доверенность на получение товара (с указанием должности) или копию
        приказа о назначении директора (в случае, если товар получает директор),
        документ удостоверяющий личность.
      </p-->
      <!--p class="attention__text">
        {{ page.content.attention }}
      </p-->
      <vue-markdown-it
        v-if="page.attention"
        class="attention__text"
        :source="page.attention"
      />
    </div>
  </div>
</template>

<script>
import VueMarkdownIt from 'vue-markdown-it'
export default {
  components: { VueMarkdownIt },
  async asyncData({ $axios }) {
    const response = await $axios.get(`contacts`)
    const page = response.data
    return { page }
  },
  data() {
    return {
      zoom: 17,
      coords: [53.84465, 27.413922],
      markers: [
        {
          coords: [53.844578, 27.413984],
          hint: 'Меньковский тракт, 21'
        }
      ]
    }
  },
  methods: {
    forceFileDownload(response) {
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'file.png') // or any other extension
      document.body.appendChild(link)
      link.click()
    },
    download(fileUrl) {
      this.$axios
        .get(fileUrl)
        .then((response) => {
          this.forceFileDownload(response)
        })
        .catch(() => console.log('error occured'))
    }
  }
}
</script>

<style lang="scss">
.contacts {
  margin-bottom: 45px;
  padding: 40px 60px;
  display: flex;
  font-family: 'MyRiad Pro Bold';

  @media screen and (max-width: 876px) {
    margin: 0 20px;
    padding: 20px;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 520px) {
    font-size: 14px;
  }

  &__addresses {
    width: 40%;

    @media screen and (max-width: 876px) {
      width: 80%;
      margin-bottom: 100px;
    }

    .address {
      margin-bottom: 45px;

      &__title {
        color: #f7c601;
      }
      & .inline {
        float: left;
        margin-right: 5px;
      }
      &__req {
        margin-top: 25px;

        p {
          margin-top: 10px;
          margin-bottom: 10px;
        }
      }
    }
    .download {
      margin-bottom: 40px;
      display: flex;
      justify-content: space-between;

      @media screen and (max-width: 876px) {
        justify-content: space-around;
      }

      &__req,
      &__route {
        display: flex;
        align-items: flex-end;
        cursor: pointer;

        @media screen and (max-width: 876px) {
          margin: 0 10px;
        }

        p {
          margin-left: 10px;
          color: #f7c601;

          @media screen and (max-width: 520px) {
            font-size: 12px;
          }
        }
      }
    }
  }
  &__info {
    width: 50%;

    @media screen and (max-width: 876px) {
      width: 100%;
    }

    .info__business {
      display: flex;
      justify-content: space-between;

      @media screen and (max-width: 876px) {
        justify-content: space-around;
      }

      .business__connection,
      .business__workhours {
        position: relative;

        @media screen and (max-width: 876px) {
          margin: 0 10px;
        }
        @media screen and (max-width: 520px) {
          font-size: 12px;
        }

        .business__icon {
          position: absolute;
          top: 0;
          left: -60px;

          @media screen and (max-width: 876px) {
            top: -60px;
            left: 0;
          }
        }
        .connection__title {
          color: #f7c601;

          &:not(:first-child) {
            margin-top: 20px;
          }
        }
      }
      .business__workhours {
        margin-right: 60px;

        @media screen and (max-width: 876px) {
          margin-right: 0;
        }
      }
    }
    .info__map {
      max-width: 420px;
      height: 300px;
      margin-top: 30px;
      border: 4px #f7c601 solid;

      @media screen and (max-width: 876px) {
        max-width: 100%;
        height: 400px;
        margin: auto;
        margin-top: 30px;
      }
      @media screen and (max-width: 520px) {
        font-size: 12px;
      }
    }
  }
}

.attention {
  margin-bottom: 75px;
  padding: 40px 60px;
  font-size: 16px;
  font-family: 'MyRiad Pro Bold';

  @media screen and (max-width: 876px) {
    margin: 40px 20px;
    padding: 40px 20px;
  }
  @media screen and (max-width: 520px) {
    font-size: 14px;
  }

  &__title {
    color: #fd0505;

    @media screen and (max-width: 520px) {
      font-size: 16px;
    }
  }
}
</style>
