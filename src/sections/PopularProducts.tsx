import { PictureCarousel } from "../components";
import { carrouselCards } from "../constants";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold text-dark">
          Our <span className="text-primary"> Popular </span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 info-text">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value.
        </p>
      </div>
      <div className="mt-16">
        <PictureCarousel carrouselCards={carrouselCards} />
      </div>
    </section>
  );
};

export default PopularProducts;
