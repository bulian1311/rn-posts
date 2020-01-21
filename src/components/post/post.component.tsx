import React from "react";
import { View, ImageBackground, Text, TouchableOpacity } from "react-native";

import styles from "./post.styles";

type Props = {
  post: any;
  onOpen: (post: any) => void;
};

const Post = ({ post, onOpen }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={() => onOpen(post)}>
      <View style={styles.wrapper}>
        <ImageBackground style={styles.image} source={{ uri: post.img }}>
          <View style={styles.textWrap}>
            <Text style={styles.title}>
              {new Date(post.date).toLocaleDateString()}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default Post;
