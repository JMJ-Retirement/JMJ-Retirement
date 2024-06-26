import Video from "../assets/sailJMJ.mp4";
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";
import pin from "../assets/pin.png";
import placeHolder from "../assets/placeholderimg.png";

const Header = () => {
  return (
    <div className="relative">
      <video
        placeholder={placeHolder}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover lg:mt-[-100px] xl:mt-[-200px] xxl:mt-[-320px]"
      >
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="bg-[#aabebe] py-6 w-full flex flex-col items-center justify-center">
        <h3 className="font-semibold text-gray-800 text-sm sm:text-base md:text-2xl lg:text-3xl text-center px-5 sm:px-0">
          We Help Businesses Build and Manage Great Retirement Plans
        </h3>
      </div>
      <div className="bg-[#cbd8d7] py-6 w-full flex flex-col items-center justify-center">
        <p className="text-sm md:text-xl lg:text-2xl font-semibold text-gray-800">
          Schedule a 30 minute meeting at{" "}
          <a
            href="https://calendly.com/jjedynak/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline transition-all text-gray-800 hover:text-gray-600"
          >
            Calendly
          </a>
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-3 bg-[#d5e1e2] py-6 text-sm sm:flex-row sm:gap-7 md:gap-16 md:text-base lg:gap-32">
        <div className="flex items-center gap-2 font-bold">
          <img src={phone} alt="Phone icon" className="w-6" />
          <a href="tel:+16308811757">(630) 881-1757</a>
        </div>
        <div className="flex items-center gap-2 font-bold">
          <img src={email} alt="Email icon" className="w-7" />
          <a href="mailto:jjedynak@jmjretirement.com">
            <p>jjedynak@jmjretirement.com</p>
          </a>
        </div>
        <div className="flex items-center gap-2 font-bold">
          <img src={pin} alt="Map pin icon" className="w-6" />
          <p>Franklin, WI</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
