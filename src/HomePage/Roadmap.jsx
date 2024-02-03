import Grow from "../assets/grow.jpg";
import Plant from "../assets/plant.jpg";
import Sand from "../assets/sand.jpg";
import Shovel from "../assets/shovel.jpg";
import Water from "../assets/water.jpg";
import Leaves from "../assets/beach.jpg";

const Roadmap = () => {
  return (
    <div>
      <div className="pt-12 pb-4 max-w-5xl mx-auto px-5">
        <h1 className="font-semibold text-center sm:text-left text-2xl sm:text-3xl pb-6 sm:pb-12">
          OUR 5-STEP SERVICE ROADMAP
        </h1>
        <div className="flex flex-col md:flex-row gap-8 md:gap-0">
          <div className="md:w-1/5 text-white shadow-md">
            <img className="h-28 sm:h-36 mx-auto" src={Shovel} alt="grow" />
            <div className="bg-[#3177C1] h-[83%] px-5 py-5">
              <h3 className="text-xl pb-5">Initial Discovery</h3>
              <p>
                Discovery is as easy as providing OnTrack 401(k) with your fee
                disclosures and current service agreements. We will help you
                find plan and participant fee disclosures as well as any service
                agreements in place.
              </p>
            </div>
          </div>
          <div className="md:w-1/5 text-white shadow-md">
            <img className="h-28 sm:h-36 mx-auto" src={Sand} alt="grow" />
            <div className="bg-[#808080] h-[83%] px-5 py-5">
              <h3 className="text-xl pb-5">Analyze</h3>
              <p>
                Our in depth analysis will show you all of the fees associated
                with your retirement plan and how your fees stack up to other
                plans your size. We will:<br></br>
                <br></br>• Analyze your current investments and recommend
                changes if needed.<br></br>
                <br></br>• Evaluate your fiduciary liability and provide
                recommendations to help reduce your exposure.<br></br>
                <br></br>• Analyze your plan utilization and provide proactive
                plan design recommendations.
              </p>
            </div>
          </div>
          <div className="md:w-1/5 text-white shadow-md">
            <img className="h-28 sm:h-36 mx-auto" src={Water} alt="grow" />
            <div className="bg-[#91c33c] h-[83%] px-5 py-5">
              <h3 className="text-xl pb-5">Strategize</h3>
              <p>
                Our analysis and recommendations will bring clarity to your
                retirement plan and help you make informed decisions so that
                your retirement plan matches your company objectives. We will
                develop a plan to make improvements in the most cost effective
                and efficient way.
              </p>
            </div>
          </div>
          <div className="md:w-1/5 text-white shadow-md">
            <img className="h-28 sm:h-36 mx-auto" src={Plant} alt="grow" />
            <div className="bg-[#246589] h-[83%] px-5 py-5">
              <h3 className="text-xl pb-5">Implement</h3>
              <p>
                If changes are needed, OnTrack 401(k) will manage the process to
                make it as easy as possible for you.
              </p>
            </div>
          </div>
          <div className="md:w-1/5 text-white shadow-md">
            <img className="h-28 sm:h-36 mx-auto" src={Grow} alt="grow" />
            <div className="bg-[#343d46] h-[83%] px-5 py-5">
              <h3 className="text-xl pb-5">MONITOR & DOCUMENT</h3>
              <p>
                OnTrack 401(k) can serve your plan as an ERISA 3(21) or 3(38)
                fiduciary. We will:<br></br>
                <br></br>• Monitor and benchmark the fees and investments in
                your retirement plan.<br></br>
                <br></br>• Document the prudent process we use to monitor your
                plan.<br></br>
                <br></br>• Report to the investment committee.<br></br>
                <br></br>• Track progress of plan utilization to ensure
                employees are getting the most out of your plan.
              </p>
            </div>
          </div>
        </div>
        <p className="pt-6 sm:pt-4">
          In many cases, we can make a few initial recommendations that will
          immediately improve plan performance without necessitating a change in
          recordkeeper — providing minimal disruption to you and your employees.
        </p>
        <img
          className="my-6 sm:my-8 w-60 sm:w-72 mx-auto border-2 border-black"
          src={Leaves}
          alt="leaves"
        />
      </div>
    </div>
  );
};

export default Roadmap;
