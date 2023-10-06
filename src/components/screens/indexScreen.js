import { View, Text } from "react-native";
import MovieContainer from "../containers/MovieContainer";
import TvShowsContainer from "../containers/TvShowsContainer";
import { Tab } from "@rneui/themed";
import { TabView } from "@rneui/base";
import { useState } from "react";
import SearchContainer from "../containers/SearchContainer";

const IndexScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "black",
          height: 2,
        }}
      >
        <Tab.Item
          title="Movies"
          titleStyle={{
            color: index === 0 ? "black" : "gray",
            fontSize: 12,
          }}
        />

        <Tab.Item
          title="Search Results"
          titleStyle={{
            color: index === 1 ? "black" : "gray",
            fontSize: 12,
          }}
        />

        <Tab.Item
          title="TV Shows"
          titleStyle={{
            color: index === 2 ? "black" : "gray",
            fontSize: 12,
          }}
        />
      </Tab>

      <TabView value={index} onChange={setIndex}>
        <TabView.Item
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <MovieContainer navigation={navigation} />
        </TabView.Item>

        <TabView.Item
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
          <SearchContainer />
        </TabView.Item>

        <TabView.Item
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
          <TvShowsContainer navigation={navigation} />
        </TabView.Item>
      </TabView>
    </>
  );
};

export default IndexScreen;
