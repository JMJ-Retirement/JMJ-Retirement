import Map from "../assets/map.png";
import Lighthouse from "../assets/houseoflight.png";
import Binocular from "../assets/binocular.png";
import Boat from "../assets/ship.png";
import Hat from "../assets/hat.png";
import AnchorBlue from "../assets/newAnchor.png";

const Roadmap = () => {
  return (
    <div>
      <div className="pt-12 pb-4 max-w-5xl mx-auto px-5 md:px-0">
        <h1 className="font-semibold text-center sm:text-left text-2xl sm:text-3xl pb-6 sm:pb-12 md:px-5 lg:px-0">
          OUR 5-STEP SERVICE ROADMAP
        </h1>
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 sm:px-10 md:px-0">
          <div className="md:w-1/5 text-white shadow-md">
            <img className="h-28 sm:h-36 mx-auto" src={Binocular} alt="grow" />
            <div className="bg-[#1abec3] h-[83%] px-5 py-5">
              <h3 className="text-xl pb-5">Initial Discovery</h3>
              <p>
                Discovery is as easy as providing JMJ Retirement with your
                current fee disclosures and current service agreements. If you
                need help finding these disclosures, we can help you find them.
              </p>
            </div>
          </div>
          <div className="md:w-1/5 text-white shadow-md">
            <img className="h-28 sm:h-36 mx-auto" src={Boat} alt="grow" />
            <div className="bg-[#d7b591] h-[83%] px-5 py-5">
              <h3 className="text-xl pb-5">Focused Analysis</h3>
              <p className="mb-2">
                At JMJ Retirement, we delve deep to illuminate every fee tied to
                your retirement plan, ensuring you understand how they compare
                to similar-sized plans. Our approach includes:
              </p>
              <ul className="list-disc ">
                <li className="mb-2">
                  <div className="font-semibold inline">
                    Assessing your investments
                  </div>{" "}
                  to suggest improvements where beneficial.
                </li>
                <li className="mb-2">
                  <div className="font-semibold inline">
                    Reviewing fiduciary responsibilities
                  </div>{" "}
                  to advise on minimizing risks.
                </li>
                <li className="mb-2">
                  <div className="font-semibold inline">
                    Examining plan usage
                  </div>{" "}
                  to propose forward-thinking design enhancements.
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/5 text-white shadow-md">
            <img className="h-28 sm:h-36 mx-auto" src={Map} alt="grow" />
            <div className="bg-[#03618f] h-[83%] px-5 py-5">
              <h3 className="text-xl pb-5">Informed Strategy</h3>
              <p>
                JMJ Retirement provides incisive analysis and actionable
                recommendations, ensuring your retirement plan aligns seamlessly
                with your company’s goals. We’re dedicated to crafting a
                strategy that enhances your plan effectively and economically.
              </p>
            </div>
          </div>
          <div className="md:w-1/5 text-white shadow-md">
            <img className="h-28 sm:h-36 mx-auto" src={Hat} alt="grow" />
            <div className="bg-[#d7b591] h-[83%] px-5 py-5">
              <h3 className="text-xl pb-5">Effortless Transition</h3>
              <p>
                JMJ ensures any necessary adjustments are handled with ease,
                prioritizing your convenience throughout the process.
              </p>
            </div>
          </div>
          <div className="md:w-1/5 text-white shadow-md">
            <img className="h-28 sm:h-36 mx-auto" src={Lighthouse} alt="grow" />
            <div className="bg-[#1abec3] h-[83%] px-5 py-5">
              <h3 className="text-xl pb-5">Dedicated Oversight</h3>
              <p className="pb-2">
                JMJ is equipped to act as your ERISA 3(21) and 3(38) fiduciary,
                ensuring:
              </p>
              <ul className="list-disc">
                <li className="mb-2">
                  <div className="font-semibold inline">
                    Regular monitoring and benchmarking
                  </div>{" "}
                  of plan fees and investments.
                </li>
                <li className="mb-2">
                  <div className="font-semibold inline">
                    Meticulous documentation
                  </div>{" "}
                  of our oversight process.
                </li>
                <li className="mb-2">
                  <div className="font-semibold inline">
                    Consistent reporting
                  </div>{" "}
                  to the investment committee.
                </li>
                <li className="mb-2">
                  <div className="font-semibold inline">Proactive tracking</div>{" "}
                  of plan usage to maximize employee benefits.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="pt-4 sm:pt-8 md:mx-5 lg:mx-0">
          <div className="font-semibold pb-5">
            Efficient Enhancements, Uninterrupted Workflow
          </div>{" "}
          Often, JMJ Retirement can propose initial enhancements that swiftly
          elevate your plan’s performance, all without the need for a
          recordkeeper switch, ensuring a smooth experience for you and your
          team.
        </p>
        <img
          className="my-6 sm:my-8 w-32 sm:w-40 mx-auto"
          src={AnchorBlue}
          alt="Anchor"
        />
      </div>
    </div>
  );
};

export default Roadmap;
