import LifeRaft from "../assets/newLiferaft.png";
import Compass from "../assets/newCompass.png";

const Leverage = () => {
  return (
    <div>
      <div className="pt-12 pb-4 max-w-5xl mx-auto px-5">
        <h4 className="text-slate-500 text-lg sm:text-xl pb-5">
          What Helps Make a Great Retirement Plan?
        </h4>
        <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl pb-10">
          Empower Financial Well-Being with Actionable Guidance
        </h1>
        <div className="flex flex-col-reverse items-center md:items-start md:flex-row gap-6 md:gap-14 pb-6 md:pb-10">
          <p className="">
            JMJ Retirement offers a financial wellness program that addresses
            your employees’ immediate financial concerns with practical
            solutions. Whether it’s devising strategies to eliminate credit card
            debt, planning for children’s college funds, creating student loan
            repayment plans, understanding insurance options, evaluating
            retirement plan loans, or preparing for a home purchase, we’re here
            to navigate you through financial challenges with expert advice and
            support.
          </p>
          <img className="w-32 sm:w-44" src={LifeRaft} alt="Life Raft" />
        </div>
        <p className="pb-6 sm:pb-12">
          Our wellness program not only provides actionable solutions to your
          employees’ current financial questions but also includes{" "}
          <div className="font-semibold inline">
            personal one-on-one meetings
          </div>{" "}
          and{" "}
          <div className="font-semibold inline">
            in-person enrollment sessions
          </div>{" "}
          for every team member, ensuring individualized guidance and
          comprehensive understanding of their financial choices.
        </p>
        <img className="w-32 sm:w-52 mx-auto" src={Compass} alt="compass" />
      </div>
    </div>
  );
};

export default Leverage;
