<template>
  <div class="offer_wrapper">
    <v-row no-gutters>
      <div class="content_card d-flex">
        <div class="offer_info">
          <v-row>
            <v-col sm-4>
              <div class="airline d-flex">
                <img
                  src="https://aviata.kz/static/airline-logos/80x80/KC.png"
                  alt=""
                  height="40"
                  width="40"
                />
                <div>Air-Astana</div>
              </div>
            </v-col>
            <v-col sm-4>
              <div class="date">19 nov sat</div>
              <div class="time">23:15</div>
            </v-col>
            <v-col sm-4>
              <div class="d-flex justify-space-around">
                <div class="code">ALA</div>
                <div class="duration">4ч 20м</div>
                <div class="code">TSE</div>
              </div>
              <div>
                <div class="line-wrapper d-flex">
                  <div class="elipse"></div>
                  <div class="line"></div>
                  <div class="elipse"></div>
                  <div class="line"></div>
                  <div class="elipse"></div>
                </div>
              </div>
              <div class="spare_info">Через Шымкент, 1ч 50мин</div>
            </v-col>
            <v-col sm-4>
              <div class="date">19 nov sat</div>
              <div class="time">23:15</div>
            </v-col>
          </v-row>
        </div>
        <div class="offer_price">
          <v-row
            ><div v-bind:style="{ fontSize: '30px', margin: '0 auto' }">
              6565454
            </div></v-row
          >
          <v-row class="mb-1"
            ><v-btn
              color="primary"
              large
              v-bind:style="{ width: '200px', margin: '0 auto' }"
              >ВЫБРАТЬ</v-btn
            ></v-row
          >
          <v-row class="mb-2"
            ><div v-bind:style="{ margin: '0 auto', fontSize: '12px' }">
              цена за всех пассажиров
            </div></v-row
          >
          <v-row
            ><div v-bind:style="{ margin: '0 auto', fontSize: '12px' }">
              нет багажа + добавить багаж
            </div></v-row
          >
        </div>
      </div>
    </v-row>
    <v-row no-gutters>
      <div class="content_card">
        Здравствуйте! Ваше тестовое задание очень интересное, за исключением момента вёрстки.
        Спасибо за уделённое время. Извините, что не сделал таск до конца. Осталось динамически 
        выводить карточки офферов в зависимости от параметров фильтрации. Компонент фильтра и Оффера можно 
        обернуть в какой-нибудь контекст (уверен он есть во VUE) или тупо сверлить пропсами через VUEX. И всю эту магию 
        повесить экшном на баттон <b>НАЙТИ</b>. Конечно
        хотелось бы найти более изящное решение. Но этим я займусь позже, ибо сгорел от вёрстки. Спасибо за 
        ценный опыт во Vue. <b>Аида вы супер!!!</b> Удачи вам!!!
      </div>
    </v-row>
  </div>
</template>
<script lang="ts" src="./Offers.component.ts"></script>
