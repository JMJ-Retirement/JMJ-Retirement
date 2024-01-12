import Compass from "../assets/compass.png";

const Leverage = () => {
  return (
    <div>
      <div className="pt-12 pb-4 max-w-5xl mx-auto">
        <h4 className="text-slate-500 text-xl pb-5">
          What Helps Make a Great Retirement Plan?
        </h4>
        <h1 className="font-semibold text-5xl pb-10">
          Leverage a financial wellness program that delivers practical answers
          to the questions and challenges your employees have right now.
        </h1>
        <div className="flex flex-row gap-14 pb-10">
          <ul className="list-disc flex flex-col gap-4 pl-5">
            <li>I’m drowning in credit card debt. How do I pay it off?</li>
            <li>
              I want to plan ahead for my kids’ college education. Where do I
              start?
            </li>
            <li>
              It feels like I’ll have student loans forever. Can you help me
              make a payoff plan?
            </li>
            <li>Should I purchase term or whole life insurance?</li>
            <li>
              Is a retirement plan loan a bad idea? Are there better
              alternatives?
            </li>
            <li>Can you help me decide if I am ready to buy a house?</li>
            <li>
              I need help navigating through this financial crisis. Can you
              help?
            </li>
          </ul>
          <img className="w-72" src={Compass} alt="compass" />
        </div>
        <p className="pb-12">
          By providing answers to questions like these, Your Money Line helps
          your employees find the right balance with regard to achieving all
          their financial goals, including retirement.
        </p>
        <img className="w-72 mx-auto" src={Compass} alt="compass" />
      </div>
    </div>
  );
};

export default Leverage;
