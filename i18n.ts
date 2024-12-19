import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // layout
      catalogue: "Catalogue",
      brands: "Brands",
      projects: "Projects",
      contactUs: "Contact Us",
    },
  },
  ka: {
    translation: {
      // layout
      catalogue: "კატალოგი",
      brands: "ბრენდები",
      projects: "პროექტები",
      contactUs: "კონტაქტი",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ka",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
