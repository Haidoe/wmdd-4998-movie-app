import { StyleSheet, Text, View } from "react-native";
import Dropdown from "../dropdown";
import { getMovies } from "../../services";
import { useEffect, useState } from "react";
import ItemList from "../list/ItemList";

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
      <Dropdown
        onChange={fetchMovies}
        itemList={selectItems}
        defaultSelectedKey="popular"
      />

      {isLoading ? (
        <View>
          <Text> Loading... </Text>
        </View>
      ) : (
        <ItemList data={movies} />
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
