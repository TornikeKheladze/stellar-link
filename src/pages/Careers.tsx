import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { careers } from "../data/careers";

const Careers = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <section className="py-9">
      <h1 className="bg-primary lg:w-1/3 w-full mx-auto text-white text-center py-3 text-3xl font-bold mb-5">
        {t("careers")}
      </h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="grid lg:grid-cols-2 gap-5 grid-cols-1"
      >
        {careers.map(({ id, title, text, image }) => (
          <motion.div
            whileHover={{ filter: "brightness(1.2) contrast(1.1)" }}
            transition={{ duration: 0.3, ease: "linear" }}
            key={id + title}
            className="h-36 lg:h-56 w-full border border-black rounded-md p-2 flex cursor-pointer"
            onClick={() => navigate(`/careers/${id}`)}
          >
            <img src={image} />
            <div className="flex flex-1 flex-col items-center px-2">
              <h2 className="lg:text-xl text-lg font-semibold text-primary">
                {title}
              </h2>
              <p className="text-xs lg:text-sm text-pretty truncate">{text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Careers;
