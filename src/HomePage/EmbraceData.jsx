import CompassBlue from "../assets/newSmallCompass.png";

const EmbraceData = () => {
  return (
    <div>
      <div className="pb-6 sm:pb-12 max-w-5xl mx-auto px-5">
        <p className="text-slate-500 text-lg sm:text-xl pb-5">
          What Helps Make a Great Retirement Plan?
        </p>
        <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl pb-6 sm:pb-8">
          Data-Driven Progress, Targeted Enhancements
        </h1>
        <div className="flex items-center sm:items-start flex-col sm:flex-row gap-6 sm:gap-8">
          <p className="text-base sm:text-lg">
            JMJ Retirement encourages a proactive embrace of reporting and
            analytics as the compass for plan success and continuous
            improvement. Our Plan Review serves as a comprehensive “report
            card,” detailing your retirement plan’s multifaceted aspects and,
            most importantly, providing a clear metric for tracking strides
            toward excellence.<br></br>
            <br></br>
            Central to our Plan Reviews is the assessment of employee
            interaction with the plan—vital in gauging our effectiveness in
            aiding your employees on their journey to better retirement
            outcomes.
          </p>
          <img className="w-32 sm:w-36" src={CompassBlue} alt="Compass" />
        </div>
      </div>
    </div>
  );
};

export default EmbraceData;
