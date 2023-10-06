import { Button, Image } from "@rneui/themed";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const Item = (props) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemImgContainer}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${props.poster_path}`,
          }}
          style={styles.itemImg}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>

      <View style={styles.itemDetailsContainer}>
        <Text style={{ fontWeight: "bold", width: "80%" }}>
          {props.title ?? props.name}
        </Text>

        <Text style={{ fontSize: 12 }}>Popularity: {props.popularity}</Text>

        <Text style={{ fontSize: 12 }}>Release Date: {props.release_date}</Text>

        <Button
          title="More Details"
          buttonStyle={{
            backgroundColor: "#31adcd",
          }}
          titleStyle={{ fontSize: 14 }}
          onPress={() => {
            props.navigation.navigate("Details", {
              id: props.id,
              title: props.title ?? props.name,
            });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    flex: 1,
    justifyContent: "space-between",
  },
});

export default Item;
