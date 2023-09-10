import { hamburger, logo } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false); //default: menu is closed

  return (
    <>
      {/*this is going to make it appear on the top of the other content  */}
      <header className="padding-x py-3 z-20 w-full sticky top-0 bg-navbar ">
        <nav className="flex justify-between items-center max-containter max-container">
          {/* LOGO */}

          <a href="#home">
            <div className="flex items-start logo brightness-200">
              <img
                src={logo}
                alt="logo"
                width={40}
                height={10}
                className="mt-1"
              />
              <h1 className="ml-2 font-bold text-[40px] leading-none font-viga ">
                Lizz
              </h1>
            </div>
          </a>

          {/* LINKS WHEN SCREEN BIG */}

          <ul className="flex-1 flex justify-center items-center 2xl:gap-16 xl:gap-10 max-lg:hidden">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className="p-4 flex justify-center xl:min-w-[150px]"
              >
                <a
                  href={link.href}
                  className="font-montserrat leading-normal text-lg  hover:font-extrabold text-dark font-semibold "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-2 text-xl leading-normal font-bold font-montserrat max-lg:hidden justify-center hover:font-extrabold text-dark xl:min-w-[250px] px-2">
            <a href="/">Sign in</a>
            <span>/</span>
            <a href="/">Explore now</a>
          </div>

          {/* ICONS WHEN SCREEN BIG */}

          <div className="flex gap-5 leading-normal   max-lg:hidden  justify-center px-2">
            <div className="mt-[2px]">
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="text-dark "
                  className="bi bi-heart icon"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
              </a>
            </div>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="text-dark"
                className="bi bi-cart icon"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </a>
          </div>

          {/* LINKS WHEN SCREEN SMALL */}

          <div className="hidden max-lg:block">
            {/* Toggle button */}
            <img
              src={hamburger}
              alt="hamburger"
              width={35}
              height={35}
              onClick={() => setToggle((prev) => !prev)}
            />
            {/* Toggle display button */}
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-secondary absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
              {/* Links */}
              <ul className="list-none flex justify-end items-start flex-1 flex-col text-dark sidebar">
                {navLinks.map((link, index) => (
                  <li
                    key={link.label}
                    className={`font-montserrat font-medium cursor-pointer text-[16px] ${
                      index === navLinks.length - 1 ? "mb-0" : "mb-4"
                    }`}
                  >
                    <a
                      href={link.href}
                      className="font-montserrat leading-normal text-xl text-slate-gray hover:text-red hover:font-semibold"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
