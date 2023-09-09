import {
  transparentBackground,
  collage1,
  collage2,
  collage6,
} from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      {/* LEFT SIDE */}

      <div className="flex-1 relative ">
        {/* CANVAS */}

        <img
          src={transparentBackground}
          alt="Shoe Promotion"
          width={773}
          height={687}
          className="object-contain w-full"
        />

        {/* COLLAGE */}

        {/* Left pic */}

        <div className=" bg-secondary h-[55%] w-[45%] absolute top-0 left-0 rounded-[20px]">
          <img
            src={collage2}
            alt="Shoe Promotion"
            className="h-[90%] w-[100%] object-contain "
          />
        </div>

        {/* Right pic */}

        <div className="bg-secondary h-[55%] w-[35%] absolute top-0 rounded-[20px] right-[18%]">
          <img
            src={collage1}
            alt="Shoe Promotion"
            className="h-[90%] w-[100%] object-contain"
          />
        </div>

        {/* Bottom pic */}

        <div className="bg-secondary h-[43%] w-[82%] absolute bottom-0 rounded-[20px]">
          <img
            src={collage6}
            alt="Shoe Promotion"
            className="h-[99%] w-[100%] object-contain"
          />
        </div>

        {/* CIRCLE */}

        <div className="bg-dark h-[30%] w-[27%] absolute top-[50%] right-[5%] rounded-full flex justify-center items-center border-[14px] border-white">
          <span className="text-white xl:text-[300%] lg:text-[250%] md:text-[200%] sm:text-[150%] absolute leading-[1]">
            40% <br />
            OFF
          </span>
        </div>
      </div>

      {/* RIGHT SIDE */}

      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-primary">Special </span>
          Offer
        </h2>
        <p className="mt-4 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="&nbsp;&nbsp;Shop now&nbsp;" />
          <Button
            label="Learn more"
            backgroundColor="bg-white hover-bg-secondary border-2"
            textColor="text-dark"
            borderColor="border-2 border-secondary"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
