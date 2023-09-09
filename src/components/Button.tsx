interface ButtonProps {
  label: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
}

const Button = ({
  label,
  backgroundColor,
  textColor,
  borderColor,
}: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-8 py-5 border font-montserrat text-xl leading-none font-semibold   hover:font-extrabold rounded-xl ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-primary-center text-black "
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
