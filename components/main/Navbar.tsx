import Link from "next/link";
import React from "react";
import NavLeft from "../sub/NavLeft";
import NavMiddle from "../sub/NavMiddle";
import NavRight from "../sub/NavRight";

// import Nav_Left from "./Nav_Left";
// import Nav_right from "./Nav_right";
// import Link from "next/link";
// import Course from "./Course";
// import More from "./More";
function Navbar() {
  //#03001422
  return (
    <div
      className="w-full h-[65px]  fixed top-0 shadow-lg   shadow-[#2A0E61]/50  bg-slate-3
    00/30  bg-[#03001417]   backdrop-blur-md z-50 px-10  "
    >
      <div className=" w-full 1300:w-[1232px] h-full flex flex-row items-center justify-between 1140:justify-around 1300:justify-between m-auto px-[10px] 400:px-[20px] 500:px-[40px] 1140:p-0 ">
        <NavLeft />
        {/* <NavMiddle /> */}
        <div className=" w-[500px] h-full flex flex-row items-center justify-between md:mr-8">
          <div
            className="w-full  h-auto flex flex-row items-center justify-between mr-[15px]   bg-[#0300145e] border
             border-[#7042f861] px-[20px]
           py-[10px] rounded-full text-gray-200"
          >
            <Link href={"/Project"} className="cursor-pointer">
              Skills
            </Link>
            <span className="cursor-pointer">Main</span>
            <span className=" relative cursor-pointer ">
              Encryption
              <div className="w-[38px] h-[16px] border border-teal-500 absolute top-[-13px] flex flex-row items-center justify-center left-[-20px] text-[11px]  bg-[#BBF7D0] text-teal-800  font-bold rounded-full ">
                <span>soon</span>
              </div>
            </span>
          </div>
        </div>
        <NavRight />
      </div>
    </div>
  );
}

export default Navbar;
