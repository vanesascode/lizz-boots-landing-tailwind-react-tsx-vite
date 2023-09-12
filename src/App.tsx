import { useState, useEffect } from "react";
import { Nav, Sales, Modal, Cookies } from "./components";
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
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showCookies, setShowCookies] = useState<boolean>(false);

  //// MODAL /////////////////////////////////////////////////

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasModalShown = localStorage.getItem("hasModalShown");

      if (!hasModalShown) {
        setShowModal(true);
        localStorage.setItem("hasModalShown", "true");
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  ///// COOKIES ///////////////////////////////////////////////

  useEffect(() => {
    const hasCookiesShown = localStorage.getItem("hasCookiesShown");

    if (!hasCookiesShown) {
      setShowCookies(true);
      localStorage.setItem("hasCookiesShown", "true");
    }
  }, []);

  ////////////////////////////////////////////////////////////////

  return (
    <div>
      {/* MODAL */}

      {showModal && (
        <div className="modal-overlay">
          <Modal setShowModal={setShowModal} />
        </div>
      )}

      {/* COOKIES*/}

      {showCookies && (
        <div className="cookies-overlay w-full">
          <Cookies setShowCookies={setShowCookies} />
        </div>
      )}
      {/* SECTIONS */}
      <Sales />
      <Nav />
      <main className="relative">
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
