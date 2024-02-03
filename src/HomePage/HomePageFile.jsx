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
import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadVideos = async () => {
      const videoPromises = [loadVideo(Vid), loadVideo(TestVid)];

      await Promise.all(videoPromises);
      setIsLoading(false);
    };

    const loadVideo = (src) => {
      return new Promise((resolve) => {
        const video = document.createElement("video");
        video.src = src;
        video.onloadeddata = resolve;
      });
    };

    // Set the loading state to true initially
    setIsLoading(true);

    // Call the function to load the videos
    loadVideos();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="mt-40 flex h-screen items-start justify-center">
          <FadeLoader size={"100px"} color={"#61C3EB"} />
        </div>
      ) : (
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
      )}
    </>
  );
};

export default HomePage;
