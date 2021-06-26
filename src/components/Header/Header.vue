<template>
  <div class="header-wrapper">
    <v-row class="header-container justify-space-between">
      <v-col sm="2">
        <div class="logo-wrapper">
          <div class="logo">aviata<span>.kz</span></div>
          <v-img
            max-height="40"
            max-width="40"
            src="../../assets/images/plane.svg"
            class="plane"
          ></v-img>
        </div>
        <div class="sublogo">сервис покупки авиабилетов</div>
        <div></div>
      </v-col>
      <v-col sm="7">
        <v-row class="booking"><p>Поиск и бронирование авиабилетов</p></v-row>
        <v-row>
          <div class="header_button-wrapper">
            <v-btn
              class="extra-small"
              v-for="(btn, index) in headerButtons"
              :key="index"
            >
              {{ btn }}
            </v-btn>
          </div>
        </v-row>
      </v-col>
      <v-col sm="2" class="header_contacts">
        <p>+7(727)22-55-55</p>
        <p>+7(727)22-55-55</p>
        <p>+7(727)22-55-55</p>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts" src="./Header.component.ts"></script>
