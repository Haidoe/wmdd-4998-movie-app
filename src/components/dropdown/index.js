import { StyleSheet, Text, View } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { BottomSheet, Button, ListItem } from "@rneui/themed";

const Dropdown = ({ onChange, itemList, defaultSelectedKey }) => {
  const [isVisible, setIsVisible] = useState(false);

  const selectedObject = itemList.find(
    (item) => item.key === defaultSelectedKey
  );

  const [selected, setSelected] = useState(selectedObject);

  const handleOnPress = (selected) => {
    setIsVisible(false);
    const selectedObj = list.find((l) => l.key === selected);
    setSelected(selectedObj);
    onChange(selected);
  };

  const list = itemList.map((item) => ({
    ...item,
    onPress: () => handleOnPress(item.key),
  }));

  return (
    <>
      <View style={styles.dropdownContainer}>
        <Button onPress={() => setIsVisible(true)} buttonStyle={styles.button}>
          <>
            <Text style={styles.buttonTitle}> {selected.title} </Text>

            <AntDesign name="down" size={16} color="gray" />
          </>
        </Button>
      </View>

      <BottomSheet modalProps={{}} isVisible={isVisible}>
        <View
          style={{
            backgroundColor: "white",
            padding: 16,
            paddingBottom: 48,
            paddingTop: 32,
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              flexDirection: "row",
              marginBottom: 8,
            }}
          >
            <View
              style={{
                width: 50,
                height: 6,
                backgroundColor: "lightGray",
                borderRadius: 16,
              }}
            />
          </View>

          {list.map((l, i) => (
            <ListItem
              key={i}
              containerStyle={{
                backgroundColor: selected.key === l.key ? "#177166" : "white",
                borderRadius: 8,
              }}
              onPress={l.onPress}
            >
              <ListItem.Content>
                <ListItem.Title
                  style={{
                    color: selected.key === l.key ? "white" : "black",
                    fontWeight: selected.key === l.key ? "bold" : "normal",
                  }}
                >
                  {l.title}
                  <View style={{ paddingLeft: 8, marginBottom: -4 }}>
                    {selected.key === l.key ? (
                      <Entypo name="check" size={24} color="white" />
                    ) : null}
                  </View>
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </View>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },
  button: {
    backgroundColor: "white",
    borderColor: "gray",
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  buttonTitle: {
    marginRight: 24,
  },
});

export default Dropdown;
