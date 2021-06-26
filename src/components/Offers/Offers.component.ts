import Component from "vue-class-component";
import { Vue } from "vue-property-decorator";
import json from "./db.json";

@Component
export default class Offers extends Vue {
  public airlines = json.airlines;
  public flights = json.flights;
}
