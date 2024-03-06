import React from "react";
import Image from "next/image";
import image1 from "../images/logo.svg";
export default function Navbar() {
  return (
    <div className="navbar  fixed w-full top-0 px-[120px] py-[24px] filter backdrop-blur bg-black bg-opacity-30 z-50">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div>
          <Image
            className="w-[80px]"
            src={image1}
            alt="photo"
            width={500}
            height={500}
          />
        </div>
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white gap-1">
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>work</a>
          </li>
          <li>
            <a>Clients</a>
          </li>
          <li>
            <a>Why us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-transparent text-white font-sans  border-white">Contact Us</a>
      </div>
    </div>
  );
}
