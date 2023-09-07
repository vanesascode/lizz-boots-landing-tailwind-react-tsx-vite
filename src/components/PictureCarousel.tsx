import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { star } from "../assets/icons";

interface CarrouselCard {
  id: number;
  url: string;
  alt: string;
  name: string;
  price: string;
}

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: true;
  initialSlide: number;
  responsive: [
    {
      breakpoint: number;
      settings: {
        slidesToShow: number;
        slidesToScroll: number;
      };
    },
    {
      breakpoint: number;
      settings: {
        slidesToShow: number;
        slidesToScroll: number;
      };
    },
    {
      breakpoint: number;
      settings: {
        slidesToShow: number;
        slidesToScroll: number;
      };
    }
  ];
}

interface PictureCarouselProps {
  carrouselCards: CarrouselCard[];
}

const PictureCarousel = ({ carrouselCards }: PictureCarouselProps) => {
  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {carrouselCards.map((card) => (
        <div key={card.id}>
          <div className="bg-secondary rounded-xl flex fustify-center items-center p-5 mr-6">
            <img src={card.url} alt={card.alt} />
          </div>
          {/*CARD CONTENT */}

          <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} alt="rating icon" width={24} height={24} />
            <p className="font-montserrat text-xl leading-normal text-grey">
              (4.5)
            </p>
          </div>
          <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin text-dark">
            {card.name}
          </h3>
          <p className="my-2 font-semibold font-montserrat text-primary text-2xl leading-normal">
            {card.price}
          </p>
        </div>
      ))}
    </Slider>
  );
};

export default PictureCarousel;
