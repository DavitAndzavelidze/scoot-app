import Blog1 from "../assets/blog1.png";
import Blog2 from "../assets/blog2.png";
import Blog3 from "../assets/blog3.png";

function Blog() {
  return (
    <div className="px-8 md:px-[97px] lg:px-[165px] lg:mt-[200px]">
      <div className="flex flex-col justify-center items-center text-center my-[120px] lg:flex-row lg:flex-row-reverse lg:gap-[220px]">
        <img className="md:w-[445px]" src={Blog1} alt="blog1" />
        <div className="lg:text-start lg:w-[480px]">
          <h2 className="mt-14 text-3xl md:text-[48px] md:leading-[48px] text-[#495567] font-bold lg:mt-[0px]">
            Easy to use riding telemetry
          </h2>
          <p className="my-8 text-[#939CAA] leading-[25px]">
            The Scoot app is available with riding telemetry. This means it can
            show you your average speed, how long you've been using the scooter,
            your traveling distance, and many more things all in an easy to use
            app.
          </p>
          <button className="bg-[#FCB72B] lg:hover:text-[#FCB72B] lg:border-[3px] border-[#FCB72B] lg:hover:bg-transparent text-white py-3.5 px-[44px] font-bold">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center my-[120px] lg:flex-row lg:gap-[220px] lg:my-[160px]">
        <img className="md:w-[445px]" src={Blog2} alt="blog1" />
        <div className="lg:text-start lg:w-[480px]">
          <h2 className="mt-14 text-3xl md:text-[48px] md:leading-[48px] text-[#495567] font-bold lg:mt-[0px]">
            Coming to a city near you
          </h2>
          <p className="my-8 text-[#939CAA] leading-[25px]">
            Scoot is available in 4 major cities so far. We're expanding
            rapidly, so be sure to let us know if you want to see us in your
            hometown. We're aiming to let our scooters loose on 23 cities over
            the coming year.
          </p>
          <button className="bg-[#FCB72B] lg:hover:text-[#FCB72B] lg:border-[3px] border-[#FCB72B] lg:hover:bg-transparent text-white py-3.5 px-[44px] font-bold">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center my-[120px] lg:flex-row lg:flex-row-reverse lg:gap-[220px] lg:mb-[200px]">
        <img className="md:w-[445px]" src={Blog3} alt="blog1" />
        <div className="lg:text-start lg:w-[480px]">
          <h2 className="mt-14 text-3xl md:text-[48px] md:leading-[48px] text-[#495567] font-bold lg:mt-[0px]">
            Zero hassle payments
          </h2>
          <p className="my-8 text-[#939CAA] leading-[25px]">
            Our payment is as easy as one two three. We accept most credit cards
            and debit cards. You can also link your PayPal account inside the
            app. Need to pay later? No worries! You can defer payment for up to
            a month.
          </p>
          <button className="bg-[#FCB72B] lg:hover:text-[#FCB72B] lg:border-[3px] border-[#FCB72B] lg:hover:bg-transparent text-white py-3.5 px-[44px] font-bold">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
export default Blog;
