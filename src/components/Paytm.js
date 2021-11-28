import { FaAngleDown } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import upi from "../assets/upi.png";
import logo from "../assets/logo.png";
import home1 from "../assets/home1.svg";
import scan from "../assets/scan.svg";
import cashback from "../assets/cashback.svg";
import passbook from "../assets/passbook.svg";
import { RiFlashlightFill } from "react-icons/ri";
import { useState } from "react";


export const Paytm = ({
  username,
  upid,
  amount,
  gotoHome
}) => {
  const [back, setBack] = useState("");
  return (
    <div> 
      <div>
        <div className="flex justify-center p-2">
          <div className="flex justify-center items-center ml-2">
            <FaArrowLeft size="1em" />
          </div>
          <div className="flex flex-1 justify-center">
            <img src={logo} width="100" height="1000"></img>
          </div>
          <div className="flex justify-center items-center">
            <div className="text-xs">
              <div className="flex justify-center items-center">
                <FaWhatsapp size="20px" />
              </div>
              Share
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div
          style={{ width: "320px" }}
          className="rounded-lg bg-pattens-blue-500"
        >
          <div className="flex justify-center mt-6">
            <div className="flex justify-center items-center border-heliotrope-500 border-2 text-white bg-heliotrope-500 rounded-full h-16 w-16">
              BM
            </div>
          </div>
          <div className="flex justify-center font-bold text-2xl p-1">
            {username}
          </div>
          <div className="flex justify-center items-center">
            <div className="mr-2">
              <img src={upi} width="12" height="12" />
            </div>
            <div>UPI ID:</div>
            <div className="ml-2">{upid}@ybl</div>
          </div>
          <div className="flex text-5xl font-bold justify-center">
            <div>&#x20b9;</div>
            <div className="ml-3">{amount}</div>
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
          <div className="flex justify-center py-6">
            <div className="rounded-full py-2 border-2 border-picton-blue-500 text-picton-blue-500 flex items-center justify-center w-32">
              Pay Again
            </div>
          </div>
          <div className="border-b-8 border-picton-blue-500"></div>
          <div className="border-b-8 border-deep-sapphire-500 rounded-b-lg"></div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div
          style={{ width: "320px" }}
          className="border rounded-lg border-gray-200 mt-4 mb-10"
        >
          <div className="flex p-2">
            <div className="text-picton-blue-500 mt-1">
              <RiFlashlightFill />
            </div>
            <div style={{ width: "" }}>
              Your payment took less than 3 seconds Invite your friends to the
              blazing fast paytm UPI experience and earn $100 cashback
            </div>
          </div>
          <div className="rounded-full py-3 border-2 border-picton-blue-500 text-picton-blue-500 flex items-center justify-center w-32 m-3">
            Invite and Earn
          </div>
        </div>
      </div>
      <div className=" flex rounded-full bg-deep-sapphire-500 text-white p-1 justify-center items-center mx-5">
        <div className="flex-1 p-1">
          <div className="flex justify-center">
            <img src={home1} width="25" height="100"></img>
          </div>
          <div className="flex justify-center text-xs text-white mt-2">
            Home
          </div>
        </div>
        <div className="flex-1 p-1">
          <div className="flex justify-center">
            <img src={scan} width="20" height="100"></img>
          </div>
          <div className="flex justify-center text-xs text-white mt-3">
            Scan
          </div>
        </div>
        <div className="flex-1 p-1">
          <div className="flex justify-center">
            <img src={cashback} width="30" height="100"></img>
          </div>
          <div className="flex justify-center text-xs text-white mt-2.5">
            Cashback
          </div>
        </div>
        <div className="flex-1 p-1">
          <div className="flex justify-center">
            <img src={passbook} width="15" height="100"></img>
          </div>
          <div className="flex justify-center text-xs text-white mt-2.5">
            Passbook
          </div>
        </div>
      </div>
      <button type="button" onClick={gotoHome} >Back</button>
    </div>
  );
};
