import Trees from "../assets/Trees.png";
import Demograghics from "../assets/Demographics-chart.png";

const Outcomes = () => {
  const TreePic = {
    backgroundImage: `url(${Trees})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  };

  return (
    <div className="pt-12 pb-4">
      <div className="flex flex-col">
        <img
          className="outline max-w-5xl mx-auto z-10"
          src={Demograghics}
          alt="Fee Benchmark"
        />
        <div className="h-[600px] mt-[-300px] z-0" style={TreePic}></div>
      </div>
    </div>
  );
};

export default Outcomes;
