import Retirement from "../assets/retirement.jpg";

const EmbraceData = () => {
  return (
    <div>
      <div className="pb-6 sm:pb-12 max-w-5xl mx-auto px-5">
        <p className="text-slate-500 text-lg sm:text-xl pb-5">
          What Helps Make a Great Retirement Plan?
        </p>
        <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl pb-6 sm:pb-8">
          Embrace plan reporting and data; rely on it to measure plan success
          and identify areas that need improvement.
        </h1>
        <div className="flex items-center sm:items-start flex-col sm:flex-row gap-6 sm:gap-8">
          <p className="text-base sm:text-lg">
            OnTrack’s Plan Review is our “report card”. While it covers many
            details and aspects of your retirement plan, its essential purpose
            is to present you with a way to track your plan’s progress toward
            greatness. A key component of OnTrack 401(k)’s formal Plan Reviews
            is measuring employee engagement with the plan. Are we making
            progress in helping your employees achieve better outcomes?
          </p>
          <img
            className="w-60 border-2 border-black"
            src={Retirement}
            alt="Retirement on a beach"
          />
        </div>
      </div>
    </div>
  );
};

export default EmbraceData;
