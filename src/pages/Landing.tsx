type ServiceCategory = {
  title: string;
  items: string[];
};

const serviceCategories: ServiceCategory[] = [
  {
    title: "კომფორტი",
    items: [
      "Smart House Systems",
      "Heat Ventilation Air Conditioning (HVAC) Systems",
      "Background Music (BGM)",
    ],
  },
  {
    title: "უსაფრთხოება",
    items: [
      "Fire Alarm (FA)",
      "Fire Fighting System (FFS)",
      "Access Control Systems (ACS)",
    ],
  },
  {
    title: "დაცული",
    items: [
      "CCTV Cameras",
      "Intrusion Detection/Intelligent Security Systems",
      "Public Addresses (PA)",
    ],
  },
];
import mainImg from "../../public/images/mainPhoto.jpeg";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative z-0">
        <img src={mainImg} alt="mainimage" className="object-cover w-full" />
        <div className="bg-primary bg-opacity-30 text-white p-6 absolute bottom-0 w-full ">
          <div className="container mx-auto text-center">
            <h1 className="lg:text-4xl text-xl font-bold">
              Smart Solutions for Your Home and Business
            </h1>
            <p className="mt-2 lg:text-lg text-sm">
              Enhancing comfort, safety, and security with cutting-edge
              technology.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">
                {category.title}
              </h2>
              <ul className="space-y-3">
                {category.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700">
                    <span className="text-textSecondary mr-2">•</span>
                    {item}
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
