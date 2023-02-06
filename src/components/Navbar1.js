import React from "react";
import { useEffect, useRef } from "react";
import logo from "../assets/logo.svg";

const menu = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 text-gray-700 hover:text-gray-900"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

export default function Navbar1() {
  const btnRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    const menu = menuRef.current;

    const toggleMenu = () => {
      menu.classList.toggle("hidden");
    };

    btn.addEventListener("click", toggleMenu);

    return () => {
      btn.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <>
      <nav className="bg-gray-100 fixed top-0 inset-x-0">
        <div className="max-w-6xl mx-auto py-2 px-4 border border-b-2 font-semibold text-gray-700">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              {/** logo */}
              <div className="mr-6">
                <a href="#a" className="flex items-center">
                  <img
                    src={logo}
                    alt="Menu"
                    className="mr-1 text-blue-400 -rotate-90"
                  />
                  <span className="font-bold">Rahul</span>
                </a>
              </div>
              {/** primary nav */}
              <div className="hidden md:flex items-center space-x-4">
                <a href="#a" className="hover:text-gray-900">
                  Features
                </a>
                <a href="#a" className="hover:text-gray-900">
                  Products
                </a>
              </div>
            </div>

            {/** secondary nav */}
            <div className="hidden md:flex items-center space-x-2">
              <a href="#a" className="hover:text-gray-900">
                Login{" "}
              </a>
              <button className="p-1 rounded bg-yellow-400 text-yellow-900 hover:bg-yellow-300 hover:text-yellow-800 shadow-md">
                <a href="#a" className="hover:text-gray-900">
                  Sign Up
                </a>
              </button>
            </div>

            {/** Mobile responsive--> Primary nav and secondary nav will hide */}
            {/** mobile button */}
            <div className="flex items-center md:hidden">
              <button ref={btnRef}>{menu}</button>
            </div>
            {/** mobile menu */}
          </div>
        </div>
        {/** mobile menu */}
        <div ref={menuRef} className="hidden">
          <a
            href="#a"
            className="block py-2 text-gray-700 hover:text-gray-900 font-medium px-4"
          >
            Features
          </a>
          <a
            href="#a"
            className="block py-2 text-gray-700 hover:text-gray-900 font-medium px-4"
          >
            Pricing
          </a>
        </div>
      </nav>
    </>
  );
}

// nav--> for background
//* "fixed top-0 inset-x-0" to fix it on top
//! but content below it hides when hamburger icon opens up.
// 1st div--> containment
// 2nd div--> to place items i.e., flex

// to write small content in continuation with emmet shortcut:     h2.font-bold{About Me}

// hover: go by one shade like 400 for hover while 500 for original--> same idea for bg & text
