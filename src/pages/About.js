import AboutBg from "../assets/About.jpg";
import Mobility from "../assets/about-pic1.png";
import Urban from "../assets/about-pic2.png";
import Tech from "../assets/about-pic3.png";
import Integrity from "../assets/about-pic4.png";
import Community from "../assets/about-pic5.png";
import FAQs from "./FAQs";

function About() {
  return (
    <div className="overflow-x-hidden">
      <div className="relative mt-[64px] lg:mt-[96px]">
        <img
          className="w-full h-[160px] lg:h-[200px] object-cover object-center"
          src={AboutBg}
          alt="about-img"
        />
        <h2 className="absolute top-0 left-0 flex justify-center items-center md:flex-col md:items-start md:pl-[97px] md:text-[56px] w-full h-full text-white text-[40px] font-bold ">
          About
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center text-center mt-[72px] md:mt-[144px] mb-[120px] mx-8 ">
        <div className="flex flex-col justify-center items-center text-center ">
          <div className="lg:flex flex flex-col lg:flex-row-reverse lg:text-left lg:gap-[220px] items-center lg:mb-[120px]">
            <img className="md:w-[445px]" src={Mobility} alt="mobility" />
            <div className="md:w-[573px]">
              <h2 className="mt-[56px] mb-[32px] text-[#495567] font-bold text-[32px] md:text-[48px]">
                Mobility for the digital era
              </h2>
              <p className="mb-[120px] text-[#939CAA]">
                Getting around should be simple (and even fun!) for everyone. We
                embrace technology to provide low cost, smart access to scooters
                at your fingertips.
              </p>
            </div>
          </div>
          <div className="lg:flex flex flex-col lg:flex-row lg:text-left lg:gap-[220px] items-center">
            <img className="md:w-[445px]" src={Urban} alt="urban" />
            <div className="md:w-[573px]">
              <h2 className="mt-[56px] mb-[32px] font-bold text-[#495567] text-[32px] md:text-[48px]">
                Better urban living
              </h2>
              <p className="text-[#939CAA]">
                We're helping connect cities and bring people closer together.
                Our scooters are also fully-electric and we offset the minimal
                carbon footprint for each ride.
              </p>
            </div>
          </div>
        </div>
        {/* Value */}
        <h2 className="mt-[120px] md:mt-[120px] mb-[32px] md:mb-[50px] font-bold text-[32px] md:text-[48px] text-[#495567]">
          Our values
        </h2>
        {/* First Card */}
        <div className="lg:flex lg:mt-[48px] lg:gap-[50px]">
          <div className="flex flex-col items-center lg:w-[350px]">
            <img src={Tech} alt="tech" />
            <div className="md:w-[457px]">
              <h2 className="mt-[56px] mb-[32px] font-bold text-[#495567] text-[32px] md:text-[24px]">
                Our tech
              </h2>
              <p className="text-[#939CAA] mb-[56px] lg:w-[350px] lg:mx-auto">
                We're using cutting edge technology to drive accessible urban
                transportation forward. Our fully electric scooters are a joy to
                ride!
              </p>
            </div>
          </div>
          {/* Second Card */}
          <div className="flex flex-col items-center lg:w-[350px]">
            <img src={Integrity} alt="Integrity" />
            <div className="md:w-[457px]">
              <h2 className="mt-[56px] mb-[32px] font-bold text-[#495567] text-[32px] md:text-[24px]">
                Our integrity
              </h2>
              <p className="text-[#939CAA] mb-[56px] lg:w-[350px] lg:mx-auto">
                We are fully committed to deliver a great yet safe, sustainable
                micro-mobility experience in every city we serve.
              </p>
            </div>
          </div>
          {/* Third Card */}
          <div className="flex flex-col items-center lg:w-[350px]">
            <img src={Community} alt="Community" />
            <div className="md:w-[457px]">
              <h2 className="mt-[56px] mb-[32px] font-bold text-[#495567] text-[32px] md:text-[24px]">
                Our community
              </h2>
              <p className="text-[#939CAA] mb-[56px] lg:w-[350px] lg:mx-auto">
                We support every community we serve. All workers are paid a
                living wage based on their location and are Scoot employees.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FAQs />
    </div>
  );
}
export default About;
