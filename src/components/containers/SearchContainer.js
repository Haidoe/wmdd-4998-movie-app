import { StyleSheet, Text, View } from "react-native";
import Dropdown from "../dropdown";
import { getSearchItems } from "../../services";
import { useEffect, useState } from "react";
import ItemList from "../list/ItemList";
import Loading from "../Loading";
import { Button, SearchBar } from "@rneui/themed";

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
      <View style={styles.searchContainer}>
        <Text style={{ paddingLeft: 8 }}>
          Search Movie/TV Show Name
          <Text style={{ color: "red" }}>*</Text>
        </Text>
        <SearchBar containerStyle={styles.searchBar} />
      </View>

      <View style={styles.dropdownContainer}>
        <Text>
          Choose Search Type <Text style={{ color: "red" }}>*</Text>
        </Text>

        <View style={styles.dropdownMeta}>
          <View style={{ flex: 1 }}>
            <Dropdown
              onChange={fetchSearchItems}
              itemList={selectItems}
              defaultSelectedKey="multi"
            />
          </View>
          <Button> Search </Button>
        </View>
      </View>

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

  searchContainer: {
    padding: 16,
    paddingTop: 8,
    paddingBottom: 8,
    paddingBottom: 0,
  },

  searchBar: {
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
  },

  dropdownContainer: {
    paddingLeft: 24,
    paddingRight: 24,
  },

  dropdownMeta: {
    marginTop: 8,
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
});

export default SearchContainer;
