import { Link } from "react-router";
import logoSrc from "../../assets/logo.avif";
import { useTranslation } from "react-i18next";
import BurgerButton from "../shared/BurgerButton";
import LangDropdown from "./LangDropdown";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Header = () => {
  const { t } = useTranslation();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const links = [
    {
      to: "/catalogue",
      label: t("catalogue"),
    },
    {
      to: "/brands",
      label: t("brands"),
    },
    {
      to: "/projects",
      label: t("projects"),
    },
    {
      to: "/contact",
      label: t("contactUs"),
    },
  ];

  return (
    <header className="h-20 w-full flex justify-between items-center p-7 lg:h-40 shadow-[0px_1px_3px_2px_rgba(0,_0,_0,_0.6)]">
      <Link to={"/"} className="flex items-center">
        <img src={logoSrc} className="w-20 lg:w-48" />
      </Link>
      <div className="hidden lg:flex items-center font-bold text-lg">
        {links.map(({ to, label }, index) => (
          <Link
            key={label + to}
            to={to}
            className={`text-textPrimary px-7 h-[70px] flex items-center justify-center ${
              index !== links.length - 1 &&
              "border-r border-customBlack border-opacity-70"
            } `}
          >
            {label}
          </Link>
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
