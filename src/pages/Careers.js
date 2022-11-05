import CareersImg from "../assets/Careers.jpg";
import CareersBlogImg from "../assets/careers-img1.png";
import Tech from "../assets/about-pic3.png";
import Integrity from "../assets/about-pic4.png";
import Community from "../assets/about-pic5.png";

const roleInfo = [
  {
    role: "General Manager",
    location: "Jakarta, Indonesia",
  },
  {
    role: "UI/UX Designer",
    location: "Yokohama, Japan",
  },
  {
    role: "Blog Content Copywriter",
    location: "New York, United States",
  },
  {
    role: "Graphic Designer",
    location: "New York, United States",
  },
  {
    role: "Fleet Supervisor",
    location: "Jakarta, Indonesia",
  },
  {
    role: "UX Analyst",
    location: "London, United Kingdom",
  },
];

export default function Careers() {
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="relative mt-[64px] lg:mt-[96px]">
          <img
            className="w-full h-[160px] lg:h-[200px] object-cover object-center"
            src={CareersImg}
            alt="CareersImg"
          />
          <h2 className="absolute top-0 left-0 flex justify-center items-center md:flex-col md:items-start md:ml-[97px] md:text-[56px] w-full h-full text-white text-[40px] font-bold">
            Careers
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center text-center mt-[72px] mb-[120px] mx-8">
          <div className="flex flex-col justify-center items-center text-center lg:flex-row-reverse lg:w-[1110px] lg:justify-between">
            <img
              className="md:w-[445px]"
              src={CareersBlogImg}
              alt="CareersBlogImg"
            />
            <div className="lg:text-left lg:w-[445px]">
              <h2 className="mt-[56px] mb-[32px] text-[#495567] font-bold text-[32px] md:text-[48px]">
                Care to join our mission?
              </h2>
              <p className="mb-[32px] text-[#939CAA] md:w-[573px] md:mx-auto lg:w-[445px]">
                We're always looking for ambitious individuals to help us on our
                journey. If you're passionate about our mission to provide
                clean, accessible transport to improve urban living we want to
                hear from you!
              </p>
              <button className="bg-[#FCB72B] lg:hover:text-[#FCB72B] lg:border-[3px] border-[#FCB72B] lg:hover:bg-transparent py-3.5 px-10 text-white font-bold mb-[120px]">
                Say Hello
              </button>
            </div>
          </div>
          {/* Value */}
          <h2 className=" mb-[64px] font-bold text-[32px] text-[#495567] md:text-[48px]">
            Why join us?
          </h2>
          <div className="lg:flex lg:mt-[48px] lg:gap-[50px]">
            <div className="flex flex-col items-center lg:w-[350px]">
              <img src={Tech} alt="tech" />
              <h2 className="mt-[16px] mb-[32px] font-bold text-[#495567] md:text-[24px] text-[32px]">
                Our tech
              </h2>
              <p className="text-[#939CAA] mb-[56px] md:w-[457px] lg:w-[350px] lg:mx-auto">
                We're using cutting edge technology to drive accessible urban
                transportation forward. Our fully electric scooters are a joy to
                ride!
              </p>
            </div>
            <div className="flex flex-col items-center lg:w-[350px]">
              <img src={Integrity} alt="Integrity" />
              <h2 className="mt-[16px] mb-[32px] font-bold text-[#495567] md:text-[24px] text-[32px]">
                Our integrity
              </h2>
              <p className="text-[#939CAA] mb-[56px] md:w-[457px] lg:w-[350px] lg:mx-auto">
                We are fully committed to deliver a great yet safe, sustainable
                micro-mobility experience in every city we serve.
              </p>
            </div>
            <div className="flex flex-col items-center lg:w-[350px]">
              <img src={Community} alt="Community" />
              <h2 className="mt-[16px] mb-[32px] font-bold text-[#495567] md:text-[24px] text-[32px]">
                Our community
              </h2>
              <p className="text-[#939CAA] mb-[56px] md:w-[457px] lg:w-[350px] lg:mx-auto">
                We support every community we serve. All workers are paid a
                living wage based on their location and are Scoot employees.
              </p>
            </div>
          </div>
        </div>
        <div>
          {roleInfo.map((info, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center text-center md:flex-row md:justify-between md:px-[44px] bg-[#F2F5F9] mx-[32px] pt-[36px] pb-[32px] mb-[16px] lg:w-[1110px] lg:mx-auto"
            >
              <div className="lg:text-left">
                <h2 className="font-bold text-[18px]">{info.role}</h2>
                <h3 className="mb-[16px] mt-[4px]">{info.location}</h3>
              </div>
              <button className="bg-[#FCB72B] lg:hover:text-[#FCB72B] lg:border-[3px] border-[#FCB72B] lg:hover:bg-transparent py-3.5 px-10 text-white font-bold w-[247px]">
                Apply
              </button>
            </div>
          ))}
        </div>
        {/* <div>
            <h2 className="font-bold text-[18px]">jkjsdsd sdsd</h2>
            <h3 className="mb-[16px] mt-[4px]">sdsdsdsds dsds</h3>
          </div> */}
      </div>
    </>
  );
}
