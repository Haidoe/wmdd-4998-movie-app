import { FlatList, StyleSheet, View } from "react-native";
import Item from "../listItems/Item";
import { Text } from "@rneui/themed";

const ItemList = ({ data, navigation }) => {
  return (
    <FlatList
      data={data}
      style={styles.list}
      ListEmptyComponent={() => (
        <View style={styles.noItems}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            No items found.
          </Text>
        </View>
      )}
      renderItem={({ item }) => <Item {...item} navigation={navigation} />}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 16,
  },
  noItems: {
    height: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ItemList;
