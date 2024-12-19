import { Link } from "react-router";
import logoSrc from "../../assets/logo.avif";
import { useTranslation } from "react-i18next";
import BurgerButton from "../shared/BurgerButton";
import LangDropdown from "./LangDropdown";
import Sidebar from "./Sidebar";
import { useRef, useState } from "react";
import HeaderDropdown from "../shared/HeaderDropdown";
import { useIsInViewport } from "../../helpers/useIsInViewPort";
import Arrow from "../shared/Arrow";

const Header = () => {
  const { t } = useTranslation();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState<number | boolean>(false);
  const links = [
    {
      to: "/catalogue",
      label: "catalogue",
      hover: (
        <HeaderDropdown
          links={[
            "fireSystems",
            "pava",
            "cctv",
            "bms",
            "rms",
            "lightingAutomation",
          ]}
        />
      ),
    },
    {
      to: "/brands",
      label: "brands",
      hover: (
        <HeaderDropdown
          links={[
            "Honeywell",
            "Morley",
            "Notifier",
            "Esser",
            "Intevio",
            "Variodyn",
          ]}
          className="w-28"
        />
      ),
    },
    {
      to: "/projects",
      label: "projects",
    },
    {
      to: "/contact",
      label: "contactUs",
    },
  ];

  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const isInViewport = useIsInViewport(headerRef);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      ref={headerRef}
      className="h-20 w-full flex justify-between items-center p-7 lg:h-40 shadow-[0px_1px_3px_2px_rgba(0,_0,_0,_0.6)]"
    >
      {!isInViewport && (
        <button
          onClick={scrollToTop}
          className="bg-primary text-black border border-black fixed w-9 h-9 right-4 top-2/3 rotate-180"
        >
          <Arrow />
        </button>
      )}
      <Link to={"/"} className="flex items-center">
        <img src={logoSrc} className="w-20 lg:w-48" />
      </Link>
      <div className="hidden lg:flex items-center font-bold text-lg">
        {links.map(({ to, label, hover }, index) => (
          <div
            key={label + to}
            className={`relative hover:text-textHover text-textPrimary px-7 h-[70px] flex items-center justify-center ${
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
    </header>
  );
};

export default Header;
