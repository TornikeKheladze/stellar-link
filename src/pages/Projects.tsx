import { useState } from "react";
import Modal from "../components/shared/Modal";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<{
    image: string;
    name: string;
    id: number;
  } | null>(null);

  const { t } = useTranslation();

  return (
    <section className="py-9">
      <h1 className="bg-primary lg:w-1/3 w-full mx-auto text-white text-center py-3 text-3xl font-bold mb-5">
        {t("projects")}
      </h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-wrap justify-center gap-5"
      >
        {projects.map(({ id, image, name }) => (
          <motion.div
            key={id + name}
            onClick={() => {
              setIsOpen(true);
              setActiveProject({ image, name, id });
            }}
            whileHover={{ scale: 1.05 }}
            className="bg-primary bg-opacity-30 w-44 lg:w-64 flex flex-col items-center gap-3 justify-between  border-opacity-50 hover:shadow-[0px_0px_5px_4px_rgba(0,_0,_0,_0.3)] animation  rounded-md p-2 cursor-pointer"
          >
            <img className="object-cover rounded-lg" src={image} alt={name} />
            <p className="text-center text-xl font-medium">{t(name)}</p>
          </motion.div>
        ))}
      </motion.div>
      <Modal
        className="h-[60vh] -bottom-[60vh] lg:inset-x-1/4 inset-x-4"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        // translateY={-344}
      >
        <div className="h-full flex items-center justify-center flex-col gap-3">
          {activeProject && (
            <>
              <img
                src={activeProject.image}
                alt={activeProject.name}
                className="h-[40vh] object-center"
              />
              <p className="text-center text-xl font-medium">
                {t(activeProject.name)}
              </p>
            </>
          )}
        </div>
      </Modal>
    </section>
  );
};

export default Projects;
