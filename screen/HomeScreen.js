import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import NewsCard from "../components/NewsCard";
import { FlatList } from "react-native-gesture-handler";
const HomeScreen = (props) => {
  const [articles, setarticles] = useState([]);
  const [isRefreshing, setisRefreshing] = useState(false);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    setisRefreshing(true);

    try {
      let articles = await fetch(
        "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=ed06ec12c3fb4831a1d3f19af4df2451"
      );

      let result = await articles.json();
      articles = null;

      setarticles(result.articles);
      setisRefreshing(false);
    } catch (error) {
      throw error;
    }
  };

  if (articles.length === 0) {
    return (
      <View style={styles.screen}>
        <ActivityIndicator animating={true} size="large" />
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <FlatList
        onRefresh={getData}
        data={articles}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={getData} />
        }
        initialNumToRender={10}
        keyExtractor={(item) => item.title}
        renderItem={(itemData) => (
          <NewsCard
            image={itemData.item.urlToImage}
            title={itemData.item.title}
            author={itemData.item.author}
            datepublish={itemData.item.publishedAt}
            content={itemData.item.description}
            viewDetails={() => {
              props.navigation.navigate("Details", {
                article: itemData.item,
              });
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
});

export default HomeScreen;
