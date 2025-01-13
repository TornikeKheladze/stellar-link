import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { motion } from "framer-motion";

const HeaderDropdown: React.FC<{
  links: { to: string; label: string }[];
  className?: string;
}> = ({ links, className }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`absolute cursor-pointer text-textPrimary z-20 bg-white top-16 w-72 
    text-sm shadow-[0px_0px_6px_3px_rgba(0,_0,_0,_0.1)] rounded-md p-1 ${className}`}
    >
      <div className="flex flex-col">
        {links.map((link, index) => (
          <Link
            key={link.to + index}
            to={link.to}
            className={`${
              index !== links.length - 1 &&
              "border-b border-black border-opacity-70 py-1"
            } hover:text-textHover animation`}
          >
            {t(link.label)}
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default HeaderDropdown;
