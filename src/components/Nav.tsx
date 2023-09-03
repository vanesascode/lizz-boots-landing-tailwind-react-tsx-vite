import { hamburger, logo } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false); //default: menu is closed

  return (
    <>
      {/*this is going to make it appear on the top of the other content  */}
      <header className="padding-x py-5 z-20 w-full sticky top-0 bg-navbar ">
        <nav className="flex justify-between items-center max-containter max-container">
          {/* LOGO */}

          <a href="/">
            <div className="flex items-start logo brightness-200">
              <img
                src={logo}
                alt="logo"
                width={40}
                height={10}
                className="mt-1 "
              />
              <h1 className="ml-2 font-bold text-[40px] leading-none font-viga">
                Lizz
              </h1>
            </div>
          </a>

          {/* LINKS WHEN SCREEN BIG */}

          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((link) => (
              <li key={link.label} className="p-4 flex justify-center">
                <a
                  href={link.href}
                  className="font-montserrat leading-normal text-lg  hover:font-extrabold text-dark font-semibold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-2 text-xl leading-normal font-bold font-montserrat max-lg:hidden wide:mr-24 hover:font-extrabold text-dark">
            <a href="/">Sign in</a>
            <span>/</span>
            <a href="/">Explore now</a>
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
