import React from "react";
import { motion } from "framer-motion";

const Backdrop: React.FC<{
  onClick: () => void;
  className?: string;
}> = ({ onClick, className }) => {
  return (
    <motion.div
      className={`fixed inset-0 bg-black bg-opacity-50 z-[100] ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClick}
    ></motion.div>
  );
};

export default Backdrop;
