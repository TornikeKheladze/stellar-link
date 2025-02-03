import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      catalogue: "Catalogue",
      brands: "Brands",
      projects: "Projects",
      contactUs: "Contact Us",
      headOffice: "Head Office",
      officeCity: "Tbilisi",
      officeAddress: "Avtandili Street N6",
      fireSystems: "Fire Alarm & Detection",
      pava: "PAVA Public address",
      cctv: "CCTV Video survilance",
      bms: "BMS Building Management Systems",
      rms: "RMS Room Management System",
      lightingAutomation: "Lighting Automation",
      contact: "Contact",
      allBrands: "All Brands",
      career: "Careers",
      socials: "Socials",
      location: "Location",
      careers: {
        applyRules:
          "Send your CV to the email address info@stellarlink.ge. Specify the job title in the subject line.",
        salary: "Salary",
        jobDescription: "Job Description",
        responsibilities: "Responsibilities",
        requirements: "Requirements",
        softwareEngineer: "Software Engineer",
        // "Weak Current Engineer",
        dataScientist: "Data Scientist",
        locationRemote: "Remote",
        locationNY: "New York, NY",
        salarySE: "$90,000 - $120,000",
        salaryDS: "$100,000 - $130,000",
        descriptionSE:
          "We are looking for a skilled Software Engineer to join our team and help build innovative software solutions.",
        descriptionDS:
          "We are seeking a Data Scientist to analyze complex data and provide actionable insights.",
        responsibilitiesSE: [
          "Develop and maintain web applications.",
          "Collaborate with cross-functional teams.",
          "Write clean, scalable, and efficient code.",
        ],
        responsibilitiesDS: [
          "Analyze large datasets to identify trends.",
          "Build predictive models and machine learning algorithms.",
          "Present findings to stakeholders.",
        ],
        requirementsSE: [
          "Bachelor's degree in Computer Science or related field.",
          "3+ years of experience in software development.",
          "Proficiency in JavaScript, React, and Node.js.",
        ],
        requirementsDS: [
          "Master's degree in Data Science or related field.",
          "Experience with Python, R, and SQL.",
          "Strong knowledge of machine learning techniques.",
        ],
      },
    },
  },
  ka: {
    translation: {
      catalogue: "კატალოგი",
      brands: "ბრენდები",
      projects: "პროექტები",
      contactUs: "დაგვიკავშირდი",
      headOffice: "სათავო ოფისი",
      officeCity: "თბილისი",
      officeAddress: "ავთანდილის ქუჩა N6",
      fireSystems: "სახანძრო სისტემები",
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
      careers: {
        applyRules:
          "მონაცემები (CV) გამოაგზავნეთ ელექტრონული ფოსტის მისამართზე info@stellarlink.ge. Subject-ში მიუთითეთ პოზიციის დასახელება.",
        salary: "ხელფასი",
        jobDescription: "სამუშაო აღწერა",
        responsibilities: "ვალდებულებები",
        requirements: "მოთხოვნები",
        softwareEngineer: "პროგრამული ინჟინერი",
        dataScientist: "მონაცემთა მეცნიერი",
        locationRemote: "დისტანციურად",
        locationNY: "ნიუ იორკი, აშშ",
        salarySE: "$90,000 - $120,000",
        salaryDS: "$100,000 - $130,000",
        descriptionSE:
          "ჩვენ ვეძებთ გამოცდილ პროგრამულ ინჟინერს, რომელიც დაგვეხმარება ინოვაციური პროგრამული გადაწყვეტების შექმნაში.",
        descriptionDS:
          "ჩვენ ვეძებთ მონაცემთა მეცნიერს, რომელიც გააანალიზებს მონაცემებს და გამოიმუშავებს გამოსადეგ იდეებს.",
        responsibilitiesSE: [
          "ვებ აპლიკაციების შემუშავება და შენარჩუნება.",
          "თანამშრომლობა სხვადასხვა გუნდებთან.",
          "სუფთა, მასშტაბირებადი და ეფექტური კოდის წერა.",
        ],
        responsibilitiesDS: [
          "დიდი მონაცემთა ბაზების ანალიზი და ტენდენციების აღმოჩენა.",
          "პროგნოზირების მოდელებისა და მანქანური სწავლების ალგორითმების შექმნა.",
          "მიღებული შედეგების წარდგენა დაინტერესებულ მხარეებთან.",
        ],
        requirementsSE: [
          "ბაკალავრის ხარისხი კომპიუტერულ მეცნიერებაში ან შესაბამის სფეროში.",
          "3+ წლიანი გამოცდილება პროგრამული უზრუნველყოფის განვითარებაში.",
          "JavaScript, React და Node.js-ის ცოდნა.",
        ],
        requirementsDS: [
          "მონაცემთა მეცნიერების ან შესაბამის სფეროში მაგისტრის ხარისხი.",
          "Python, R და SQL-ის გამოცდილება.",
          "მანქანური სწავლების ტექნიკების ძლიერი ცოდნა.",
        ],
      },
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
