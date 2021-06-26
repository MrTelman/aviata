import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "../assets/styles/main.scss";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#55BB06",
        secondary: "#D7D7D7",
        accent: "#8c9eff",
        error: "#b71c1c",
      },
    },
  },
});
