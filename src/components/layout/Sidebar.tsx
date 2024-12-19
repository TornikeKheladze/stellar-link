import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { Link } from "react-router";
import LangDropdown from "./LangDropdown";
import CloseBtn from "../shared/CloseBtn";
type SidebarProps = {
  isSidebarVisible: boolean;
  setIsSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
  navLinks: { to: string; label: string }[];
};
const Sidebar: React.FC<SidebarProps> = ({
  isSidebarVisible,
  setIsSidebarVisible,
  navLinks,
}) => {
  const variants = {
    hidden: { transform: "translateX(-100%)" },
    visible: { transform: "translateX(0)" },
  };

  return (
    <>
      {isSidebarVisible && (
        <Backdrop onClick={() => setIsSidebarVisible(false)} />
      )}
      <motion.div
        initial="hidden"
        animate={isSidebarVisible ? "visible" : "hidden"}
        variants={variants}
        className="fixed left-0 bottom-0 top-0 bg-white w-[100vw] z-[101] lg:hidden"
      >
        <div className="h-20 flex items-center justify-between p-7">
          <div></div>
          <LangDropdown className="w-12 font-bold" />
          <CloseBtn
            onClick={() => setIsSidebarVisible(false)}
            className="text-primary w-12"
          />
        </div>
        <div className="pl-[37px] pt-[85px] flex flex-col gap-12 h-full w-full">
          {navLinks.map(({ to, label }) => (
            <Link
              onClick={() => setIsSidebarVisible(false)}
              className="text-xl font-medium"
              to={to}
              key={label + to}
            >
              {label}
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;