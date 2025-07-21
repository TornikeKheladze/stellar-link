import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Slide {
  id: number;
  content: React.ReactNode;
}

const ManualHorizontalSlider = ({ slides }: { slides: Slide[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate positions for all slides
  const getSlidePosition = (index: number) => {
    const totalSlides = slides.length;
    const distanceFromCenter = index - currentIndex;

    // Handle looping positions
    let effectiveDistance = distanceFromCenter;
    if (distanceFromCenter > Math.floor(totalSlides / 2)) {
      effectiveDistance -= totalSlides;
    } else if (distanceFromCenter < -Math.floor(totalSlides / 2)) {
      effectiveDistance += totalSlides;
    }

    const baseDistance = windowWidth < 768 ? 200 : 350; // Larger spacing

    return {
      x: effectiveDistance * baseDistance,
      scale: 1 - Math.abs(effectiveDistance) * 0.15,
      opacity: 1 - Math.abs(effectiveDistance) * 0.3,
      zIndex: totalSlides - Math.abs(effectiveDistance),
    };
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (slides.length === 0) return null;

  return (
    <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-x-hidden py-12">
      {/* Slider container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
          const position = getSlidePosition(index);
          const isActive = index === currentIndex;

          return (
            <motion.div
              key={slide.id}
              className={`absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-white rounded-xl shadow-lg cursor-pointer ${
                isActive ? "border-4 border-primary" : "border border-gray-200"
              }`}
              style={{
                left: "50%",
                top: "50%",
                marginLeft: windowWidth < 768 ? "-175px" : "-225px",
                marginTop: windowWidth < 768 ? "-175px" : "-225px",
              }}
              animate={{
                x: position.x,
                scale: position.scale,
                opacity: position.opacity,
                zIndex: position.zIndex,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: isActive ? 1.05 : 0.95 }}
            >
              <div className="w-full h-full flex items-center justify-center p-4">
                {slide.content}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation arrows - only show if more than 1 slide */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 z-40 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 z-40 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Dots indicator - only show if more than 1 slide */}
      {slides.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-40">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-primary w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ManualHorizontalSlider;
