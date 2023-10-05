import { BASE_MOVIE, MOVIE_ACCESS_TOKEN } from "../configs/apiConfigs";

export const getMovies = async (query = "popular") => {
  try {
    const url = `${BASE_MOVIE}/movie/${query}?language=en-US&page=1`;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${MOVIE_ACCESS_TOKEN}`,
      },
    };

    const response = await fetch(url, options);

    const result = await response.json();

    return result.results ?? [];
  } catch (error) {
    return [];
  }
};

// Search TV
// const url = 'https://api.themoviedb.org/3/search/tv?query=Super&include_adult=false&language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDk3Mzc1MTU1YjZhOWY1MjdjYmU2OWE2MGY1ZTFjOCIsInN1YiI6IjY0YzIxNDQ3MmYxYmUwMDBlYmQ1Y2Y3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QNQWvwQWinSCvMNkjz0d7wydkfVjzw-TpeJ326onosk'
//   }
// };

// SEARCH MOVIE
// const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDk3Mzc1MTU1YjZhOWY1MjdjYmU2OWE2MGY1ZTFjOCIsInN1YiI6IjY0YzIxNDQ3MmYxYmUwMDBlYmQ1Y2Y3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QNQWvwQWinSCvMNkjz0d7wydkfVjzw-TpeJ326onosk'
//   }
// };

// SEARCH MULTI
// const url = 'https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDk3Mzc1MTU1YjZhOWY1MjdjYmU2OWE2MGY1ZTFjOCIsInN1YiI6IjY0YzIxNDQ3MmYxYmUwMDBlYmQ1Y2Y3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QNQWvwQWinSCvMNkjz0d7wydkfVjzw-TpeJ326onosk'
//   }
// };

//============================================================
// const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDk3Mzc1MTU1YjZhOWY1MjdjYmU2OWE2MGY1ZTFjOCIsInN1YiI6IjY0YzIxNDQ3MmYxYmUwMDBlYmQ1Y2Y3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QNQWvwQWinSCvMNkjz0d7wydkfVjzw-TpeJ326onosk'
//   }
// };

// const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDk3Mzc1MTU1YjZhOWY1MjdjYmU2OWE2MGY1ZTFjOCIsInN1YiI6IjY0YzIxNDQ3MmYxYmUwMDBlYmQ1Y2Y3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QNQWvwQWinSCvMNkjz0d7wydkfVjzw-TpeJ326onosk'
//   }
// };

// const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDk3Mzc1MTU1YjZhOWY1MjdjYmU2OWE2MGY1ZTFjOCIsInN1YiI6IjY0YzIxNDQ3MmYxYmUwMDBlYmQ1Y2Y3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QNQWvwQWinSCvMNkjz0d7wydkfVjzw-TpeJ326onosk'
//   }
// };

// const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDk3Mzc1MTU1YjZhOWY1MjdjYmU2OWE2MGY1ZTFjOCIsInN1YiI6IjY0YzIxNDQ3MmYxYmUwMDBlYmQ1Y2Y3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QNQWvwQWinSCvMNkjz0d7wydkfVjzw-TpeJ326onosk'
//   }
// };

// ============================================================

// const url = 'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDk3Mzc1MTU1YjZhOWY1MjdjYmU2OWE2MGY1ZTFjOCIsInN1YiI6IjY0YzIxNDQ3MmYxYmUwMDBlYmQ1Y2Y3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QNQWvwQWinSCvMNkjz0d7wydkfVjzw-TpeJ326onosk'
//   }
// };

// const url = 'https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDk3Mzc1MTU1YjZhOWY1MjdjYmU2OWE2MGY1ZTFjOCIsInN1YiI6IjY0YzIxNDQ3MmYxYmUwMDBlYmQ1Y2Y3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QNQWvwQWinSCvMNkjz0d7wydkfVjzw-TpeJ326onosk'
//   }
// };

// const url = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDk3Mzc1MTU1YjZhOWY1MjdjYmU2OWE2MGY1ZTFjOCIsInN1YiI6IjY0YzIxNDQ3MmYxYmUwMDBlYmQ1Y2Y3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QNQWvwQWinSCvMNkjz0d7wydkfVjzw-TpeJ326onosk'
//   }
// };

// const url = 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDk3Mzc1MTU1YjZhOWY1MjdjYmU2OWE2MGY1ZTFjOCIsInN1YiI6IjY0YzIxNDQ3MmYxYmUwMDBlYmQ1Y2Y3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QNQWvwQWinSCvMNkjz0d7wydkfVjzw-TpeJ326onosk'
//   }
// };
