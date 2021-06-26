import Component from "vue-class-component";
import { Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  public headerButtons: string[] = [
    "выбор варианта",
    "пассажиры",
    "способ оплаты",
    "подтверждение",
  ];
}
