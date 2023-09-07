type ShoeCardProps = {
  shoes: {
    thumbnail: string;
    bigShoe: string;
  };
  changeBigShoeImage: (url: string) => void;
  bigShoeImg: string;
};

const ShoeCard = ({ shoes, changeBigShoeImage, bigShoeImg }: ShoeCardProps) => {
  //Function to change the big shoe image
  const handleClick = () => {
    if (bigShoeImg !== shoes.bigShoe) {
      changeBigShoeImage(shoes.bigShoe);
    }
  };

  return (
    <>
      {/* Ternary to change the border color of the shoe card (when selected as big shoe image) */}
      <div
        className={`border-4 rounded-xl ${
          bigShoeImg === shoes.bigShoe ? " border-dark" : " border-transparent"
        } cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
      >
        {/* The card as it is */}
        <div className="flex justify-center items-center bg-primary bg-center bg-cover sm:w-40 sm:h-40 rounded-lg max-sm:p-4 ">
          <img
            src={shoes.thumbnail}
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
