import { useState, useRef } from "react";
import Beach from "../assets/beach.jpg";
import Vid from "../assets/AlexTest.mp4";
import TestVid from "../assets/TestVid.mp4";

const Video = () => {
  const videoRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(TestVid);

  const BeachPic = {
    backgroundImage: `url(${Beach})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const handleVideoChange = (video) => {
    setCurrentVideo(video);
    videoRef.current.src = video; // Update video source
    videoRef.current.load(); // Reload the video
  };

  return (
    <div className="relative">
      <div
        className="flex justify-center items-center flex-col py-12"
        style={BeachPic}
      >
        <video
          ref={videoRef}
          controls
          className="w-8/12 sm:h-[300px] lg:h-[400px] sm:w-auto"
          // poster={currentVideo}
        >
          <source src={currentVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="h-[100px] sm:w-[355.56px] lg:w-[711.11px] bg-[#7faaad] flex justify-center items-center gap-5">
          <button
            className="bg-logoGold rounded px-5 py-3 text-center text-logoBlue cursor-pointer"
            onClick={() => handleVideoChange(TestVid)}
          >
            Video One
          </button>
          <button
            className="bg-logoGold text-logoBlue px-5 py-3 rounded cursor-pointer"
            onClick={() => handleVideoChange(Vid)}
          >
            Video Two
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
