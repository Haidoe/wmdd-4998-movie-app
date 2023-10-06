import { StyleSheet, Text, View } from "react-native";
import Dropdown from "../dropdown";
import { getTvShows } from "../../services";
import { useEffect, useState } from "react";
import ItemList from "../list/ItemList";
import Loading from "../Loading";

const TvShowsContainer = ({ navigation }) => {
  const [tvShows, setTvShows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const selectItems = [
    {
      title: "Airing Today",
      key: "airing_today",
    },
    {
      title: "On the Air",
      key: "on_the_air",
    },
    {
      title: "Popular",
      key: "popular",
    },
    {
      title: "Top Rated",
      key: "top_rated",
    },
  ];

  const fetchTvShows = async (query) => {
    setIsLoading(true);
    const tvShows = await getTvShows(query ?? "popular");
    setTvShows(tvShows);

    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  useEffect(() => {
    fetchTvShows();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.dropdownContainer}>
        <Dropdown
          onChange={fetchTvShows}
          itemList={selectItems}
          defaultSelectedKey="popular"
        />
      </View>

      {isLoading ? (
        <Loading />
      ) : (
        <ItemList data={tvShows} type="tv" navigation={navigation} />
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
  dropdownContainer: {
    padding: 8,
    paddingLeft: 24,
    paddingRight: 24,
  },
});

export default TvShowsContainer;
