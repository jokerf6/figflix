import en from "../../../public/locales/en.json";
import ar from "../../../public/locales/ar.json";

export class Language {
  public lang() {
    if (localStorage.getItem("lang") === "ar") {
      return ar;
    } else {
      return en;
    }
  }
  public changeLang() {
    if (localStorage.getItem("lang") === "ar") {
      localStorage.setItem("lang", "en");
    } else {
      localStorage.setItem("lang", "ar");
    }
  }
}
