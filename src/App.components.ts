import { Component, Vue } from "vue-property-decorator";
import Header from "./components/Header/Header.vue";
import Destination from "./components/Destination/Destination.vue";
import Offers from "./components/Offers/Offers.vue";
import Options from "./components/Options/Options.vue";

@Component({
  components: {
    Header,
    Destination,
    Options,
    Offers,
  },
})
export default class App extends Vue {
  // console.log(this.$store);
}
