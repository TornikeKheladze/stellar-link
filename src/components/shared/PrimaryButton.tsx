const PrimaryButton: React.FC<{
  label: string;
  className?: string;
  onClick: () => void;
}> = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-primary border border-primary w-[132px] lg:w-[200px]  
        h-[50px] lg:h-[60px] box-border 
      hover:bg-white hover:border-black animation
         ${className}`}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
