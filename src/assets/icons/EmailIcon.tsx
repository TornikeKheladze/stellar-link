const EmailIcon: React.FC<{ className?: string }> = ({ className = "w-6" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={"ionicon " + className}
      viewBox="0 0 512 512"
    >
      <rect
        x="48"
        y="96"
        width="416"
        height="320"
        rx="40"
        ry="40"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M112 160l144 112 144-112"
      />
    </svg>
  );
};

export default EmailIcon;
