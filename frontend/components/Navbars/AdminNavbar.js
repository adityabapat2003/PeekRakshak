import React from "react";
import Link from "next/link";

export default function Navbar({ title, image }) {
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          {/* <Link href="/"> */}
            <a
              className="text-white text-lg uppercase hidden lg:inline-block font-bold"
              // onClick={(e) => e.preventDefault()}
            >
              {title}
            </a>
          {/* </Link> */}

          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <div className="items-center flex text-white mr-6 font-bold hover:text-gray-100 transition-all">
              {/* <Link href="/api/auth/signout"> */}
                <a>Peek-Rakshak</a>
              {/* </Link> */}
            </div>
            <div className="items-center flex text-white">
              <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
                <img
                  alt="..."
                  className="w-full rounded-full align-middle border-none shadow-lg"
                  src="C:\Users\aditya\Downloads\plant-logo-icon-brand-symbol-design-graphic-minimalist-logo-vector.jpg"
                />
              </span>
            </div>
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
