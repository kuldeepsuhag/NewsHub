import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

const NewsCard = (props) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  let image = props.image;
  if (!image) {
    image =
      "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483097.jpg";
  }
  return (
    <View style={styles.news}>
      <View style={styles.touchable}>
        <TouchableCmp
          activeOpacity={0.9}
          onPress={props.viewDetails}
          useForeground
        >
          <View>
            <Text style={styles.author}>{props.author}</Text>
            <Text style={styles.date}>
              {new Date(props.datepublish).toDateString()}
            </Text>
            <Image
              style={styles.image}
              source={{ uri: image }}
              resizeMode="contain"
            />
            <Text style={styles.title}>{props.title}</Text>

            <View style={{ paddingVertical: 20 }}>
              <Text style={{ fontSize: 20 }}>{props.content}</Text>
            </View>
          </View>
        </TouchableCmp>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  news: {
    shadowColor: "black",
    overflow: "hidden",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 500,
    margin: 10,
  },
  touchable: {
    overflow: "hidden",
    borderRadius: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "300",
    fontFamily: "Cochin",
  },
  image: {
    width: "100%",
    height: 250,
  },
  details: {
    backgroundColor: "#c2c2c2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  author: {
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
  },
  date: {
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
    color: "#888",
  },
});
export default NewsCard;
