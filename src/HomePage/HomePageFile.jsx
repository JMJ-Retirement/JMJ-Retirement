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
import Beach from "../assets/header1.jpg";
import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";

const HomePage = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = Beach;
    img.onload = () => setIsPageLoaded(true);
  }, []);

  return (
    <>
      {!isPageLoaded ? (
        <div className="mt-40 flex h-screen items-start justify-center">
          <FadeLoader size={"100px"} color={"#61C3EB"} />
        </div>
      ) : (
        <>
          <Header />
          <Video Vid={Vid} TestVid={TestVid} Beach={Beach} />
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
      )}
    </>
  );
};

export default HomePage;
