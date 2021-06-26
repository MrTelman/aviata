<template>
  <div class="destination_wrapper">
    <div class="aviata_container destination_bar">
      <v-row class="mb-1">
        <v-col>ТУДА И ОБРАТНО</v-col>
        <v-col>В ОДНУ СТОРОНУ</v-col>
      </v-row>
      <v-row class="d-flex justify-space-between" no-gutters>
        <div class="destination-choose">
          <v-text-field
            class="aviata_input-text"
            label="Откуда"
            prepend-icon="mdi-map-marker"
          />
          <v-img
            max-height="15"
            max-width="15"
            src="../../assets/images/exchange.png"
            class="arrows"
          ></v-img>
          <v-text-field
            class="aviata_input-text"
            label="Куда"
            prepend-icon="mdi-map-marker"
          />
        </div>
        <v-text-field
          v-model="date"
          label="Дата вылета"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
        <v-text-field
          v-model="date"
          label="Дата прилёта"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
        <!-- <v-date-picker
            v-model="date"
            :active-picker.sync="activePicker"
            :max="
              new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10)
            "
            min="1950-01-01"
            @change="save"
          ></v-date-picker> -->
        <!-- <v-select></v-select> -->
        <v-btn
          color="primary"
          class="ml-3 mt-3"
          v-bind:style="{ width: '200px' }"
          >Найти</v-btn
        >
      </v-row>
    </div>
  </div>
</template>
<script lang="ts" src="./Destination.component.ts"></script>
