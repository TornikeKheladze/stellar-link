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
          <div
            key={id + name}
            onClick={() => {
              setIsOpen(true);
              setActiveProject({ image, name, id });
            }}
            className="w-36 lg:w-56 flex justify-center items-center border-opacity-50 hover:shadow-[0px_0px_5px_4px_rgba(0,_0,_0,_0.3)] animation  rounded-md p-2 cursor-pointer"
          >
            <img className="object-cover" src={image} alt={name} />
          </div>
        ))}
      </motion.div>
      <Modal
        className="h-[90vh] inset-x-[15px] -bottom-[90vh] overflow-hidden"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        // translateY={-344}
      >
        <div>
          {activeProject && (
            <img
              src={activeProject.image}
              alt={activeProject.name}
              className="object-cover w-full"
            />
          )}
        </div>
      </Modal>
    </section>
  );
};

export default Projects;
