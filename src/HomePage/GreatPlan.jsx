import Compass from "../assets/compass.png";

const GreatPlan = () => {
  return (
    <div>
      <div className="pt-12 pb-4 max-w-5xl mx-auto">
        <h1 className="font-semibold text-5xl text-center pb-12">
          What Helps Make a Great Retirement Plan?
        </h1>
        <div className="flex flex-row gap-8">
          <div className="flex flex-col gap-8 pr-5">
            <p className=" text-slate-600 italic">
              At its core, a great retirement plan helps employees create
              successful retirement outcomes. Retirement plan greatness also
              means continually striving to make the plan easy to manage,
              compliant, and cost effective for our clients.
            </p>
            <h4 className=" font-semibold text-xl">
              Are you ready to start building a great retirement plan together?
            </h4>
          </div>
          <img className="w-60" src={Compass} alt="compass" />
        </div>
      </div>
    </div>
  );
};

export default GreatPlan;
