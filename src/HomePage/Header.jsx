import Logo from "../assets/TransparentLogo.png";
import Waves from "../assets/Waves.png";

const Header = () => {
  const waveStyles = {
    backgroundImage: `url(${Waves})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="relative">
      <div
        className="flex justify-center items-center flex-col py-12 gap-8"
        style={waveStyles}
      >
        <img src={Logo} alt="JMJ Retirement Logo" />
        <h1 className=" text-4xl text-logoGold">
          We Help Companies Build Great Retirement Plans
        </h1>
      </div>
    </div>
  );
};

export default Header;
