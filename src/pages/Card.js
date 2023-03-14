import Locate from "../assets/locate.svg";
import Pick from "../assets/pick.svg";
import Ride from "../assets/ride.svg";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Card() {
  return (
    <div className="px-8 mt-28 md:w-[573px] md:mx-auto text-[#495567] lg:flex lg:justify-between lg:w-full lg:px-[165px] lg:mt-[160px] lg:w-[1110px] lg:gap-[30px] lg:pl-[0px]">
      <AnimationOnScroll animateIn="animate__fadeInLeft">
        <div className="flex flex-col md:flex-row md:justify-start md:text-start justify-center items-center text-center mb-12 lg:flex-col">
          <img
            className="md:w-[96px] lg:self-start"
            src={Locate}
            alt="locate"
          />
          <div className="md:w-[398px] md:ml-[79px] lg:ml-[0px] lg:w-[350px]">
            <h2 className="text-xl md:text-[24px] font-bold my-6">
              Locate with app
            </h2>
            <p className="font-normal text-slate-400 leading-[25px]">
              Use the app to find the nearest scooter to you. We are
              continuously placing scooters in the areas with most demand, so
              one should never be too far away.
            </p>
          </div>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <div className="flex flex-col md:flex-row md:justify-start md:text-start justify-center items-center text-center mb-12 lg:flex-col">
          <img className="md:w-[96px] lg:self-start" src={Pick} alt="locate" />
          <div className="md:w-[398px] md:ml-[79px] lg:ml-[0px] lg:w-[350px]">
            <h2 className="text-xl md:text-[24px] font-bold my-6">
              Pick your scooter
            </h2>
            <p className="font-normal text-slate-400 leading-[25px]">
              We show the most important info for the scooters closest to you.
              So you know how much charge they have left and can see roughly how
              much it will cost.
            </p>
          </div>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInRight">
        <div className="flex flex-col md:flex-row md:justify-start md:text-start justify-center items-center text-center mb-12 lg:flex-col">
          <img className="md:w-[96px] lg:self-start" src={Ride} alt="locate" />
          <div className="md:w-[398px] md:ml-[79px] lg:ml-[0px] lg:w-[350px]">
            <h2 className="text-xl md:text-[24px] font-bold my-6">
              Enjoy the ride
            </h2>
            <p className="font-normal text-slate-400 leading-[25px]">
              Scan the QR code and the bike will unlock. Retract the cable lock,
              put on a helmet, and you're off! Always lock bikes away from
              walkways and accessibility ramps.
            </p>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
}
export default Card;
