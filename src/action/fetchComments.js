import { yt_api_key } from "../Constrains";

export const fetchComments = async (id) => {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${id}&key=${yt_api_key}&maxResults=50`
  );
  const data = await response.json();
  return data.items;
};