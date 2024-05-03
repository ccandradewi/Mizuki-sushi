import { useState } from "react";
import Logo from "../../assets/nav/Mizuki.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-10 block w-full text-white bg-black rounded-none h-max py-1 lg:py-4">
      <div className="max-w-screen flex flex-wrap items-center justify-between">
        <img src={Logo} className=" h-12" alt="Mizuki Logo" />
        <button
          className="relative mr-5 h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </span>
        </button>
        <div
          className={`${
            isNavOpen ? "block" : "hidden"
          } w-full lg:block lg:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col gap-2 mt-2 mb-4 text-center lg:mb-0 lg:mt-0 lg:flex-row lg:mr-7">
            <li>
              <Link
                className="block p-1 font-sans font-bold text-md antialiased leading-normal text-blue-gray-900"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block p-1 font-sans font-bold text-md antialiased leading-normal text-blue-gray-900"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block p-1 font-sans font-bold text-md antialiased leading-normal text-blue-gray-900"
                to="/products"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block p-1 font-sans font-bold text-md antialiased leading-normal text-blue-gray-900"
                to="/teams"
              >
                Teams
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
