import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import zhCnTrans from "./modules/zh";
import enCnTrans from "./modules/en";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: enCnTrans
    },
    zh: {
      translation: zhCnTrans
    }
  },
  fallbackLng: 'zh',
  debug: false
})