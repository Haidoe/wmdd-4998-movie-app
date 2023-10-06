import { StyleSheet, Text, View } from "react-native";
import Dropdown from "../dropdown";
import { getMovies } from "../../services";
import { useEffect, useState } from "react";
import ItemList from "../list/ItemList";
import Loading from "../Loading";

const MovieContainer = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const selectItems = [
    {
      title: "Now Playing",
      key: "now_playing",
    },
    {
      title: "Popular",
      key: "popular",
    },
    {
      title: "Top Rated",
      key: "top_rated",
    },
    {
      title: "Upcoming",
      key: "upcoming",
    },
  ];

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
      <View>
        <Dropdown
          onChange={fetchMovies}
          itemList={selectItems}
          defaultSelectedKey="popular"
        />
      </View>

      {isLoading ? <Loading /> : <ItemList data={movies} />}
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
  dropdownContainer: {
    padding: 8,
    paddingLeft: 24,
    paddingRight: 24,
  },
});

export default MovieContainer;
