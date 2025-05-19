import { useState, useEffect } from "react";
import { FetchTrendingVideos } from "../action/FetchTrending";
import VideoList from "./VideoList";

const TopVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const loadTrendingVideos = async () => {
      const trendingVideos = await FetchTrendingVideos();
      console.log("Fetched Trending Videos:", trendingVideos); // Debugging
      setVideos(trendingVideos);
    };

    loadTrendingVideos();
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center py-10 px-5 bg-gray-900">
      {/* Pass fetched videos to VideoList */}
      <VideoList videos={videos} />
    </div>
  );
};

export default TopVideos;
