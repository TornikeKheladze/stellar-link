import { useState } from "react";
import Modal from "../components/shared/Modal";
import { brands } from "../data/brands";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
const Brands = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeBrand, setActiveBrand] = useState<{
    image: string;
    name: string;
    id: number;
  } | null>(null);

  const { t } = useTranslation();

  return (
    <section className="py-9">
      <h1 className="bg-primary lg:w-1/3 w-full mx-auto text-white text-center py-3 text-3xl font-bold mb-5">
        {t("brands")}
      </h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-wrap justify-center gap-5"
      >
        {brands.map(({ id, image, name }) => (
          <div
            key={id + name}
            onClick={() => {
              setIsOpen(true);
              setActiveBrand({ image, name, id });
            }}
            className="w-36 lg:w-56 flex justify-center items-center border border-customBlack border-opacity-50 shadow-[0px_0px_5px_4px_rgba(0,_0,_0,_0.3)] rounded-md p-2 cursor-pointer"
          >
            <img className="object-cover" src={image} alt={name} />
          </div>
        ))}
      </motion.div>
      <Modal
        className="h-1/2 -bottom-1/2 lg:inset-x-1/4 inset-x-4"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        translateY={-150}
      >
        <div>
          {activeBrand && (
            <img src={activeBrand.image} alt={activeBrand.name} />
          )}
          <div className="flex flex-col gap-4">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem distinctio delectus quidem dolorem ea alias minima.
              Non veniam repudiandae nam perferendis praesentium error
              necessitatibus quia consectetur velit. Officia, sapiente aut?
            </p>
            <a
              className="text-blue-600"
              target="_blank"
              rel="noreferrer"
              href="test.com"
            >
              test.com
            </a>
          </div>
        </div>
      </Modal>
    </section>
  );
};
export default Brands;
