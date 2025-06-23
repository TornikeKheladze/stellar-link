type ServiceCategory = {
  title: string;
  items: string[];
};

const serviceCategories: ServiceCategory[] = [
  {
    title: "comfort",
    items: ["smartHouseSystems", "hvacSystems", "backgroundMusic"],
  },
  {
    title: "safety",
    items: ["fireAlarm", "fireFightingSystem", "accessControlSystems"],
  },
  {
    title: "security",
    items: ["cctvCameras", "intrusionDetection", "publicAddresses"],
  },
];
import { useTranslation } from "react-i18next";
// import mainImg from "../../public/images/mainPhoto.jpeg";

const LandingPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <div className="relative z-0">
        {/* <img src={mainImg} alt="mainimage" className="object-cover w-full" /> */}
        <video
          src="https://edge.sitecorecloud.io/nurnbergmes0e18-nmmultisite6e34-prod50da-6065/media/Project/NuernbergMesse/FeuerTrutz/Video/feuertrutz_homepagevideo_1920.mp4"
          className="w-full bg-red-400 object-cover h-full mt-40"
          autoPlay
          loop
          muted
        ></video>
        <div className="bg-primary bg-opacity-30 text-white p-6 absolute bottom-0 w-full ">
          <div className="container mx-auto text-center">
            <h1 className="lg:text-4xl text-xl font-bold">
              {t("smartSolutions")}
            </h1>
            <p className="mt-2 lg:text-lg text-sm">
              {t("enhancingComfortSafetySecurity")}
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">
                {t(category.title)}
              </h2>
              <ul className="space-y-3">
                {category.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700">
                    <span className="text-textSecondary mr-2">•</span>
                    {t(item)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
