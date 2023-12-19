import React from "react";

const Footer = () => {
  return (
    <div className=" h-full w-full bg-[#141414] text-white">
      <div className=" min-h-[15rem] w-10/12  mx-auto p-8">
        <div className="flex justify-between items-center mt-8">
          <h1 className=" font-bold text-5xl text-red-600">NetFlix</h1>
          <ul className=" flex justify-around gap-x-5 text-gray-400 text-sm">
            <li className=" cursor-pointer">About</li>
            <li className=" cursor-pointer">Privacy Policy</li>
            <li className=" cursor-pointer">Contact</li>
          </ul>
        </div>
        <div className=" w-full h-[1px] mt-8 bg-slate-400 brightness-[0.3]"></div>
        <div className=" text-sm text-gray-400 mt-8 w-fit mx-auto">
          Crafted By{" "}
          <a
            href="https://www.linkedin.com/in/kaji-azad-ali-4bb706249/"
            target="_blank"
            className="hover:text-gray-600"
          >
            Kaji Azad Ali
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
