interface ServiceCardProps {
  imgURL: string;
  label: string;
  subtext: string;
}

const ServiceCard = ({ imgURL, label, subtext }: ServiceCardProps) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px]  px-10 py-16  card">
      <div className="w-11 h-11 flex justify-center items-center  rounded-full bg-primary-dark">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold text-dark">
        {label}
      </h3>
      <p className="mt-3 break-words info-text ">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
