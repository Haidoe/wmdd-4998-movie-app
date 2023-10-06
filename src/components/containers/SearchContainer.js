import { StyleSheet, Text, View } from "react-native";
import Dropdown from "../dropdown";
import { getSearchItems } from "../../services";
import { useEffect, useState } from "react";
import ItemList from "../list/ItemList";
import Loading from "../Loading";
import { Button, SearchBar } from "@rneui/themed";

const SearchContainer = ({ navigation }) => {
  //This is to display initiate search message
  const [hasSearched, setHasSearched] = useState(false);

  //This is to store the search query
  const [searchQuery, setSearchQuery] = useState("");

  //This is to store the search results (movies/tv shows)
  const [searchedItems, setSearchedItems] = useState([]);

  //This is to display loading indicator
  const [isLoading, setIsLoading] = useState(false);

  //This
  const [selectedType, setSelectedType] = useState("multi");

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

  const fetchSearchItems = async () => {
    //Check if the searchQuery has input
    if (!searchQuery) {
      return;
    }

    setHasSearched(true);
    setIsLoading(true);
    const items = await getSearchItems(selectedType, searchQuery);
    setSearchedItems(items);

    setIsLoading(false);
    setSearchQuery("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Text style={{ paddingLeft: 8 }}>
          Search Movie/TV Show Name
          <Text style={{ color: "red" }}>*</Text>
        </Text>

        <SearchBar
          containerStyle={styles.searchBar}
          placeholder="i.e James Bond, CSI"
          onChangeText={(query) => setSearchQuery(query)}
          value={searchQuery}
        />
      </View>

      <View style={styles.dropdownContainer}>
        <Text>
          Choose Search Type <Text style={{ color: "red" }}>*</Text>
        </Text>

        <View style={styles.dropdownMeta}>
          <View style={{ flex: 1 }}>
            <Dropdown
              onChange={(type) => setSelectedType(type)}
              itemList={selectItems}
              defaultSelectedKey="multi"
            />
          </View>

          <Button
            buttonStyle={{ backgroundColor: "#31adcd" }}
            onPress={fetchSearchItems}
          >
            {" "}
            Search{" "}
          </Button>
        </View>
      </View>

      {!hasSearched ? (
        <View style={styles.initSearchContainer}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            Please initiate a search
          </Text>
        </View>
      ) : isLoading ? (
        <Loading />
      ) : (
        <ItemList data={searchedItems} type="search" navigation={navigation} />
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

  initSearchContainer: {
    height: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SearchContainer;
