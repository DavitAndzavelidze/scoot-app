import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Location from "./Locations";
import Careers from "./Careers";
import Logo from "../assets/scoot.svg";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <>
      <nav>
        {nav ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0 md:hidden"></div>
        ) : (
          ""
        )}
        <div onClick={() => setNav(!nav)}>
          <div className="absolute top-0 left-0 w-screen items-center px-[32px] flex justify-start md:justify-center h-[64px] lg:h-[96px] bg-white z-[100]">
            <button>
              <FaBars color="orange" className="md:hidden" />
            </button>
            <img
              className="mx-auto md:mx-[58px] md:ml-[0px] lg:w-[108px]"
              src={Logo}
              alt="logo"
            />
            <ul className="hidden md:flex md:items-center md:font-bold md:space-x-6 md:text-[#939CAA]">
              <li className="lg:hover:text-[#FCB72B]">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="lg:hover:text-[#FCB72B]">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="lg:hover:text-[#FCB72B]">
                <NavLink to="/locations">Location</NavLink>
              </li>
              <li className="lg:hover:text-[#FCB72B]">
                <NavLink to="/careers">Careers</NavLink>
              </li>
              <li>
                <button className="bg-[#FCB72B] lg:hover:text-[#FCB72B] lg:border-[3px] border-[#FCB72B] lg:hover:bg-white md:ml-[44px] lg:ml-[511px] py-3.5 px-10 text-white font-bold text-[15px] ">
                  Get Scootin
                </button>
              </li>
            </ul>
          </div>
          <ul
            className={
              nav
                ? "fixed top-0 left-0 z-[50] bg-[#333A44] font-bold text-[18px] items-center duration-300 md:hidden"
                : "fixed top-0 left-[-100%] z-[50] bg-[#333A44] font-bold text-[18px] items-center duration-300 md:hidden"
            }
          >
            <li>
              <img className="hidden md:block" src={Logo} alt="logo" />
            </li>

            <button>
              <FaTimes
                color="orange"
                className="absolute top-[84px] right-4 cursor-pointer z-[100] md:hidden"
              />
            </button>
            <div className="space-y-6 md:space-y-0 md:space-x-6 md:flex mt-[64px] md:mt-[0px] ml-8 text-white md:text-[#939CAA] text-[15px] items-center h-screen md:h-full">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/locations">Location</NavLink>
              </li>
              <li>
                <NavLink to="/careers">Careers</NavLink>
              </li>
              <li>
                <button className="mt-[330px] md:mt-[0px] bg-yellow-500 mr-[32px] md:mr-[0px] py-3.5 px-10 text-white font-bold text-[15px]">
                  Get Scootin
                </button>
              </li>
            </div>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </>
  );
}
