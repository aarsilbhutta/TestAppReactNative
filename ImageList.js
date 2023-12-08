import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import ImageCard from "./ImageCard";

const ImageList = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://pixabay.com/api/?key=41119631-eb9bb7509b1aa3c56e4460081&image_type=photo&per_page=50"
        );

        const data = await response.json();
        setImages(data.hits);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const renderItem = ({ item }) => <ImageCard item={item} />;

  return (
    <FlatList
      data={images}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    overflow: "hidden",
  },
});

export default ImageList;
