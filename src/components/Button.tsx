interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return (
    <button className="flex justify-center items-center gap-2 px-8 py-5 border font-montserrat text-xl leading-none font-semibold bg-primary-center text-black border-orange  hover:font-extrabold rounded-xl">
      {label}
    </button>
  );
};

export default Button;
