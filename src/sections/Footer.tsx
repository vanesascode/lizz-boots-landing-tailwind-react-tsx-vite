import { logo } from "../assets/icons";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      {/* TOP */}
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        {/* Logo + social media */}

        <div className="flex flex-col items-start">
          <a href="/">
            <div className="flex items-start logo brightness-200">
              <img
                src={logo}
                alt="logo"
                width={50}
                height={20}
                className="mt-1 invert"
              />
              <h1 className="ml-2 font-bold text-[50px] leading-none font-viga text-white">
                Lizz
              </h1>
            </div>
          </a>

          <p className="mt-6 text-base leading-7 font-montserrat text-white sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>

          {/* Icons */}

          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <a href="/">
                <div
                  className="flex justify-center items-center w-12 h-12 bg-white rounded-full hover:bg-grey"
                  key={icon.alt}
                >
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Columns */}

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-montserrat text-2xl leading-[20px] font-medium mb-6 text-white">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 font-montserrat text-base leading-normal text-white hover:text-grey move-right"
                    key={link.name}
                  >
                    <a href={link.link} className="move-right">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM */}

      <div className="flex justify-between text-white hover:text-grey mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer ">
          <p> &copy; Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
