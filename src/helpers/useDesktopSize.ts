import { useEffect, useState } from "react";

export const useDesktopSize = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Define desktop breakpoint (e.g., 1024px)
    };

    // Check initially and add resize listener
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isDesktop;
};
