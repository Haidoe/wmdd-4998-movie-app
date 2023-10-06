import { Button, Image, Text } from "@rneui/themed";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";

const ItemList = ({ data, type }) => {
  let renderTitleProperty = "";

  switch (type) {
    case "movie":
      renderTitleProperty = "title";
      break;
    case "tv":
      renderTitleProperty = "name";
      break;
    default:
      renderTitleProperty = "title";
  }

  return (
    <FlatList
      data={data}
      style={styles.list}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <View style={styles.itemImgContainer}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
              }}
              style={styles.itemImg}
              PlaceholderContent={<ActivityIndicator />}
            />
          </View>

          <View style={styles.itemDetailsContainer}>
            <Text style={{ fontWeight: "bold" }}>
              {item[renderTitleProperty]}
            </Text>

            <Text style={{ fontSize: 12 }}>Popularity: {item.popularity}</Text>

            <Text style={{ fontSize: 12 }}>
              Release Date: {item.release_date}
            </Text>

            <Button
              title="More Details"
              buttonStyle={{ backgroundColor: "#31adcd", width: "100%" }}
              titleStyle={{ fontSize: 14 }}
            />
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 16,
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    marginBottom: 24,
  },

  itemImgContainer: {
    width: 100,
  },

  itemImg: {
    aspectRatio: 1,
    flex: 1,
  },

  itemDetailsContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export default ItemList;
