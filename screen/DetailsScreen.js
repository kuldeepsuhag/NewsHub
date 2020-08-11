import React from "react";
import { View, Text, StyleSheet, ImageBackground, Linking } from "react-native";

const DetailsScreen = (props) => {
  const article = props.navigation.getParam("article");

  return (
    <View style={styles.screen}>
      <View>
        <ImageBackground
          style={styles.image}
          source={{ uri: article.urlToImage }}
        >
          <Text
            style={styles.title}
            onPress={() => Linking.openURL(article.url)}
          >
            {article.title}
          </Text>
        </ImageBackground>
        <View style={styles.detail}>
          <Text style={styles.author}>{article.author}</Text>
          <Text style={styles.author}>
            {new Date(article.publishedAt).toDateString()}
          </Text>
        </View>
        <Text>source: {article.url}</Text>
        <View style={styles.content}>
          <Text style={styles.textContent}> {article.content}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
  author: {
    fontSize: 20,
    color: "#888",
  },
  content: {
    marginTop: 20,
  },
  textContent: {
    fontSize: 20,
  },
  detail: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 40,
    fontWeight: "300",
    fontFamily: "Cochin",
    color: "white",
    position: "absolute",
    left: 0,

    bottom: 0,
  },
});

export default DetailsScreen;
