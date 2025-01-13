import { motion } from "framer-motion";
import Backdrop from "../layout/Backdrop";
import ActionButton from "./ActionButton";
import CloseIcon from "../../assets/icons/CloseIcon";

const Modal: React.FC<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  className?: string;
  translateY?: number;
}> = ({
  isOpen,
  setIsOpen,
  children,
  className = "h-[463px] inset-x-[15px] -bottom-[463px]",
  translateY = -110,
}) => {
  const variants = {
    visible: { transform: `translateY(${translateY}%)` },
    hidden: { transform: "translateY(0)" },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={variants}
        className={`fixed rounded-[20px] bg-white z-[101] ${className}`}
      >
        <div className="flex justify-between px-4 items-center h-[57px] border-b border-b-[#E2E8F0]">
          <span className="font-bold font-helvetica tracking-wide"></span>
          <ActionButton onClick={() => setIsOpen(false)}>
            <CloseIcon />
          </ActionButton>
        </div>
        <div className="p-2">{children}</div>
      </motion.div>
      {isOpen && <Backdrop onClick={() => setIsOpen(false)} />}
    </>
  );
};

export default Modal;
