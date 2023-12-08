import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ImageCard = ({ item }) => (
  <View style={styles.imageContainer}>
    <Pressable android_ripple={{ color: "#ccc" }}>
      <View style={styles.imageDetails}>
        <Image source={{ uri: item.userImageURL }} style={styles.avatar} />
        <Text style={styles.username}>{item.user}</Text>
      </View>
      <Image source={{ uri: item.webformatURL }} style={styles.image} />
      <View style={styles.imageDetailsRow}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="heart-outline" size={25} color="red" />
          <Ionicons
            name="chatbubble-outline"
            size={20}
            color="black"
            style={{ marginLeft: 10 }}
          />
          <Ionicons
            name="share-social-outline"
            size={20}
            color="black"
            style={{ marginLeft: 10 }}
          />
        </View>
        <Ionicons name="bookmark-outline" size={20} color="black" />
      </View>
      <Text style={styles.likes}>{`${item.likes} likes`}</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 300,
    aspectRatio: 16 / 9,
  },
  imageDetails: {
    flexDirection: "row",
    marginTop: 10,
    padding: 10,
    alignItems: "center",
  },
  imageDetailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingBottom: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  likes: {
    fontSize: 14,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});

export default ImageCard;
