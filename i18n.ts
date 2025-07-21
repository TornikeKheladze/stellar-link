import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { careersEng, careersGeo } from "./src/data/careers";
import { brandTranslate } from "./src/data/brands";

const resources = {
  en: {
    translation: {
      catalogue: "Catalogue",
      brands: "Brands",
      projects: "Projects",
      partners: "Partners",
      contactUs: "Contact Us",
      headOffice: "Head Office",
      officeCity: "Tbilisi",
      officeAddress: "Avtandili Street N6",
      fireSystems: "Fire Alarm & Detection",
      pava: "PAVA Public Address",
      cctv: "CCTV Video Surveillance",
      bms: "BMS Building Management Systems",
      rms: "RMS Room Management System",
      lightingAutomation: "Lighting Automation",
      contact: "Contact",
      allBrands: "All Brands",
      career: "Careers",
      socials: "Socials",
      location: "Location",
      careers: careersEng,
      ...brandTranslate.eng,

      // Projects
      hilton: "Hilton Garden Inn Tbilisi",
      merani: "Merani Mall Tbilisi",
      lopota: "Lopota Resort Telavi",
      ibis: "ibis Styles Batumi",

      comfort: "Comfort",
      safety: "Safety",
      security: "Security",

      smartHouseSystems: "Smart House Systems",
      hvacSystems: "Heat Ventilation Air Conditioning (HVAC) Systems",
      backgroundMusic: "Background Music (BGM)",

      fireAlarm: "Fire Alarm (FA)",
      fireFightingSystem: "Fire Fighting System (FFS)",
      accessControlSystems: "Access Control Systems (ACS)",

      cctvCameras: "CCTV Cameras",
      intrusionDetection: "Intrusion Detection/Intelligent Security Systems",
      publicAddresses: "Public Addresses (PA)",

      smartSolutions: "Smart Solutions for Your Home and Business",
      enhancingComfortSafetySecurity:
        "Enhancing comfort, safety, and security with cutting-edge technology.",
    },
  },
  ka: {
    translation: {
      catalogue: "კატალოგი",
      brands: "ბრენდები",
      projects: "პროექტები",
      partners: "პარტნიორები",
      contactUs: "დაგვიკავშირდით",
      headOffice: "სათაო ოფისი",
      officeCity: "თბილისი",
      officeAddress: "ავთანდილის ქუჩა N6",
      fireSystems: "FA სახანძრო სისტემები",
      pava: "PAVA საჯარო მიმართვის ხელსაწყოები",
      cctv: "CCTV ვიდეო მეთვალყურეობა",
      bms: "BMS ნაგებობების მართვის სისტემები",
      rms: "RMS ოთახების მენეჯმენტ სისტემები",
      lightingAutomation: "განათების ავტომატიზაცია",
      contact: "კონტაქტი",
      allBrands: "ყველა ბრენდი",
      career: "ვაკანსიები",
      socials: "სოც. ქსელები",
      location: "ლოკაცია",
      careers: careersGeo,
      ...brandTranslate.geo,

      // Projects
      hilton: "ჰილტონ გარდენ ინი თბილისი",
      merani: "მერანი მოლი თბილისი",
      lopota: "ლოპოტა თელავი",
      ibis: "იბის სტაილსი ბათუმი",

      comfort: "კომფორტი",
      safety: "უსაფრთხოება",
      security: "დაცულობა",

      smartHouseSystems: "ჭკვიანი სახლი",
      hvacSystems: "გათბობა, გაგრილება, ვენტილაცია",
      backgroundMusic: "ფონური მუსიკა",

      fireAlarm: "ხანძრის დეტექცია",
      fireFightingSystem: "ხანძარქობა",
      accessControlSystems: "შეღწევის/წვდომის სისტემა",

      cctvCameras: "ვიდეო სამეთვალყურეო სისტემა",
      intrusionDetection: "დაცვის/შეღწევის სისტემა",
      publicAddresses: "საჯარო გამოცხადება",

      smartSolutions: "ჭკვიანი გადაწყვეტილებები თქვენს სახლში და ბიზნესში",
      enhancingComfortSafetySecurity:
        "კომფორტის, უსაფრთხოების და დაცვის გაუმჯობესება უახლესი ტექნოლოგიებით.",
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
