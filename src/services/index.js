import { BASE_MOVIE, ACCESS_TOKEN } from "../configs/apiConfigs";

export const getMovies = async (query = "popular") => {
  try {
    const url = `${BASE_MOVIE}/movie/${query}?language=en-US&page=1`;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    };

    const response = await fetch(url, options);
    const result = await response.json();
    return result.results ?? [];
  } catch (error) {
    return [];
  }
};

export const getTvShows = async (query = "on_the_air") => {
  try {
    const url = `${BASE_MOVIE}/tv/${query}?language=en-US&page=1`;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    };

    const response = await fetch(url, options);
    const result = await response.json();
    return result.results ?? [];
  } catch (error) {
    return [];
  }
};

export const getSearchItems = async (type = "multi", query) => {
  try {
    const url = `${BASE_MOVIE}/search/${type}?query=${query}&include_adult=false&language=en-US&page=1`;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    };

    const response = await fetch(url, options);

    const result = await response.json();

    return result.results ?? [];
  } catch (error) {
    return [];
  }
};

export const getMovieDetails = async (id) => {
  try {
    const url = `${BASE_MOVIE}/movie/${id}?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    };

    const response = await fetch(url, options);

    const result = await response.json();

    return result;
  } catch (error) {
    return null;
  }
};

export const getTvDetails = async (id) => {
  try {
    const url = `${BASE_MOVIE}/tv/${id}?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    };

    const response = await fetch(url, options);

    const result = await response.json();

    return result;
  } catch (error) {
    return null;
  }
};
