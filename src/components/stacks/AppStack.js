import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "../screens/indexScreen";
import SingleItemScreen from "../screens/SingleItemScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={{
            title: "Movie App",
            headerStyle: {
              backgroundColor: "#2c3e50",
            },
            headerTitleStyle: {
              color: "#fff",
            },
          }}
        />

        <Stack.Screen name="Details" component={SingleItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
