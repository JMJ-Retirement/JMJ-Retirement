import Video from "../assets/sailJMJ.mp4";

const Header = () => {
  return (
    <div className="relative border-b-4 border-b-logoGold">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover lg:mt-[-100px] xl:mt-[-200px]"
      >
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="bg-[#d5e1e2] h-24 sm:h-32 w-full flex items-center justify-center">
        <h3 className="font-semibold text-[#706e63] text-sm sm:text-base md:text-2xl lg:text-3xl text-center px-5 sm:px-0">
          We Help Businesses Build and Manage Great Retirement Plans
        </h3>
      </div>
    </div>
  );
};

export default Header;
