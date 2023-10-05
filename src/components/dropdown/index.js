import { Modal, StyleSheet, Text, View } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { BottomSheet, Button, ListItem } from "@rneui/themed";

const Dropdown = ({ onChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  const [selected, setSelected] = useState({
    title: "Popular",
    key: "popular",
  });

  const list = [
    {
      title: "Now Playing",
      key: "now_playing",
      onPress: () => handleOnPress("now_playing"),
    },
    {
      title: "Popular",
      key: "popular",
      onPress: () => handleOnPress("popular"),
    },
    {
      title: "Top Rated",
      key: "top_rated",
      onPress: () => handleOnPress("top_rated"),
    },
    {
      title: "Upcoming",
      key: "upcoming",
      onPress: () => handleOnPress("upcoming"),
    },
  ];

  const handleOnPress = (selected) => {
    setIsVisible(false);

    const selectedObj = list.find((l) => l.key === selected);

    setSelected(selectedObj);

    onChange(selected);
  };

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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "white",
    borderColor: "gray",
    borderStyle: "solid",
    borderWidth: 1,
  },
  buttonTitle: {
    marginRight: 24,
  },
});

export default Dropdown;
