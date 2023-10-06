import { StyleSheet, Text, View } from "react-native";
import Dropdown from "../dropdown";
import { getSearchItems } from "../../services";
import { useEffect, useState } from "react";
import ItemList from "../list/ItemList";
import Loading from "../Loading";

const SearchContainer = () => {
  const [searchedItems, setSearchedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const selectItems = [
    {
      title: "Movie",
      key: "movie",
    },
    {
      title: "Multi",
      key: "multi",
    },
    {
      title: "TV",
      key: "tv",
    },
  ];

  const fetchSearchItems = async (type) => {
    setIsLoading(true);
    const items = await getSearchItems(type ?? "multi", "James Bond");
    console.log(items[0]);
    setSearchedItems(items);

    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  useEffect(() => {
    fetchSearchItems();
  }, []);

  return (
    <View style={styles.container}>
      <Dropdown
        onChange={fetchSearchItems}
        itemList={selectItems}
        defaultSelectedKey="multi"
      />

      {isLoading ? (
        <Loading />
      ) : (
        <ItemList data={searchedItems} type="search" />
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

export default SearchContainer;
