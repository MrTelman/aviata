import Component from "vue-class-component";
import { Vue } from "vue-property-decorator";

@Component
export default class Options extends Vue {
  public packageOptions: string[] = [
    "Только прямые",
    "Только с багажом",
    "Только возвратные",
  ];

  public companies: string[] = [
    "Air Astana",
    "Bek Air",
    "Fly Arystan",
    "SCAT Airlines",
    "Lufthansa",
    "Turkish Airlines",
    "China Southern Air",
  ];
}
