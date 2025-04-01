import React from "react";
import Image from "next/image";
import topLeft from "../../assests/topLeft.png";
import topRight from "../../assests/topRight.png";
import bottomleft from "../../assests/bottomLeft.png";
import bottomright from "../../assests/bottomRight.png";

function ContactUs() {
  return (
    <div id="contactus">
      {/* input form div  */}
      <div className="lg:w-[85%] md:w-[90%] w-[92%] mt-[10%] mx-auto bg-[#173E33] lg:mt-[4%] md:mt-[6%] rounded-xl">
        <div className="flex w-[80%] mx-auto justify-between">
          <Image src={topLeft} alt="top-left-gradient" className="md:flex hidden " />
          <Image src={topRight} alt="top-right image" className="md:flex hidden" />
        </div>
        {/* heading div  */}
        <div className="w-[70%] mx-auto md:pt-0 pt-5 text-center">
          <h1 className="md:text-[32px] text-[16px] font-semibold -mt-2 text-white">
            Have Question or need furthur assistant? Reach out to us-we are here
            to help!
          </h1>
        </div>
        <div className="md:mt-[2%] mt-[5%] w-[99%]">
          <p className="md:text-[24px] text-[14px] font-normal text-white mx-auto text-center">
            Fill out the form below, and out team will respond as soon as
            possible
          </p>
        </div>

        <div className="lg:w-[99%] md:w-[70%] w-[80%] gap-y-3 justify-center flex-col md:flex-row  mt-4 flex gap-x-2 mx-auto">
          <input
            type="text"
            placeholder="Email"
            className="bg-[#48C070] leading-[100%] text-[18px] md:text-[24px] rounded-xl p-2 md:rounded-md md:p-1 text-white"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="bg-[#48C070] leading-[100%] text-[18px] md:text-[24px] rounded-xl p-2 md:rounded-md md:p-1 text-white"
          />
        </div>

        <div className="w-full ml-[0.5%]   justify-evenly mt-[1%] pb-[2%] flex">
          <Image
            src={bottomleft}
            alt="bottom-left-gradient"
            className="lg:relative hidden md:flex -top-[40px]"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Address"
            className="bg-[#48C070]  lg:w-[65.5%]  md:w-[92.5%] w-[80%] mt-2 md:mt-0 text-[24px] rounded-xl -ml-1 md:rounded-md p-1 text-white"
          />
          <Image
            src={bottomright}
            alt="bottom-right-gradient"
            className="lg:relative hidden md:flex -top-[40px]"
          />
        </div>
        <div className="text-center pt-2 pb-4">
          <button className="bg-[#45BF6F] text-white px-4 py-2 rounded-md hover:bg-green-600">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
