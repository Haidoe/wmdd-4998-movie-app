import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "../screens/indexScreen";

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

        {/* <Stack.Screen name="Show" component={ShowScreen} />
        <Stack.Screen name="Web" component={WebScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
