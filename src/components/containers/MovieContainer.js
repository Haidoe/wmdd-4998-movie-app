import { StyleSheet, Text, View } from "react-native";
import Dropdown from "../dropdown";
import { getMovies } from "../../services";
import { useEffect, useState } from "react";
import MovieList from "../list/MovieList";

const MovieContainer = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async (query) => {
    setIsLoading(true);
    const movies = await getMovies(query ?? "popular");
    setMovies(movies);

    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <View style={styles.container}>
      <Dropdown onChange={fetchMovies} />

      {isLoading ? (
        <View>
          <Text> Loading... </Text>
        </View>
      ) : (
        <MovieList movies={movies} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    gap: 16,
    padding: 16,
    paddingBottom: 60,
  },
});

export default MovieContainer;
