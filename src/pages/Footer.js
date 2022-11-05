import logo from "../assets/scootwt.svg";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:pb-[32px] justify-center items-center text-center pt-[64px] md:pt-[35px] md:px-[39px] bg-[#333A44] lg:px-[165px]">
      <img src={logo} alt="logo" />
      <nav className="mt-[41px] mb-[85px] md:mt-[0px] md:mb-[0px] text-[#939CAA] lg:w-full lg:ml-[58px]">
        <ul className="font-bold text-[15px] md:flex md:gap-[32px] lg:justify-self-start lg:cursor-pointer">
          <li className="lg:hover:text-[#FCB72B]">About</li>
          <li className="my-4 md:my-[0px] lg:hover:text-[#FCB72B]">Location</li>
          <li className="lg:hover:text-[#FCB72B]">Careers</li>
        </ul>
      </nav>
      <div className="flex mb-[88px] md:mb-[0px]">
        <AiFillFacebook
          style={{ color: "orange" }}
          size="24px"
          className="lg:cursor-pointer"
          onMouseOver={({ target }) => (target.style.color = "white")}
          onMouseOut={({ target }) => (target.style.color = "orange")}
        />
        <AiOutlineTwitter
          style={{ color: "orange" }}
          size="24px"
          className="mx-6 lg:cursor-pointer"
          onMouseOver={({ target }) => (target.style.color = "white")}
          onMouseOut={({ target }) => (target.style.color = "orange")}
        />
        <AiOutlineInstagram
          style={{ color: "orange" }}
          size="24px"
          className="lg:cursor-pointer"
          onMouseOver={({ target }) => (target.style.color = "white")}
          onMouseOut={({ target }) => (target.style.color = "orange")}
        />
      </div>
    </div>
  );
}
export default Footer;
