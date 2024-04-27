import Trees from "../assets/ocean.jpg";
import Demograghics from "../assets/Demographics-chart.png";

const Outcomes = () => {
  const TreePic = {
    backgroundImage: `url(${Trees})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center 50%",
  };

  return (
    <div className="pt-6 sm:pt-12 pb-4">
      <div className="flex flex-col">
        <img
          className="w-4/5 lg:w-auto outline max-w-5xl mx-auto z-10"
          src={Demograghics}
          alt="Fee Benchmark"
        />
        <p className="max-w-5xl mx-auto z-10 bg-[#73a6d2] p-5 mt-8 sm:text-xl text-base text-white italic bg-opacity-80">
          As fiduciaries, we are contractually and legally obligated to serve in
          the best interest of our clients, with no conflicts of interest.
        </p>
        <div
          className="h-[300px] mt-[-250px] sm:h-[400px] md:h-[600px] sm:mt-[-300px] md:mt-[-500px] z-0 md:bg-fixed"
          style={TreePic}
        ></div>
      </div>
    </div>
  );
};

export default Outcomes;
