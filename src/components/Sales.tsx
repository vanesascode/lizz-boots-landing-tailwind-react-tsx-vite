import { useState, useEffect } from "react";
import { salesPhrases } from "../constants";

const Sales = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % salesPhrases.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentPhrase = salesPhrases[index];

  return (
    <div
      className="padding-x flex justify-center flex-col items-center text-center  flex-wrap font-montserrat  py-3 w-full text-dark"
      id="home"
    >
      <p className=" font-semibold text-lg">{currentPhrase.title}</p>
      <p className="font-montserrat text-slate-gray text-sm leading-6 text-center ">
        {currentPhrase.subtitle}{" "}
        <a href="/" className="underline text-primary3 font-semibold  ">
          Buy now
        </a>
      </p>
    </div>
  );
};

export default Sales;
