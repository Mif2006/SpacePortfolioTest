import React from "react";
import Image from "next/image";
import Link from "next/link";
function NavLeft() {
  return (
    <Link href={"/"} className="w-auto h-auto flex flex-row items-center">
      <Image
        src={"/webchainLogo.png"}
        width={60}
        height={60}
        alt="Hyat Myat"
        className="w-[100px] h-[100px] md:w-[60px] md:h-[60px] cursor-pointer  hover:animate-slowspin  "
      />
      <span className=" font-bold hidden md:block text-gray-300  ml-[10px]">
        Webchain Dev
      </span>
    </Link>
  );
}

export default NavLeft;
