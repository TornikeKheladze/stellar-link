import { useEffect, useState } from "react";

export const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Current vertical scroll position
      const halfScreenHeight = window.innerHeight / 3;

      if (scrollPosition >= halfScreenHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return isScrolled;
};
