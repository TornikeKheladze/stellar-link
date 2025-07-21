import HorizontalWheelSlider from "../components/Slider/Slider";

// const serviceCategories = [
//   {
//     title: "comfort",
//     items: ["smartHouseSystems", "hvacSystems", "backgroundMusic"],
//     imageSrc: "/images/partners/afx.jpg",
//     color: "#f9e300",
//     // shadow: "0px 0px 38px 50px rgba(249,227,0)",
//   },
//   {
//     title: "security",
//     items: ["cctvCameras", "intrusionDetection", "publicAddresses"],
//     imageSrc: "/images/partners/lst.jpg",
//     color: "#da251d",
//     // shadow: "0px 0px 38px 50px rgba(249,227,0)",
//   },
//   //   {
//   //     title: "security",
//   //     items: ["cctvCameras", "intrusionDetection", "publicAddresses"],
//   //     imageSrc: "/images/partners/lst.jpg",
//   //     color: "#006495",
//   //     // shadow: "0px 0px 38px 50px rgba(249,227,0)",
//   //   },
//   {
//     title: "security",
//     items: ["cctvCameras", "intrusionDetection", "publicAddresses"],
//     imageSrc: "/images/partners/wagner.jpeg",
//     color: "#00965e",
//     // shadow: "0px 0px 38px 50px rgba(249,227,0)",
//   },
// ];

const Partners = () => {
  const slides = [
    {
      id: 1,
      content: (
        <div className="w-full h-full flex items-center justify-center p-2">
          <img
            className="object-cover w-full h-full"
            src="/images/partners/afx.jpg"
          />
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="w-full h-full flex items-center justify-center p-2">
          <img
            className="object-cover w-full h-full"
            src="/images/partners/afx2.jpeg"
          />
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="w-full h-full flex items-center justify-center p-2">
          <img
            className="object-cover w-full h-full"
            src="/images/partners/afx3.jpeg"
          />
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className="w-full h-full flex items-center justify-center p-2">
          <img
            className="object-cover w-full h-full"
            src="/images/partners/afx4.jpeg"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Partners</h1>
      <div className="text-center bg-[#f9e300] rounded-lg p-4 text-black">
        <h3 className="text-4xl">AF-X Fireblocker</h3>
      </div>
      <HorizontalWheelSlider slides={slides} />
      <p className="text-center bg-primary text-white rounded-lg p-4">
        The extinguishing system that is “Faster than Fire”
      </p>
    </div>
  );
};

export default Partners;
