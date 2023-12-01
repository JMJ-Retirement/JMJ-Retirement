import { useState, useRef } from "react";
import Trees from "../assets/Trees.png";
import Vid from "../assets/AlexTest.mp4";
import TestVid from "../assets/TestVid.mp4";

const Video = () => {
  const videoRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(TestVid);

  const TreePic = {
    backgroundImage: `url(${Trees})`,
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
        style={TreePic}
      >
        <video ref={videoRef} controls className="h-[400px] w-auto">
          <source src={currentVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="h-[400px] w-[711.11px] bg-slate-50 flex justify-center items-center gap-5">
          <button
            className="bg-logoGold text-logoBlue h-8 cursor-pointer"
            onClick={() => handleVideoChange(TestVid)}
          >
            Video One
          </button>
          <button
            className="bg-logoGold text-logoBlue h-8 cursor-pointer"
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
