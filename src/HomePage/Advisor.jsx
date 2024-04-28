import Trees from "../assets/sail.jpg";
import Fiduciary from "../assets/Fiduciary-chart.png";

const Advisor = () => {
  const TreePic = {
    backgroundImage: `url(${Trees})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="mt-section">
      <div className="mb-paragraph max-w-5xl mx-auto px-5 lg:px-0">
        <p className=" text-slate-500 text-lg sm:text-xl mb-paragraph">
          What Helps Make a Great Retirement Plan?
        </p>
        <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl mb-paragraph">
          Lean on your advisor to help reduce the fiduciary liability you face
          with regard to compliance testing and selecting, monitoring and
          managing plan investments.
        </h1>
        <p className="text-base sm:text-lg">
          Depend on JMJ Retirement to mitigate fiduciary risks associated with
          the selection, oversight, and administration of plan investments. As a
          3(21) and 3(38) fiduciary, we shoulder the responsibility of
          meticulously researching, choosing, and supervising funds, making
          adjustments as needed to refine your plan’s portfolio. We distinguish
          our comprehensive fiduciary services from those of non-fiduciary
          brokers or salespeople, ensuring you receive dedicated expertise and
          support. We go above and beyond most advisors by actually assisting
          with the compliance test and taking as much of that process off your
          hands.
        </p>
      </div>
      <div className="flex flex-col">
        <img
          className="w-4/5 lg:w-auto outline max-w-5xl mx-auto z-10"
          src={Fiduciary}
          alt="Fee Benchmark"
        />
        <p className="max-w-5xl mx-auto z-10 bg-[#001746] p-5 mt-8 sm:text-xl text-base text-white italic bg-opacity-80">
          As fiduciaries, we are contractually and legally obligated to serve in
          the best interest of our clients, with no conflicts of interest.
        </p>
        <div
          className="h-[250px] mt-[-200px] z-0 sm:h-[400px] sm:mt-[-300px] md:bg-fixed"
          style={TreePic}
        ></div>
      </div>
    </div>
  );
};

export default Advisor;
