import Trees from "../assets/Trees.png";
import Demograghics from "../assets/Demographics-chart.png";

const Outcomes = () => {
  const TreePic = {
    backgroundImage: `url(${Trees})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="pt-6 sm:pt-12 pb-4">
      <div className="flex flex-col">
        <img
          className="w-4/5 sm:w-auto outline max-w-5xl mx-auto z-10"
          src={Demograghics}
          alt="Fee Benchmark"
        />
        <div
          className="h-[150px] mt-[-75px] sm:h-[600px] sm:mt-[-300px] z-0 md:bg-fixed"
          style={TreePic}
        ></div>
      </div>
    </div>
  );
};

export default Outcomes;
