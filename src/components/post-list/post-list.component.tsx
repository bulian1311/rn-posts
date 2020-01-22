import React from "react";
import { View, FlatList } from "react-native";

import Post from "../post";

import styles from "./post-list.styles";

type Props = {
  data: any[];
  onOpen: (post: any) => void;
};

const PostList = ({ data, onOpen }: Props) => {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => (
          <Post post={item} onOpen={() => onOpen(item)} />
        )}
      />
    </View>
  );
};

export default PostList;
