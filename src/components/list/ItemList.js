import { FlatList, StyleSheet } from "react-native";
import Item from "../listItems/Item";

const ItemList = ({ data }) => {
  return (
    <FlatList
      data={data}
      style={styles.list}
      renderItem={({ item }) => <Item {...item} />}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 16,
  },
});

export default ItemList;
