const CloseBtn: React.FC<{ className?: string; onClick: () => void }> = ({
  className,
  onClick,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={"ionicon cursor-pointer " + className}
      viewBox="0 0 512 512"
      onClick={onClick}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M368 368L144 144M368 144L144 368"
      />
    </svg>
  );
};
export default CloseBtn;
