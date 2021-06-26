<template>
  <div class="options_wrapper">
    <v-row no-gutters>
      <div class="content_card">
        <h3>Опции тарифа</h3>
        <div v-bind:style="{ padding: '20px' }">
          <v-row v-for="(option, index) in packageOptions" :key="index">
            <v-checkbox :label="option"></v-checkbox>
          </v-row>
        </div>
      </div>
      <div class="content_card">
        <h3>Авиакомпании</h3>
        <div v-bind:style="{ padding: '20px' }">
          <v-row v-for="(сompany, index) in companies" :key="index">
            <v-checkbox :label="сompany"></v-checkbox>
          </v-row>
        </div>
      </div>
    </v-row>
  </div>
</template>
<script lang="ts" src="./Options.component.ts"></script>
