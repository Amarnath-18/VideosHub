import { useSelector } from "react-redux";

const DescriptionBox = ({ video }) => {
  // Fallback to Redux for backward compatibility
  const fallbackVideo = useSelector((state) => state.Videos.currentVideo);
  const vid = video || fallbackVideo;

  if (!vid) {
    return <p className="text-white">Loading...</p>; // Display while fetching data
  }

  return (
    <div className="absolute bottom-6 left-6 w-[60%] min-w-[240px] max-w-[700px] p-6 bg-white/10 backdrop-blur-md shadow-xl border-2 border-blue-400 rounded-2xl max-h-[260px] overflow-auto transition-all duration-300">
      <h1 className="text-white text-2xl font-extrabold tracking-tight mb-2 drop-shadow-lg">
        {vid.title}
      </h1>
      <hr className="border-blue-400 opacity-40 mb-2" />
      <p className="text-gray-200 text-base leading-relaxed" style={{wordBreak: 'break-word'}}>
        {vid.description}
      </p>
    </div>
  );
};

export default DescriptionBox;
