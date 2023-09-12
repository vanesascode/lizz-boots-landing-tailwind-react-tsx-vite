import { boot8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      className="flex justify-between items-center max-lg:flex-col max-lg:gap-[100px] gap-10 w-full max-container"
      id="about-us"
    >
      {/*LEFT SIDE */}

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold text-dark">
          We Provide You
          <span className="text-primary"> Super </span>
          <span className="text-primary">Quality </span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      {/*RIGHT SIDE */}

      <div className="flex-1 flex justify-center items-center  ">
        <div className="  xl:h-[375px] xl:w-[675px] h-[500px] w-[300px] relative rounded-[20px] bg-secondary"></div>
        {/*w-[500px] */}
        <img
          src={boot8}
          alt="product detail"
          className="absolute z-10 xl:h-[600px] xl:w-[600px] h-[475px] w-[350px] object-contain"
        />
        {/**w-[475px] */}
      </div>
    </section>
  );
};

export default SuperQuality;
