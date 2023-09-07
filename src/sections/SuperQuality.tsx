import { boot8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col max-lg:gap-[100px] gap-10 w-full max-container"
    >
      {/*LEFT SIDE */}

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
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

      <div className="flex-1 flex justify-center items-center relative">
        <div className="bg-secondary sm:rounded-[20px] xl:h-[400px] xl:w-[700px] h-[300px] w-[500px]"></div>
        <img
          src={boot8}
          alt="product detail"
          className="absolute z-10 xl:h-[600px] xl:w-[600px] h-[450px] w-[500px] object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
