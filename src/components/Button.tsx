interface ButtonProps {
  label: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  textSize?: string;
  onClick?: () => void;
}

const Button = ({
  label,
  backgroundColor,
  textColor,
  borderColor,
  textSize,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-8 py-5  font-montserrat  leading-none font-semibold   hover:font-extrabold rounded-xl outline-none ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor} ${textSize}`
          : "bg-primary-center text-black text-xl"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
