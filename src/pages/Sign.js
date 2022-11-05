import SignBg from "../assets/signbg.png";
import AppleStore from "../assets/appleStore.png";
import GooglePlay from "../assets/googlePlay.png";

function Sign() {
  return (
    <div className="relative">
      <img
        className="w-full h-[320px] md:h-[300px] object-cover object-right"
        src={SignBg}
        alt="signBg"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center lg:justify-between lg:flex-row lg:px-[165px]">
        <h2 className="font-bold text-[32px] md:text-[48px] text-white md:w-[457px] md:mt-[24px] lg:text-start">
          Sign up and Scoot off today
        </h2>
        <div className="flex gap-[13px] mt-[40px] md:mb-[32px]">
          <img className="lg:w-[159px]" src={AppleStore} alt="AppleStore" />
          <img className="lg:w-[159px]" src={GooglePlay} alt="GooglePlay" />
        </div>
      </div>
    </div>
  );
}
export default Sign;
