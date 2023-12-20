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
      <h1 className="font-semibold max-w-5xl text-3xl pb-12 mx-auto">
        FEE BENCHMARKING ANALYSIS
      </h1>
      <div className="flex flex-col">
        <img
          className="outline max-w-5xl mx-auto z-10"
          src={FeeBenchmarking}
          alt="Fee Benchmark"
        />
        <div className="h-[600px] mt-[-300px] z-0" style={TreePic}></div>
      </div>
    </div>
  );
};

export default FeeBenchmark;
