import Wheel from "../assets/wheel.png";

const GreatPlan = () => {
  return (
    <div>
      <div className="sm:pt-12 pb-4 max-w-5xl mx-auto px-5 lg:px-0">
        <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl text-center pb-6 sm:pb-12">
          What Helps Make a Great Retirement Plan?
        </h1>
        <div className="flex items-center sm:items-start flex-col sm:flex-row gap-6 sm:gap-8 text-base sm:text-lg">
          <div className="flex flex-col gap-6 sm:gap-8 sm:pr-5">
            <p className=" text-slate-600 italic">
              At its core, a great retirement plan helps employees create
              successful retirement outcomes. Retirement plan greatness also
              means continually striving to make the plan easy to manage,
              compliant, and cost effective for our clients.
            </p>
            <h4 className=" font-semibold text-lg sm:text-xl">
              Are you ready to start building a great retirement plan together?
            </h4>
          </div>
          <img className="w-60" src={Wheel} alt="setting sail" />
        </div>
      </div>
    </div>
  );
};

export default GreatPlan;
