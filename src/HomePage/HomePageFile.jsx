import Header from "./Header";
// import Video from "./Video";
import About from "./About";
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
import Compliance from "./Compliance";
import Footer from "./Footer";
// import Vid from "../assets/AlexTest.mp4";
// import TestVid from "../assets/TestVid.mp4";
import Beach from "../assets/header1.jpg";
import Sail from "../assets/sail.jpg";
import Sunset from "../assets/sunset.jpg";
import Ocean from "../assets/ocean.jpg";
import Logo from "../assets/TransparentLogo.png";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";

const HomePage = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // useEffect(() => {
  //   const img = new Image();
  //   img.src = Beach;
  //   img.onload = () => setIsPageLoaded(true);
  // }, []);

  useEffect(() => {
    const images = [Sunset, Ocean, Sail];
    const imageLoadPromises = images.map((imageSrc) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imageLoadPromises)
      .then(() => {
        setIsPageLoaded(true);
      })
      .catch((error) => {
        console.error("Error loading images:", error);
      });
  }, []);

  return (
    <>
      {!isPageLoaded ? (
        <div className="mt-40">
          <img
            src={Logo}
            alt="Logo"
            className="lg:w-[700px] md:w-[600px] w-96 mx-auto px-5 sm:px-0"
          />
          <div className="flex justify-center h-screen mt-10 md:mt-20">
            <MoonLoader color={"#26328c"} />
          </div>
        </div>
      ) : (
        <>
          <Header />
          {/* <Video Vid={Vid} TestVid={TestVid} Beach={Beach} /> */}
          <About />
          <GreatPlan />
          <Partner />
          <Roadmap />
          <Understand />
          <FeeBenchmark Sunset={Sunset} />
          <EmbraceData />
          <Outcomes Ocean={Ocean} />
          <Leverage />
          <Advisor Sail={Sail} />
          <Trust />
          <Compliance />
          <Footer />
        </>
      )}
    </>
  );
};

export default HomePage;
