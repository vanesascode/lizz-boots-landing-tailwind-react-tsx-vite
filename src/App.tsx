// import { useState, useEffect } from "react";
import { Nav, Sales } from "./components"; //Button
// import { logo } from "./assets/icons";

import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

const App = () => {
  // const [showModal, setShowModal] = useState<boolean>(false);

  //To be opened every time the page is loaded:

  // useEffect(() => {
  //   setShowModal(true);
  // }, []);

  ///////////////////////////////

  //To be opened only once in a browser:

  // useEffect(() => {
  //   const hasModalShown = localStorage.getItem("hasModalShown");

  //   if (!hasModalShown) {
  //     setShowModal(true);
  //     localStorage.setItem("hasModalShown", "true");
  //   }
  // }, []);

  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };

  return (
    <div>
      {/* MODAL */}

      {/* {showModal && (
        <div className="modal-overlay">
          <div className="modal-background px-6 py-5 rounded-xl outline-none h-[675px] w-[400px] border-2 border-dark relative"> */}
      {/* TOP CONTENT */}

      {/* <div className="flex justify-end ">
              <button
                onClick={handleCloseModal}
                className="text-dark font-viga text-2xl"
              >
                X
              </button>
            </div>
            <div className="text-end pt-5">
              <p className="font-montserrat text-dark text-[1.6rem] leading-8 font-bold">
                Be exclusive.
                <br />
                Be the first to <span className="text-white">Lizz</span> it.
              </p>
            </div>
            <div className="flex flex-col items-end gap-3 pt-5">
              <Button
                label="&nbsp;&nbsp;Sign in &nbsp;&nbsp;"
                backgroundColor="bg-primary-center"
                textColor="text-black"
                borderColor="border-none"
              />
              <Button
                label="Join now"
                backgroundColor="bg-white hover-bg-secondary border-2"
                textColor="text-dark"
                borderColor="border-2 border-secondary"
              />
            </div> */}

      {/* BOTTOM CONTENT */}
      {/* <div className="items-start absolute bottom-[10%]">
              <a href="#home">
                <div className="flex flex-col logo">
                  <div className="flex items-start  brightness-200">
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
                  <div className="font-montserrat text-white text-2xl leading-8 font-bold">
                    Membership
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      )} */}

      {/* SECTIONS */}

      <main className="relative">
        <Sales />
        <Nav />
        <section className=" padding-b">
          <Hero />
        </section>
        <section className="padding">
          <PopularProducts />
        </section>

        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding">
          <Services />
        </section>
        <section className="padding">
          <SpecialOffer />
        </section>
        <section className="bg-pale-blue padding">
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe />
        </section>
        <section className=" bg-black padding-x padding-t pb-8">
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default App;
