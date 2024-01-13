import Logo from "../assets/TransparentLogo.png";
import Clouds from "../assets/Clouds.jpg";

const Header = () => {
  const waveStyles = {
    backgroundImage: `url(${Clouds})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="relative">
      <div
        className="flex justify-center items-center flex-col py-12 gap-8"
        style={waveStyles}
      >
        <img className="mx-auto px-5" src={Logo} alt="JMJ Retirement Logo" />
        <h1 className="text-center px-5 text-2xl md:text-3xl lg:text-4xl text-logoBlue">
          We Help Companies Build Great Retirement Plans
        </h1>
      </div>
    </div>
  );
};

export default Header;
