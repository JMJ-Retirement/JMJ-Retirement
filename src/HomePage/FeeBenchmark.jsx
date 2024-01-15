import Trees from "../assets/Trees.png";
import FeeBenchmarking from "../assets/Fee-Benchmarking-Analysis.png";

const FeeBenchmark = () => {
  const TreePic = {
    backgroundImage: `url(${Trees})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  };

  return (
    <div className="pt-12 pb-4">
      <h1 className="text-center sm:text-left font-semibold max-w-5xl text-3xl pb-10 sm:pb-12 mx-auto">
        FEE BENCHMARKING ANALYSIS
      </h1>
      <div className="flex flex-col">
        <img
          className=" w-4/5 sm:w-auto outline max-w-5xl mx-auto z-10"
          src={FeeBenchmarking}
          alt="Fee Benchmark"
        />
        <div
          className="h-[150px] mt-[-75px] sm:h-[600px] sm:mt-[-300px] z-0"
          style={TreePic}
        ></div>
      </div>
    </div>
  );
};

export default FeeBenchmark;
