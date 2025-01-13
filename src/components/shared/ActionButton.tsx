import { ReactNode } from "react";

const ActionButton: React.FC<{ children: ReactNode; onClick?: () => void }> = ({
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="w-8 h-8 border shadow-button hover:shadow-buttonHover hover:bg-lightGray transition-all duration-300 flex items-center justify-center rounded-full"
    >
      {children}
    </button>
  );
};

export default ActionButton;
