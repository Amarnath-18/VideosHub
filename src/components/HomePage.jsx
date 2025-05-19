import { useSelector } from "react-redux";

const HomePage = () => {
  const Videos = useSelector((state) => state.Videos.videos);
  console.log(Videos);
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-tr from-blue-900 via-purple-800 to-pink-600">
      <div className="flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
          Welcome to <span className="text-pink-300">VideosHub</span>
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl font-medium max-w-xl mb-2">
          The best place to find your favorite Videos
        </p>
      </div>
    </div>
  );
};

export default HomePage;
