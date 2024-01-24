import Video from "../assets/headerVideo.mp4";

const Header = () => {
  return (
    <div className="relative border-b-4 border-b-logoGold">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover lg:mt-[-250px]"
      >
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className=" bg-[#d6e1e2] h-24 sm:h-32 w-full flex items-center justify-center">
        <h3 className="text-logoGold text-sm sm:text-base md:text-3xl">
          We Help Businesses Create Great Retirement Plans
        </h3>
      </div>
    </div>
  );
};

export default Header;
