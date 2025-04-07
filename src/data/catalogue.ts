export type Catalogue = {
  label: string;
  to: string;
  image: string;
  description: { en: string; ka: string };
  features: {
    en: string;
    ka: string;
  }[];
};

export const catalogues: Catalogue[] = [
  {
    label: "fireSystems",
    to: "/catalogue?catalogue=fireSystems",
    image: "images/fireGPT.png",
    features: [
      {
        en: "Quick Detection: Sensors that automatically identify and notify about fire sources",
        ka: "სწრაფი დეტექცია: სენსორები, რომლებიც ავტომატურად აფიქსირებენ და გვატყობინებენ ხანძრის წყაროს შესახებ",
      },
      {
        en: "Alarm System: Automatic alarm signals that notify residents and staff members",
        ka: "განგაშის სისტემა: ავტომატური სიგნალები, რომლებიც ატყობინებს მაცხოვრებლებს და პერსონალს",
      },
      {
        en: "Integration: Easy integration with existing security systems",
        ka: "ინტეგრაცია: მარტივად ინტეგრირებადი არსებული უსაფრთხოების სისტემებთან",
      },
      {
        en: "Monitoring: Continuous monitoring and data recording",
        ka: "მონიტორინგი: უწყვეტი მეთვალყურეობა და მონაცემების ჩაწერა",
      },
    ],
    description: {
      en: "Our fire detection systems are designed to keep you and your environment safe. Utilizing advanced sensors and cutting-edge technology, our systems detect fire sources promptly and reliably, providing swift and effective response.",
      ka: "ჩვენი ხანძრის დეტექციის სისტემები შექმნილია იმისათვის, რომ თქვენ და თქვენი გარემო დაცული იყოს. მოწინავე სენსორებისა და თანამედროვე ტექნოლოგიების გამოყენებით, სისტემა სწრაფად და საიმედოდ აფიქსირებს ხანძრის წყაროს და უზრუნველყოფს მყისიერ რეაგირებას.",
    },
  },
  {
    label: "pava",
    to: "/catalogue?catalogue=pava",
    image: "images/pavaGPT.png",
    features: [
      {
        en: "Voice Announcements: Clear voice alerts in emergency situations",
        ka: "ხმოვანი განცხადებები: მკაფიო ხმოვანი გაფრთხილებები საგანგებო სიტუაციებში",
      },
      {
        en: "Live Broadcast: Real-time communication for quick coordination",
        ka: "ცოცხალი მაუწყებლობა: რეალურ დროში კომუნიკაცია სწრაფი კოორდინაციისთვის",
      },
      {
        en: "Zoning: Separate audio messages for different areas",
        ka: "ზონირება: სხვადასხვა ზონებისთვის განსხვავებული აუდიო შეტყობინებები",
      },
      {
        en: "System Integration: Works seamlessly with fire detection and evacuation systems",
        ka: "სისტემის ინტეგრაცია: ეფექტურად მუშაობს ხანძრის დეტექციისა და ევაკუაციის სისტემებთან ერთად",
      },
    ],
    description: {
      en: "Our PAVA (Public Address & Voice Alarm) systems are built for safety and control. In emergencies, they deliver clear voice messages and live announcements to guide people swiftly and calmly—ensuring safe evacuations and effective crowd management.",
      ka: "ჩვენი სისტემები შექმნილია უსაფრთხოებისა და კონტროლისთვის. საგანგებო სიტუაციებისას ისინი აწვდიან მკაფიო ხმოვან ინსტრუქციებსა და პირდაპირ განცხადებებს, რაც ეხმარება ხალხს სწრაფად და მშვიდად მოახდინონ ევაკუაცია.",
    },
  },
  {
    label: "cctv",
    to: "/catalogue?catalogue=cctv",
    image: "images/cctvGPT.png",
    features: [
      {
        en: "HD Video Quality: Crystal-clear footage for accurate monitoring.",
        ka: "HD ვიდეოხარისხი: სუფთა და მკაფიო გამოსახულება ზუსტი მონიტორინგისთვის.",
      },
      {
        en: "Smart Motion Detection: Alerts triggered by suspicious movement.",
        ka: "მოძრაობის სმარტ დეტექცია: შეტყობინებები საეჭვო აქტივობაზე.",
      },
      {
        en: "Cloud & Local Storage: Flexible recording options to suit your needs.",
        ka: "Cloud და ლოკალური ჩაწერის შესაძლებლობა: მოქნილი ჩაწერის მეთოდები.",
      },
      {
        en: " Remote Access: View live or recorded footage from your smartphone, from anywhere in the world.",
        ka: " რიმოუთ წვდომა: ნახეთ ვიდეო პირდაპირ ან ჩანაწერებიდან თქვენს სმარტფონში, მსოფლიოს ნებისმიერი წერტილიდან.",
      },
    ],
    description: {
      ka: "ჩვენი თანამედროვე ვიდეოსათვალთვალო სისტემები უზრუნველყოფს 24/7 დაცვას და მონიტორინგს. მაღალი გარჩევადობის ვიდეო და ჭკვიანი ანალიტიკა გაძლევთ შესაძლებლობას, აკონტროლოთ თქვენი ობიექტი ნებისმიერ დროს, ნებისმიერი ადგილიდან.",
      en: "Our advanced CCTV systems provide around-the-clock security, ensuring constant monitoring and protection for your property. With high-definition video and smart analytics, you can stay in control—anytime, anywhere.",
    },
  },
  {
    label: "bms",
    to: "/catalogue?catalogue=bms",
    image: "images/bmsGPT.png",
    features: [
      {
        en: "Centralized Control: Manage HVAC, lighting, and security from one interface",
        ka: "ცენტრალიზებული მართვა: HVAC, განათების, და უსაფრთხოების სისტემების ერთიანი მართვა",
      },
      {
        en: "Energy Efficiency: Optimize energy usage and reduce operational costs",
        ka: "ენერგოეფექტიანობა: ენერგიის მოხმარების ოპტიმიზაცია და ხარჯების შემცირება",
      },
      {
        en: "Real-time Monitoring: Live data and alerts from all building systems",
        ka: "რეალურ დროში მონიტორინგი: პირდაპირი მონაცემები და შეტყობინებები ყველა სისტემიდან",
      },
      {
        en: "Automation: Smart scheduling and automated system responses",
        ka: "ავტომატიზაცია: ჭკვიანური განრიგი და სისტემების ავტომატური რეაგირება",
      },
    ],
    description: {
      en: "Our Building Management Systems help optimize, monitor, and automate key facility operations—ensuring comfort, efficiency, and security in modern buildings.",
      ka: "ჩვენი შენობების მართვის სისტემები ხელს უწყობს ძირითადი პროცესების ოპტიმიზაციას, მონიტორინგსა და ავტომატიზაციას—უზრუნველყოფს კომფორტს, ეფექტურობასა და უსაფრთხოებას თანამედროვე შენობებში.",
    },
  },
  {
    label: "rms",
    to: "/catalogue?catalogue=rms",
    image: "images/rmsGPT.png",
    features: [
      {
        en: "Room Booking: Schedule and manage room reservations easily",
        ka: "ოთახის დაჯავშნა: მარტივად დაგეგმეთ და მართეთ ოთახების ჯავშნები",
      },
      {
        en: "Occupancy Tracking: Monitor room usage in real-time",
        ka: "დაკავებულობის კონტროლი: რეალურ დროში ოთახების გამოყენების მონიტორინგი",
      },
      {
        en: "Access Control: Set permissions and manage room entry",
        ka: "წვდომის კონტროლი: წვდომის უფლების განსაზღვრა და მართვა",
      },
      {
        en: "Smart Integration: Connect with BMS and other smart systems",
        ka: "სმარტ ინტეგრაცია: BMS და სხვა სმარტ სისტემებთან დაკავშირება",
      },
    ],
    description: {
      en: "Our Room Management Systems streamline how spaces are reserved, accessed, and utilized—offering efficient control for offices, hotels, and shared environments.",
      ka: "ჩვენი ოთახების მართვის სისტემები მარტივს ხდის სივრცეების დაჯავშნას, გამოყენებას და კონტროლს — ეფექტური გადაწყვეტილება ოფისებისთვის, სასტუმროებისა და გაზიარებული გარემოებისთვის.",
    },
  },
  {
    label: "lightingAutomation",
    to: "/catalogue?catalogue=lightingAutomation",
    image: "images/lighting.jpeg",
    features: [
      {
        en: "Occupancy Sensing: Detects the presence of people and adjusts lighting automatically",
        ka: "სენსორები: აიდენტიფიცირებს ადამიანების ყოფნას და ავტომატურად არეგულირებს განათებას",
      },
      {
        en: "Daylight Harvesting: Adjusts lighting levels based on natural light availability",
        ka: "დღის შუქის დაზოგვა: არეგულირებს განათების დონეს ბუნებრივი სინათლის ხელმისაწვდომობის მიხედვით",
      },
      {
        en: "Remote Control: Allows users to control lighting remotely through mobile devices or web interfaces",
        ka: "დისტანციური მართვა: მომხმარებლებს საშუალებას აძლევს მართონ განათება დისტანციურად მობილური მოწყობილობების ან ვებ ინტერფეისების მეშვეობით",
      },
      {
        en: "Energy Saving: Automatically dims or turns off lights when rooms are unoccupied",
        ka: "ენერგიის დაზოგვა: ავტომატურად ითიშება განათება, როდესაც ოთახები თავისუფალია",
      },
    ],
    description: {
      ka: "განათების ავტომატიზაციის სისტემები უზრუნველყოფს მოსახერხებელ და ენერგოეფექტურ გადაწყვეტილებებს, რომლებიც ავტომატურად რეგულირებს განათებას და ხდის გარემოს უფრო ინტერაქტიულს. ეს ტექნოლოგიები აუმჯობესებს ენერგიის გამოყენებას და უზრუნველყოფს კომფორტსა და უსაფრთხოებას.",
      en: "Lighting automation systems provide convenient and energy-efficient solutions that automatically adjust lighting and make environments more interactive. These technologies improve energy usage while ensuring comfort and safety.",
    },
  },
];
