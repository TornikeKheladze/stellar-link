import { Link } from "react-router";
import logoSrc from "../../assets/logo3.png";
import textSrc from "../../assets/logo2.png";
import { useTranslation } from "react-i18next";
import BurgerButton from "../shared/BurgerButton";
import LangDropdown from "./LangDropdown";
import Sidebar from "./Sidebar";
import { useState } from "react";
import HeaderDropdown from "../shared/HeaderDropdown";
import Arrow from "../shared/Arrow";
import { motion } from "framer-motion";
import { useDesktopSize } from "../../helpers/useDesktopSize";
import { useScroll } from "../../helpers/useScroll";
import { catalogueLinks } from "../../data/catalogue";
import { brandLinks } from "../../data/brands";

const Header = () => {
  const { t } = useTranslation();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState<number | boolean>(false);
  const links = [
    {
      to: "/catalogue",
      label: "catalogue",
      hover: <HeaderDropdown links={catalogueLinks} />,
    },
    {
      to: "/brands",
      label: "brands",
      hover: <HeaderDropdown links={brandLinks} className="w-28" />,
    },
    {
      to: "/projects",
      label: "projects",
    },
    {
      to: "/careers",
      label: "career",
    },
    {
      to: "/contact",
      label: "contact",
    },
  ];
  const isScrolled = useScroll();
  const isDesktop = useDesktopSize();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const variants = {
    animate: { height: "80px" },
    initial: { height: isDesktop ? "160px" : "80px" },
  };
  const imgVariants = {
    animate: { height: "40px" },
    initial: { height: isDesktop ? "120px" : "60px" },
  };
  const textVariants = {
    animate: { height: "20px" },
    initial: { height: isDesktop ? "60px" : "30px" },
  };
  return (
    <motion.header
      initial="initial"
      animate={isScrolled ? "animate" : "initial"}
      variants={variants}
      className="w-full fixed backdrop-blur-lg bg-[#EEF5F3]/50 top-0 flex justify-between items-center p-7 shadow-[0px_1px_3px_2px_rgba(0,_0,_0,_0.6)]"
    >
      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="bg-primary text-black border border-black fixed w-9 h-9 right-4 top-[80vh] rotate-180"
        >
          <Arrow />
        </button>
      )}
      <Link to={"/"} className="flex items-center">
        <motion.img variants={imgVariants} src={logoSrc} />
        <motion.img variants={textVariants} src={textSrc} />
      </Link>
      <div className="hidden lg:flex items-center font-bold text-lg">
        {links.map(({ to, label, hover }, index) => (
          <div
            key={label + to}
            className={`relative hover:text-textHover animation text-textPrimary px-7 h-[70px] flex items-center justify-center ${
              index !== links.length - 1 &&
              "border-r border-customBlack border-opacity-70"
            } `}
            onMouseEnter={() => {
              if (!hover) return;
              setShowDropdown(index);
            }}
            onMouseLeave={() => {
              if (!hover) return;
              setShowDropdown(false);
            }}
          >
            <Link to={to}>{t(label)}</Link>
            {showDropdown === index && hover}
          </div>
        ))}
        <LangDropdown />
      </div>
      <BurgerButton
        className=" w-10 lg:hidden cursor-pointer text-primary"
        click={() => setIsSidebarVisible(true)}
      />
      <Sidebar
        navLinks={links}
        isSidebarVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
      />
    </motion.header>
  );
};

export default Header;
