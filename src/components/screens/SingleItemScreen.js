import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getMovieDetails } from "../../services";
import Loading from "../Loading";
import { Image } from "@rneui/themed";

const SingleItemScreen = ({ navigation, route }) => {
  const { id, title } = route.params;

  //Update the title of the screen
  navigation.setOptions({
    title,
    headerBackTitle: "Back to Sales",
  });

  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDetail = async () => {
    setIsLoading(true);
    const details = await getMovieDetails(id);
    setMovieDetails(details);
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
            {movieDetails.title ?? movieDetails.name}
          </Text>

          <View style={styles.imgContainer}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`,
              }}
              style={{ width: 300, height: 300 }}
            />
          </View>

          <Text style={styles.textContainer}>{movieDetails.overview}</Text>

          <Text style={{ textAlign: "center", marginTop: 16 }}>
            Popularity: {movieDetails.popularity} | Release Date:{" "}
            {movieDetails.release_date}
          </Text>
        </View>
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
