import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const TextTyping: React.FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => {
  const heroTextRef = useRef(null);

  const isInView = useInView(heroTextRef, {
    amount: 0.5,
    once: true,
  });

  const defaultAnimations = {
    hidden: { display: "none" },
    visible: { display: "inline" },
  };
  return (
    <p className="relative w-full">
      <motion.span
        ref={heroTextRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        // animate="visible"
        transition={{ staggerChildren: 0.04 }}
        className={className}
        aria-hidden
      >
        {text?.split("").map((letter, i) => (
          <motion.span
            className="inline-block "
            variants={defaultAnimations}
            transition={{ duration: 0 }}
            key={i + letter}
          >
            {letter}
          </motion.span>
        ))}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className={className}
        >
          |
        </motion.span>
      </motion.span>
    </p>
  );
};

export default TextTyping;
