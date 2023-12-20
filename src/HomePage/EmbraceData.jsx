import Compass from "../assets/compass.png";

const EmbraceData = () => {
  return (
    <div>
      <div className="pb-12 max-w-5xl mx-auto">
        <p className=" text-slate-500 text-xl pb-5">
          What Helps Make a Great Retirement Plan?
        </p>
        <h1 className="font-semibold text-4xl pb-8">
          Embrace plan reporting and data; rely on it to measure plan success
          and identify areas that need improvement.
        </h1>
        <div className="flex flex-row gap-8">
          <p className="text-lg">
            OnTrack’s Plan Review is our “report card”. While it covers many
            details and aspects of your retirement plan, its essential purpose
            is to present you with a way to track your plan’s progress toward
            greatness. A key component of OnTrack 401(k)’s formal Plan Reviews
            is measuring employee engagement with the plan. Are we making
            progress in helping your employees achieve better outcomes?
          </p>
          <img className="w-60" src={Compass} alt="compass" />
        </div>
      </div>
    </div>
  );
};

export default EmbraceData;
