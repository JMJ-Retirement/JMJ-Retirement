import Wheel from "../assets/newWheel.png";

const GreatPlan = () => {
  return (
    <div>
      <div className="mt-section max-w-5xl mx-auto px-5 lg:px-0">
        <div className="flex items-center sm:items-start flex-col sm:flex-row gap-6 sm:gap-8">
          <div>
            <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl text-center sm:text-left mb-paragraph">
              Retirement Plan Excellence
            </h1>
            {/* <div className="flex items-center sm:items-start flex-col sm:flex-row gap-6 sm:gap-8"> */}
            <div className="flex flex-col gap-paragraph text-base sm:text-lg">
              <p className=" text-slate-600 italic">
                At JMJ Retirement Solutions, we believe a great retirement plan
                ensures successful futures for employees. Our commitment is to
                provide plans that are easy to manage, compliant, and
                cost-effective, with personal service with one point of contact
                for all your retirement plan needs.
              </p>
              <h4 className="font-semibold text-lg sm:text-xl">
                Let's Build Your Ideal Retirement Plan Together
              </h4>
            </div>
          </div>
          <img className="w-40" src={Wheel} alt="wheel" />
        </div>
      </div>
    </div>
  );
};

export default GreatPlan;
