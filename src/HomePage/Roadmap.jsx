import Grow from "../assets/grow.jpg";
import Plant from "../assets/plant.jpg";
import Sand from "../assets/sand.jpg";
import Shovel from "../assets/shovel.jpg";
import Water from "../assets/water.jpg";

const Roadmap = () => {
  return (
    <div>
      <div className="pt-12 pb-4 max-w-5xl mx-auto">
        <h1 className="font-semibold text-3xl pb-12">
          OUR 5-STEP SERVICE ROADMAP
        </h1>
        <div className="flex flex-row">
          <div className="w-1/5 text-white">
            <img className="h-36 mx-auto" src={Grow} alt="grow" />
            <div className="bg-blue-500 px-5 py-5">
              <h3 className="text-xl pb-5">Initial Discovery</h3>
              <p>
                Discovery is as easy as providing OnTrack 401(k) with your fee
                disclosures and current service agreements. We will help you
                find plan and participant fee disclosures as well as any service
                agreements in place.
              </p>
            </div>
          </div>
          <div className="w-1/5 text-white">
            <img className="h-36 mx-auto" src={Plant} alt="grow" />
            <div className="bg-blue-500 px-5 py-5">
              <h3 className="text-xl pb-5">Initial Discovery</h3>
              <p>
                Discovery is as easy as providing OnTrack 401(k) with your fee
                disclosures and current service agreements. We will help you
                find plan and participant fee disclosures as well as any service
                agreements in place.
              </p>
            </div>
          </div>
          <div className="w-1/5 text-white">
            <img className="h-36 mx-auto" src={Sand} alt="grow" />
            <div className="bg-blue-500 px-5 py-5">
              <h3 className="text-xl pb-5">Initial Discovery</h3>
              <p>
                Discovery is as easy as providing OnTrack 401(k) with your fee
                disclosures and current service agreements. We will help you
                find plan and participant fee disclosures as well as any service
                agreements in place.
              </p>
            </div>
          </div>
          <div className="w-1/5 text-white">
            <img className="h-36 mx-auto" src={Shovel} alt="grow" />
            <div className="bg-blue-500 px-5 py-5">
              <h3 className="text-xl pb-5">Initial Discovery</h3>
              <p>
                Discovery is as easy as providing OnTrack 401(k) with your fee
                disclosures and current service agreements. We will help you
                find plan and participant fee disclosures as well as any service
                agreements in place.
              </p>
            </div>
          </div>
          <div className="w-1/5 text-white">
            <img className="h-36 mx-auto" src={Water} alt="grow" />
            <div className="bg-blue-500 px-5 py-5">
              <h3 className="text-xl pb-5">Initial Discovery</h3>
              <p>
                Discovery is as easy as providing OnTrack 401(k) with your fee
                disclosures and current service agreements. We will help you
                find plan and participant fee disclosures as well as any service
                agreements in place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
