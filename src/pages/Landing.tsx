type ServiceCategory = {
  title: string;
  items: string[];
  videoSrc?: string;
  imageSrc?: string;
};

const serviceCategories: ServiceCategory[] = [
  {
    title: "safety",
    items: ["fireAlarm", "fireFightingSystem", "accessControlSystems"],
    videoSrc:
      "https://edge.sitecorecloud.io/nurnbergmes0e18-nmmultisite6e34-prod50da-6065/media/Project/NuernbergMesse/FeuerTrutz/Video/feuertrutz_homepagevideo_1920.mp4",
  },
  {
    title: "comfort",
    items: ["smartHouseSystems", "hvacSystems", "backgroundMusic"],
    imageSrc: "/images/comfort.png",
  },
  {
    title: "security",
    items: ["cctvCameras", "intrusionDetection", "publicAddresses"],
    imageSrc: "/images/safety.png",
  },
];
import { useTranslation } from "react-i18next";

const LandingPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <div className="relative z-0">
        <div className="mt-52 lg:mt-80"></div>
        {/* <video
          src="https://img.yfisher.com/m4901/1730714172110-114-1x264mp4.mp4"
          className="w-full object-cover h-full mt-20 lg:mt-40 "
          autoPlay
          loop
          muted
        ></video> */}
        <div className="bg-primary bg-opacity-30 text-white p-1 lg:p-6 absolute bottom-0 w-full ">
          <div className="container mx-auto text-center">
            <h1 className="lg:text-4xl text-lg font-bold">
              {t("smartSolutions")}
            </h1>
            <p className="mt-2 lg:text-lg text-xs">
              {t("enhancingComfortSafetySecurity")}
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8"> */}
        <div className="flex flex-col gap-8">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="rounded-lg bg-primary bg-opacity-80 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full lg:w-2/3 mx-auto"
            >
              {category.imageSrc ? (
                <img
                  src={category.imageSrc}
                  className="w-full object-cover h-full rounded-lg"
                />
              ) : (
                <video
                  src={category.videoSrc}
                  className="w-full object-cover h-full rounded-lg"
                  autoPlay
                  loop
                  muted
                ></video>
              )}

              <div className="w-full p-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  {t(category.title)}
                </h2>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-white">
                      <span className="text-textSecondary mr-2">•</span>
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
