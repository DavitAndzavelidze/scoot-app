import LocationsBg from "../assets/Careers.jpg";
import mapMobile from "../assets/map.png";
import Map from "../assets/mapMain.png";

const locations = ["New York", "London", "Jakarta", "Yokohama"];

export default function Locations() {
  return (
    <div className="overflow-x-hidden">
      <div className="relative mt-[64px] lg:mt-[96px]">
        <img
          className="w-full h-[160px] lg:h-[200px] object-cover object-center"
          src={LocationsBg}
          alt="LocationsBg"
        />
        <h2 className="absolute top-0 left-0 flex justify-center items-center md:flex-col md:items-start md:ml-[97px] md:text-[56px] w-full h-full text-white text-[40px] font-bold">
          Locations
        </h2>
      </div>
      <div className="flex justify-center flex-col items-center mb-[40px] mt-[72px]">
        <img className="md:hidden" src={mapMobile} alt="map" />
        <img
          className="hidden md:block md:w-[689px] lg:w-[1110px]"
          src={Map}
          alt="mainMap"
        />
        <div className="grid gap-4 mt-[40px] md:hidden">
          {locations.map((location) => (
            <h2
              key={location}
              className="px-[100px] py-[22px] bg-amber-400/[.15]"
            >
              {location}
            </h2>
          ))}
        </div>
        {/* <div className="grid gap-4 mt-[40px] md:hidden">
          <h2 className="px-[100px] py-[22px] bg-amber-400/[.15]">New York</h2>
          <h2 className="px-[100px] py-[22px] bg-amber-400/[.15]">London</h2>
          <h2 className="px-[100px] py-[22px] bg-amber-400/[.15]">Jakarta</h2>
          <h2 className="px-[100px] py-[22px] bg-amber-400/[.15]">Yokohama</h2>
        </div> */}
        <div className="flex justify-center flex-col lg:flex-row lg:w-full lg:gap-[30px] items-center text-center mt-[72px] w-[311px] md:w-[573px] mb-[52px]">
          <h2 className="text-[32px] md:text-[48px] font-bold text-[#495567] lg:w-[351px] lg:text-left">
            Your City Not Listed?
          </h2>
          <p className="text-[#939CAA] text-[15px] my-8 lg:w-[445px] lg:text-left">
            If you'd like to see Scoot in your hometown, be sure to let us know.
            We track requests and plan launches based on demand. Feel free to
            message us by clicking the link or messaging us on social.
          </p>
          <button className="bg-[#FCB72B] lg:hover:text-[#FCB72B] lg:border-[3px] border-[#FCB72B] lg:hover:bg-transparent py-3.5 px-10 text-white font-bold lg:ml-[105px]">
            Message Us
          </button>
        </div>
      </div>
    </div>
  );
}
