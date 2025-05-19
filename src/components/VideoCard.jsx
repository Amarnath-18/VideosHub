import { useDispatch } from "react-redux";
import { setCurrentVideo } from "../redux/MoviesSlice";
const VideoCard = ({ poster_path, title, id, channel , description }) => {
  const dispatch = useDispatch();
  const handleVideo = async () => {
    const videoId = id?.videoId || id; // Extract videoId from the id object if it exists
    console.log("videoId is", videoId);
    const videodata = { id: videoId, title, channel, description };
    dispatch(setCurrentVideo(videodata));
    window.open(`/videos/${videoId}`, "_blank");
  };

  return (
    <div
      onClick={handleVideo}
      className="flex flex-col rounded-xl overflow-hidden shadow-lg p-4 h-[300px] w-full backdrop-blur-md bg-opacity-80 bg-black cursor-pointer 
                 hover:scale-105 active:scale-95 transition-transform duration-300 ease-in-out border border-gray-700 hover:border-blue-400"
    >
      {/* Video Thumbnail  */}
      <img
        src={poster_path}
        alt={title}
        className="h-[200px] w-full rounded-md object-cover"
      />

      {/* Video Title  */}
      <div className="w-full mt-3 text-center">
        {/* Video Title */}
        <h2 className="text-white text-sm font-semibold">{title}</h2>

        {/* Channel Name (More Beautiful) */}
        <p className="text-blue-400 text-sm font-bold mt-1 tracking-wide">
          <span className="text-blue-300 text-base font-extrabold drop-shadow-lg">
            🎬 {channel}
          </span>
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
