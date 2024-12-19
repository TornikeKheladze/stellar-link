import { useTranslation } from "react-i18next";
import Arrow from "../shared/Arrow";
import { useEffect, useRef, useState } from "react";

const LangDropdown: React.FC<{ className?: string }> = ({ className }) => {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const secondLanguage = i18n.language === "ka" ? "en" : "ka";
  return (
    <div
      className={"text-customBlack ml-16 relative cursor-pointer " + className}
      ref={ref}
    >
      <div className="flex gap-4 items-center" onClick={() => setOpen(!open)}>
        <button>{i18n.language}</button>
        <Arrow className={`w-3 ${open ? "rotate-180" : ""}`} />
      </div>
      {open && (
        <button
          className="absolute"
          onClick={() => {
            i18n.changeLanguage(secondLanguage);
            setOpen(false);
          }}
        >
          {secondLanguage}
        </button>
      )}
    </div>
  );
};

export default LangDropdown;
