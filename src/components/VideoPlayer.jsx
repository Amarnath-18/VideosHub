import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import YouTubePlayer from "./YoutubePlayer";
import DescriptionBox from "./DescriptionBox";

const VideoPlayer = () => {
  const { videoId } = useParams();
  const videos = useSelector((state) => state.Videos.videos);
  // Try to find the video by id or videoId (handle both string and object cases)
  const video = videos.find(
    v => v.id === videoId || v.id?.videoId === videoId
  );
  return (
    <div className="relative w-screen h-screen bg-transparent">
      <YouTubePlayer videoId={videoId} />
      <DescriptionBox video={video} />
    </div>
  );
};

export default VideoPlayer;
