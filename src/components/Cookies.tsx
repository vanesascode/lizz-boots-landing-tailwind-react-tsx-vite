import { Button } from "../components";

type CookiesProps = {
  setShowCookies: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cookies = ({ setShowCookies }: CookiesProps) => {
  return (
    <div>
      <div className="bg-dark xl:px-[100px] px-6 py-5 outline-none max-lg:h-[600px] h-[375px] w-full relative ">
        {/* TOP CONTENT */}

        <div className="text-end max-container flex flex-col  ">
          <div>
            <p className="font-montserrat text-white text-[1.4rem] leading-9 text-start">
              This website uses cookies
              <div className="font-montserrat text-[55%] leading-5 text-white mt-4">
                <p>
                  Now you can control the use of cookies in your browser!
                  Sprinter, along with our digital tools, uses its own and
                  third-party cookies on the page. Some are essential for the
                  correct functioning of the website; others are optional and
                  are used to:
                </p>
                <ul className="leading-8">
                  <li>&nbsp; &#8226; &nbsp;Analyze how our website is used.</li>
                  <li>
                    &nbsp; &#8226; &nbsp;Enable personalized options based on
                    your interests.
                  </li>
                  <li>&nbsp; &#8226; &nbsp;To offer you advertising.</li>
                </ul>
                <p>
                  {" "}
                  By clicking on 'Accept all', you accept the installation of
                  cookies. If you prefer to configure them yourself or reject
                  them, click on 'Cookie settings'.
                  <br />
                  For more information, visit our{" "}
                  <a href="#home" className="underline">
                    cookie policy
                  </a>
                  .
                </p>
              </div>
            </p>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex max-container items-end gap-3 pt-5 max-lg:flex-col ">
          <Button
            label="&nbsp;&nbsp;Accept all &nbsp;&nbsp;"
            backgroundColor="bg-primary-center"
            textColor="text-black"
            borderColor="border-none max-lg:w-full"
            onClick={() => setShowCookies(false)}
          />
          <Button
            label="Cookies configuration"
            backgroundColor="bg-white hover-bg-secondary border-2"
            textColor="text-dark"
            borderColor="border-2 border-secondary max-lg:w-full"
            onClick={() => setShowCookies(false)}
          />
          <Button
            label="Decline"
            backgroundColor="bg-white hover-bg-secondary border-2"
            textColor="text-dark"
            borderColor="border-2 border-secondary max-lg:w-full"
            onClick={() => setShowCookies(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Cookies;
