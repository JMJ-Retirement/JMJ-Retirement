import treesGraphic from "../assets/trees-graphic-icon.png";
import pottedPlant from "../assets/potted-plant-icon.png";
import apple from "../assets/apple-icon.png";

const Trust = () => {
  return (
    <div>
      <div className="pb-12 max-w-5xl mx-auto">
        <p className=" text-slate-500 text-xl pb-5">
          What Helps Make a Great Retirement Plan?
        </p>
        <h1 className="font-semibold text-4xl pb-8">
          Trust your advisor to create an investment line-up that checks all the
          boxes, keeps you compliant, and empowers your employees to make good
          choices.
        </h1>
        <p className="text-lg">
          When it comes to selecting your plan’s investment line-up, OnTrack
          401(k) adheres to the old adage less is more.
        </p>
        <p className="mb-16">Your employees:</p>
        <div className="flex flex-row gap-10">
          <div className="w-1/3">
            <img className="h-36 mx-auto mb-5" src={treesGraphic} alt="" />
            <p className="text-center">
              Won’t be overwhelmed by the number of available investment options
            </p>
          </div>
          <div className="w-1/3">
            <img className="h-36 mx-auto mb-5" src={pottedPlant} alt="" />
            <p className="text-center">
              Will have access to low- cost, institutional share class
              investment options that represent the essential asset classes
              needed to meet ERISA 404(c) requirements.
            </p>
          </div>
          <div className="w-1/3">
            <img className="h-36 mx-auto mb-5" src={apple} alt="" />
            <p className="text-center">
              Can take advantage of investment options that make the selection
              process simpler and easier (such as target-date funds or other
              Qualified Default Investment Alternatives).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trust;
