import { useState, useRef, useEffect } from "react";

const Video = ({ Vid, TestVid, Beach }) => {
  const videoRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(TestVid);

  useEffect(() => {
    videoRef.current.load();
  }, [currentVideo]);

  const BeachPic = {
    backgroundImage: `url(${Beach})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const handleVideoChange = (video) => {
    setCurrentVideo(video);
    videoRef.current.src = video;
    videoRef.current.load();
  };

  return (
    <div className="relative">
      <div
        className="flex justify-center items-center flex-col py-12 sm:bg-fixed"
        style={BeachPic}
      >
        <video
          ref={videoRef}
          controls
          className="w-9/12 md:w-auto md:h-[400px] border-2 border-black"
        >
          <source src={currentVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="h-[100px] w-9/12 md:w-[708px] bg-white flex justify-center items-center gap-5">
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
