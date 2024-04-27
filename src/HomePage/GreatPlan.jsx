import Wheel from "../assets/newWheel.png";

const GreatPlan = () => {
  return (
    <div>
      <div className="sm:pt-12 pb-4 max-w-5xl mx-auto px-5 lg:px-0">
        <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl text-center sm:text-left pb-6 sm:pb-12">
          Retirement Plan Excellence
        </h1>
        <div className="flex items-center sm:items-start flex-col sm:flex-row gap-6 sm:gap-8 text-base sm:text-lg">
          <div className="flex flex-col gap-6 sm:gap-8 sm:pr-5">
            <p className=" text-slate-600 italic">
              At JMJ Retirement Solutions, we believe a great retirement plan
              ensures successful futures for employees. Our commitment is to
              provide plans that are easy to manage, compliant, and
              cost-effective, meeting our clients’ needs with precision and
              care.
            </p>
            <h4 className=" font-semibold text-lg sm:text-xl">
              Let's Build Your Ideal Retirement Plan Together
            </h4>
          </div>
          <img className="w-40" src={Wheel} alt="setting sail" />
        </div>
      </div>
    </div>
  );
};

export default GreatPlan;
