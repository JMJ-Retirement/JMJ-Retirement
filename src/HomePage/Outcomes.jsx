// import Ocean from "../assets/ocean.jpg";
import Demograghics from "../assets/Demographics-chart.png";

const Outcomes = ({ Ocean }) => {
  const OceanPic = {
    backgroundImage: `url(${Ocean})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center 50%",
  };

  return (
    <div className="mt-paragraph">
      <div className="flex flex-col">
        <img
          className="w-4/5 lg:w-auto outline max-w-5xl mx-auto z-10"
          src={Demograghics}
          alt="Fee Benchmark"
        />
        <p className="max-w-5xl mx-auto z-10 bg-[#73a6d2] p-5 mt-8 sm:text-xl text-base text-white italic bg-opacity-80">
          JMJ Retirement advocates for embracing reporting and analytics
          proactively to guide plan success and ongoing enhancement.
        </p>
        <div
          className="h-[300px] mt-[-250px] sm:h-[400px] md:h-[600px] sm:mt-[-300px] md:mt-[-500px] z-0 md:bg-fixed"
          style={OceanPic}
        ></div>
      </div>
    </div>
  );
};

export default Outcomes;
