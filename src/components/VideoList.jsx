import VideoCard from "./VideoCard";

const VideoList = ({ videos = [] }) => {
  console.log("Videos received by VideoList:", videos); // Debugging

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center py-10 px-5 bg-gray-900">
      <h1 className="text-white text-4xl font-extrabold mb-6 tracking-wide">
        Trending Videos
      </h1>

      {videos?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-5/6">
          {videos.map((video, i) => (
            video?.snippet?.thumbnails?.high?.url &&
            video?.id && ( // Change video.id.videoId to video.id for trending videos
              <VideoCard
                key={video.id || i}
                poster_path={video.snippet.thumbnails.high.url}
                title={video.snippet.title}
                id={video.id} // Trending videos use `video.id`, not `video.id.videoId`
                channel={video.snippet.channelTitle}
                description={video.snippet.description}
              />
            )
          ))}
        </div>
      ) : (
        <div className="text-white text-xl font-semibold mt-10 animate-pulse">
          Loading videos...
        </div>
      )}
    </div>
  );
};

export default VideoList;
