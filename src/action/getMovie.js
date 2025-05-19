/* global process */

export const getMovies = async (searchQuery) => {
    const response = await fetch(
      `${process.env.REACT_APP_TMDB_API_URL}&query=${encodeURIComponent(searchQuery)}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TMDB_BEARER}`,
        },
      }
    );
    const data = await response.json();
    console.log(data.results);
    
    return data.results;
}

  