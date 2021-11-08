import { FaAngleDown } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import upi from "../assets/upi.png";
import logo from "../assets/logo.png";

export const Paytm = () => {
  return (
    <div>
      <div className="flex">
        <div className="flex justify-center items-center">
          <FaArrowLeft size="1em" />
        </div>
        <div className="flex flex-1 justify-center">
          <img src={logo} width="100" height="1000"></img>
        </div>
        <div className="">
          <div className="flex justify-center">
            <FaWhatsapp size="1.5em" />
          </div>
          <div className="text-xs">Share</div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="rounded-lg bg-pattens-blue-500">
          <div className="flex justify-center">
            <div className="flex justify-center items-center border-heliotrope-500 border-2 text-white bg-heliotrope-500 rounded-full h-16 w-16">
              BM
            </div>
          </div>
          <div className="flex justify-center font-bold text-2xl p-1">
            Babban Mandal
          </div>
          <div className="flex justify-center">
            <div>
              <img src={upi} width="15" height="12" />
            </div>
            <div>UPI ID:</div>
            <div className="ml-2">9603641512@ybl</div>
          </div>
          <div className="flex text-5xl font-bold justify-center">
            <div>$</div>
            <div className="ml-3">30</div>
            <div></div>
          </div>
          <div className="font-bold flex justify-center my-2">
            PAYMENT SUCCESSFUL
          </div>
          <div className="flex text-xs justify-center my-2">
            <div>24 Oct,</div>
            <div className="ml-1">01:41 PM</div>
          </div>
          <div className="flex text-picton-blue-500 justify-center">
            <div>Ref. No.</div>
            <div className="ml-2">129794891920</div>
            <div className="flex items-center mx-2">
              <FaAngleDown size="1em" />
            </div>
          </div>
          <div className="flex justify-center py-4">
            <div className="rounded-full py-3 px-4 border-2 border-picton-blue-500 text-picton-blue-500 flex items-center justify-center w-32">
              Pay Again
            </div>
          </div>
          {/* <div className="bg-picton-blue-500 text-picton-blue-500 text-xs">.</div>
          <div className="bg-deep-sapphire-500 text-deep-sapphire-500 text-xs">.</div> */}
        </div>
      </div>
    </div>
  );
};
