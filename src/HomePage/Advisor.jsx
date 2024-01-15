import Trees from "../assets/Trees.png";
import Fiduciary from "../assets/Fiduciary-chart.png";

const Advisor = () => {
  const TreePic = {
    backgroundImage: `url(${Trees})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  };

  return (
    <div className="pt-12 pb-4">
      <div className="pb-12 max-w-5xl mx-auto">
        <p className=" text-slate-500 text-xl pb-5">
          What Helps Make a Great Retirement Plan?
        </p>
        <h1 className="font-semibold text-4xl pb-8">
          Lean on your advisor to help reduce the fiduciary liability you face
          with regard to selecting, monitoring and managing plan investments.
        </h1>
        <p className="text-lg">
          As a 3(21) or 3(38) fiduciary, we help plan sponsors by taking on the
          heavy lifting of researching, selecting, monitoring and—as
          necessary—adding or replacing funds in your plan’s line-up. Below is
          an overview of the key differences between a non-fiduciary broker or
          salesperson versus our 3(21) and 3(38) service models:
        </p>
      </div>
      <div className="flex flex-col">
        <img
          className="w-4/5 sm:w-auto outline max-w-5xl mx-auto z-10"
          src={Fiduciary}
          alt="Fee Benchmark"
        />
        <p className="max-w-5xl mx-auto z-10 bg-blue-400 p-5 mt-8 sm:text-xl text-base text-white italic">
          As fiduciaries, we are contractually and legally obligated to serve in
          the best interest of our clients, with no conflicts of interest.
        </p>
        <div
          className="h-[250px] mt-[-200px] z-0 sm:h-[400px] sm:mt-[-300px]"
          style={TreePic}
        ></div>
      </div>
    </div>
  );
};

export default Advisor;
