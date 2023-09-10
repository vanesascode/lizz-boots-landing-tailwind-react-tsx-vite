import { useState } from "react";

import { statistics, shoes } from "../constants";
import { Button, ShoeCard } from "../components";
import { boot4 } from "../assets/images";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(boot4);

  return (
    <section className="w-full flex xl:flex-row flex-col justify-center max-container ">
      {/* LEFT SIDE  min-h-screen*/}

      <div className="relative flex-1 flex flex-col justify-center items-start w-full  max-xl:padding-x md:ml-[20px] xl:ml-[40px] ">
        {/* Title */}

        <h1 className="max-xl:mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold  text-dark">
          <span className=" xl:whitespace-nowrap relative z-10 pr-10">
            New Collection
          </span>
          <br />
          <span className="text-primary inline-block  font-viga text-[90px] max-sm:text-[70px]">
            Lizz
          </span>{" "}
          Boots
        </h1>

        {/* Subtitle */}

        <p className="info-text mt-6 mb-14 sm:max-w-sm text-grey">
          Elevate your look with our latest arrivals and add a touch of style to
          any outfit.
        </p>

        {/* Button */}

        <Button label="Shop now" />

        {/* Statistics */}

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16 text-dark">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold  text-dark">
                {stat.value}
              </p>
              <p className="leading-7 font-montserrat text-dark">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE  xl:min-h-screen   */}

      <div className="relative flex-1 flex justify-center items-center  max-xl:py-[30px] bg-secondary xl:rounded-[20px]  xl:margin xl:mt-0 mt-[50px]">
        <div className="padding-x sm:pb-24 sm:pt-16 max-sm:pb-16">
          <img
            src={bigShoeImg}
            alt="shoe colletion"
            className="object-contain relative"
          />
        </div>

        <div className="flex sm:gap-6 gap-4 absolute wide:-bottom-[14%] xl:-bottom-[16%]  lg:-bottom-[8%] md:-bottom-[10%] -bottom-[14%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                shoes={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
