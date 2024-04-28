import Anchor from "../assets/anchor.png";
import BlueWheel from "../assets/blueWheel.png";
import SeaShell from "../assets/seaShell.png";

const Trust = () => {
  return (
    <div>
      <div className="mt-section max-w-5xl mx-auto px-5 lg:px-0">
        <p className=" text-slate-500 text-lg sm:text-xl mb-paragraph">
          What Helps Make a Great Retirement Plan?
        </p>
        <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl mb-paragraph">
          Trust your advisor to create an investment line-up that checks all the
          boxes, keeps you compliant, and empowers your employees to make good
          choices.
        </h1>
        <p className="text-base sm:text-lg mb-paragraph">
          When it comes to selecting your plan’s investment line-up, JMJ
          Retirement adheres to the old adage less is more.
        </p>
        <p className="mb-paragraph text-base sm:text-lg">Your employees:</p>
        <div className="flex flex-col sm:flex-row gap-10">
          <div className="sm:w-1/3">
            <img
              className="h-24 sm:h-36 mx-auto mb-5"
              src={Anchor}
              alt="Anchor"
            />
            <p className="text-center">
              Won’t be overwhelmed by the number of available investment options
            </p>
          </div>
          <div className="sm:w-1/3">
            <img
              className="h-24 sm:h-36 mx-auto mb-5"
              src={BlueWheel}
              alt="wheel"
            />
            <p className="text-center">
              Will have access to low- cost, institutional share class
              investment options that represent the essential asset classes
              needed to meet ERISA 404(c) requirements.
            </p>
          </div>
          <div className="sm:w-1/3">
            <img
              className="h-24 sm:h-36 mx-auto mb-5"
              src={SeaShell}
              alt="Sea shell"
            />
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
