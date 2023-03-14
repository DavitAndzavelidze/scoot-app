import DesktopBg from "../assets/hero-bg.jpg";

function Header() {
  return (
    <>
      <div className="relative mt-[64px] lg:mt-[96px]">
        <img
          className="w-full h-full object-cover min-h-screen object-right"
          src={DesktopBg}
          alt="hero"
        />
        <div className="absolute top-0 left-0 flex flex-col justify-center items-center text-center h-full px-8 md:px-[97px] lg:px-[165px] lg:translate-y-[-4rem]">
          <h1 className="text-[40px] md:text-[56px] lg:text-[56px] font-bold text-white mb-6 lg:w-[600px] lg:self-start lg:text-start animate__fadeInRight">
            Scooter sharing made simple
          </h1>
          <p className="mb-9 text-white text-[15px] leading-[25px] lg:w-[405px] lg:text-start animate__fadeInLeft">
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you're away!
          </p>
          <div className="lg:w-[405px] lg:flex">
            <button className="bg-[#FCB72B] lg:hover:text-[#FCB72B] lg:border-[3px] border-[#FCB72B] lg:hover:bg-transparent py-3.5 px-10 text-white font-bold lg:self-start">
              Get Scootin
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
