import Trees from "../assets/sunset.jpg";
import FeeBenchmarking from "../assets/Fee-Benchmarking-Analysis.png";

const FeeBenchmark = () => {
  const TreePic = {
    backgroundImage: `url(${Trees})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center 50%",
  };

  return (
    <div className="mt-section">
      <h1 className="text-center sm:text-left font-semibold max-w-5xl text-3xl mb-paragraph mx-auto px-5 lg:px-0">
        FEE BENCHMARKING ANALYSIS
      </h1>
      <div className="flex flex-col">
        <img
          className="w-4/5 lg:w-auto outline max-w-5xl mx-auto z-10"
          src={FeeBenchmarking}
          alt="Fee Benchmark"
        />
        <p className="max-w-5xl mx-auto z-10 bg-black p-5 mt-8 sm:text-xl text-base text-white italic bg-opacity-80">
          As fiduciaries, we are contractually and legally obligated to serve in
          the best interest of our clients, with no conflicts of interest.
        </p>
        <div
          className="h-[300px] mt-[-250px] sm:h-[400px] md:h-[500px] sm:mt-[-300px] md:mt-[-400px] z-0 md:bg-fixed"
          style={TreePic}
        ></div>
      </div>
    </div>
  );
};

export default FeeBenchmark;
