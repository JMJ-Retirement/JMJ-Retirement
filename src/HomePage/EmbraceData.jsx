import CompassBlue from "../assets/newSmallCompass.png";

const EmbraceData = () => {
  return (
    <div>
      <div className="mt-section max-w-5xl mx-auto px-5 lg:px-0">
        <p className="text-slate-500 text-lg sm:text-xl mb-paragraph">
          What Helps Make a Great Retirement Plan?
        </p>
        <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl mb-paragraph">
          Data-Driven Progress, Targeted Enhancements
        </h1>
        <div className="flex items-center sm:items-start flex-col sm:flex-row gap-paragraph">
          <p className="text-base sm:text-lg">
            JMJ Retirement embraces data and analytics as the compass for your
            plan’s success and continuous improvement. Our Plan Review serves as
            a comprehensive “report card,” detailing your retirement plan’s
            health and, most importantly, providing clear metrics for tracking
            strides forward.<br></br>
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
