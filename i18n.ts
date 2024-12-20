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
      fireSystems: "Fire Alarm & Detection",
      pava: "PAVA Public address",
      cctv: "CCTV Video survilance",
      bms: "BMS Building Management Systems",
      rms: "RMS Room Management System",
      lightingAutomation: "Lighting Automation",
      contact: "Contact Us",
    },
  },
  ka: {
    translation: {
      // layout
      catalogue: "კატალოგი",
      brands: "ბრენდები",
      projects: "პროექტები",
      contactUs: "კონტაქტი",
      fireSystems: "სახანძრო სისტემები",
      pava: "PAVA საჯარო მიმართვის ხელსაწყოები",
      cctv: "CCTV ვიდეო მეთვალყურეობა",
      bms: "BMS ნაგებობების მართვის სისტემები",
      rms: "RMS ოთახების მენეჯმენტ სისტემები",
      lightingAutomation: "განათების ავტომატიზაცია",
      contact: "კონტაქტი",
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
