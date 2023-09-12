import { Button } from "../components";
import { logo } from "../assets/icons";

type ModalProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ setShowModal }: ModalProps) => {
  return (
    <div>
      <div className="modal-background px-6 py-5 rounded-xl outline-none xl:h-[675px] xl:w-[480px] sm:h-[575px] sm:w-[380px] h-[650px] relative">
        {/* TOP CONTENT */}

        <div className="flex justify-end ">
          <button
            onClick={() => setShowModal(false)}
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
            onClick={() => setShowModal(false)}
          />
          <Button
            label="Join now"
            backgroundColor="bg-white hover-bg-secondary border-2"
            textColor="text-dark"
            borderColor="border-2 border-secondary"
            onClick={() => setShowModal(false)}
          />
        </div>

        {/* BOTTOM CONTENT */}
        <div className="items-start absolute bottom-[10%]">
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
  );
};

export default Modal;
