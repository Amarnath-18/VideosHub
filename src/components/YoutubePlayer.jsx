import { useState } from "react";
import { fetchComments } from "../action/fetchComments";

const YouTubePlayer = ({videoId}) => {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [error, setError] = useState(null);

  const handleShowComments = async () => {
    if (!showComments) {
      const fetchedComments = await fetchComments(videoId);
      setComments(fetchedComments || [])
    }
    setShowComments(!showComments);
  };

  if (!videoId || typeof videoId !== "string" || videoId.length < 5) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-800 text-white">
        <p>No valid video ID provided</p>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full min-h-screen p-5 bg-gray-900">
      {/* Video Player Section */}
      <div className="w-full lg:w-2/3 flex justify-center">
        <div className="relative w-full max-w-4xl aspect-video border-4 border-white rounded-2xl overflow-hidden">
          {error ? (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 text-white">
              <p>{error}</p>
            </div>
          ) : (
            <iframe
              key={videoId}
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&fs=1&playsinline=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onError={() => setError('Error loading video. Please try again.')}
            />
          )}
        </div>
      </div>

      {/* Sidebar Section (Comments) */}
      <div className="w-full lg:w-1/3 mt-6 lg:mt-0 lg:ml-6 p-4 bg-gray-800 border-4 border-white rounded-2xl">
        <h2 className="font-bold text-white text-center mb-3">Comments</h2>

        {/* Show Comments Button */}
        <button
          onClick={handleShowComments}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-md transition"
        >
          {showComments ? "Hide Comments" : "Show Comments"}
        </button>

        {/* Display Comments */}
        {showComments && (
          <div className="mt-3 space-y-3 max-h-[400px] overflow-auto">
            {comments.length === 0 ? (
              <p className="text-gray-400 text-center">No comments available.</p>
            ) : (
              comments.map((comment, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 bg-gray-700 p-2 rounded-lg"
                >
                  {/* Profile Image */}
                  <img
                    src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
                    alt="Profile"
                    className="w-8 h-8 rounded-full border border-gray-600"
                  />

                  {/* Comment Details */}
                  <div>
                    <h3 className="text-blue-400 text-sm font-semibold">
                      {comment.snippet.topLevelComment.snippet.authorDisplayName}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {comment.snippet.topLevelComment.snippet.textOriginal}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default YouTubePlayer;
