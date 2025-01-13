import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const HeaderDropdown: React.FC<{
  links: { to: string; label: string }[];
  className?: string;
}> = ({ links, className }) => {
  const { t } = useTranslation();
  return (
    <div
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
            } hover:text-textHover`}
          >
            {t(link.label)}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeaderDropdown;
