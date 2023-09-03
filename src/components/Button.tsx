interface ButtonProps {
  label: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  fullWidth?: boolean;
}

const Button = ({
  label,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-8 py-5 border font-montserrat text-xl leading-none font-semibold
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-primary-center text-black border-orange  hover:font-extrabold"
      } rounded-xl ${fullWidth && "w-full"}`}
    >
      {label}
    </button>
  );
};

export default Button;
