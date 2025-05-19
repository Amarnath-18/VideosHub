import { yt_api_key } from "../Constrains";

export const FetchTrendingVideos = async () => {
  try {
    console.log("Using API Key:", yt_api_key); // Debugging

    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=IN&maxResults=10&key=${yt_api_key}`
    );

    console.log("Response Status:", response.status); // Log status code

    if (!response.ok) {
      const errorData = await response.json(); // Get error details
      console.error("API Error:", errorData);
      return [];
    }

    const data = await response.json();
    return data.items || []; // Return trending videos or an empty array if there's an error
  } catch (error) {
    console.error("Error fetching trending videos:", error);
    return [];
  }
};
