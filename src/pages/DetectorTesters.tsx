import HorizontalWheelSlider from "../components/Slider/Slider";

const DetectorTesters = () => {
  const slides = [
    {
      id: 1,
      content: (
        <div className="w-full h-full flex items-center justify-center p-2">
          <img
            className="object-cover w-full h-full"
            src="/images/partners/1.jpg"
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
            src="/images/partners/2.png"
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
            src="/images/partners/3.jpg"
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
            src="/images/partners/4.png"
          />
        </div>
      ),
    },
    {
      id: 5,
      content: (
        <div className="w-full h-full flex items-center justify-center p-2">
          <img
            className="object-cover w-full h-full"
            src="/images/partners/5.png"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="text-center bg-[#041c2c] rounded-lg p-4 text-white">
        <h3 className="text-4xl">Detector Testers</h3>
      </div>
      <HorizontalWheelSlider slides={slides} />
      <p className="text-center bg-primary text-white rounded-lg p-4">
        The extinguishing system that is “Faster than Fire”
      </p>
    </div>
  );
};

export default DetectorTesters;
