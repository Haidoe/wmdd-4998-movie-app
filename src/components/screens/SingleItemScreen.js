import { useEffect } from "react";
import { Text, View } from "react-native";

const SingleItemScreen = ({ navigation, route }) => {
  const { id, title } = route.params;

  //Update the title of the screen
  navigation.setOptions({
    title,
    headerBackTitle: "Back",
  });

  useEffect(() => {
    console.log("ID", id);
  }, []);

  return (
    <View>
      <Text>Single Item Screen: {id}</Text>
    </View>
  );
};

export default SingleItemScreen;
