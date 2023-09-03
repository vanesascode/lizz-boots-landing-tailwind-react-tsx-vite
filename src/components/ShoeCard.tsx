type ShoeCardProps = {
  imgURL: {
    thumbnail: string;
    bigShoe: string;
  };
  changeBigShoeImage: (url: string) => void;
  bigShoeImg: string;
};

const ShoeCard = ({
  imgURL,
  changeBigShoeImage,
  bigShoeImg,
}: ShoeCardProps) => {
  //Function to change the big shoe image
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <>
      {/* Ternary to change the border color of the shoe card (when selected as big shoe image) */}
      <div
        className={` rounded-xl ${
          bigShoeImg === imgURL.bigShoe ? " bg-primary" : " bg-transparent"
        } cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
      >
        {/* The card as it is */}
        <div className="flex justify-center items-center bg-primary bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 ">
          <img
            src={imgURL.thumbnail}
            alt="shoe colletion"
            width={127}
            height={103.34}
            className="object-contain "
          />
        </div>
      </div>
    </>
  );
};

export default ShoeCard;
