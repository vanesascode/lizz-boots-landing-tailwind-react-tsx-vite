import { Button } from "../components";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for
        <span className="text-primary"> Updates </span>& Newsletter
      </h3>

      {/* Form */}

      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border-2 sm:border-secondary rounded-xl">
        <input
          type="text"
          placeholder="subscribe@lizz.com"
          className="input "
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" backgroundColor="bg-primary-center w-full" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
