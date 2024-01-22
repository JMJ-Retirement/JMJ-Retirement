import Header from "./Header";
import Video from "./Video";
import GreatPlan from "./GreatPlan";
import Partner from "./Partner";
import Roadmap from "./Roadmap";
import Understand from "./Understand";
import FeeBenchmark from "./FeeBenchmark";
import EmbraceData from "./EmbraceData";
import Outcomes from "./Outcomes";
import Leverage from "./Leverage";
import Advisor from "./Advisor";
import Trust from "./Trust";
import Footer from "./Footer";
import Vid from "../assets/AlexTest.mp4";
import TestVid from "../assets/TestVid.mp4";

const HomePage = () => {
  return (
    <>
      <Header />
      <Video Vid={Vid} TestVid={TestVid} />
      <GreatPlan />
      <Partner />
      <Roadmap />
      <Understand />
      <FeeBenchmark />
      <EmbraceData />
      <Outcomes />
      <Leverage />
      <Advisor />
      <Trust />
      <Footer />
    </>
  );
};

export default HomePage;
