import { useEffect, useState } from "react";
import {
  ScrollView,
  ScrollViewBase,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { getMovieDetails, getTvDetails } from "../../services";
import Loading from "../Loading";
import { Image } from "@rneui/themed";

const SingleItemScreen = ({ navigation, route }) => {
  const { id, title, type } = route.params;

  //Update the title of the screen
  navigation.setOptions({
    title,
    headerBackTitle: "Back to Screen",
  });

  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDetail = async () => {
    setIsLoading(true);

    let details =
      type === "movie" ? await getMovieDetails(id) : await getTvDetails(id);

    setDetails(details);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDetail(id);
  }, []);

  return (
    <View>
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView>
          <View style={styles.container}>
            <Text
              style={{
                textAlign: "center",
                marginTop: 36,
                marginBottom: 16,
                fontWeight: "bold",
                fontSize: 24,
              }}
            >
              {details.title ?? details.name}
            </Text>

            <View style={styles.imgContainer}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${details.poster_path}`,
                }}
                style={{ width: 300, height: 300 }}
              />
            </View>

            <Text style={styles.textContainer}>{details.overview}</Text>

            <Text style={{ textAlign: "center", marginTop: 16 }}>
              Popularity: {details.popularity} | Release Date:{" "}
              {details.release_date ?? details.first_air_date}
            </Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 16,
    height: "100%",
    gap: 16,
  },

  imgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  textContainer: {
    width: 320,
    marginRight: "auto",
    marginLeft: "auto",
  },
});

export default SingleItemScreen;
