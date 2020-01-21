import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Post from "../../components/post";
import HeaderIcon from "../../components/header-icon";
import styles from "./main.styles";
import { DATA } from "../../data";

type Props = {
  navigation: NavigationStackProp;
};

const Main = ({ navigation }: Props) => {
  const openPostHandler = (post: any) => {
    navigation.navigate("Post", { postId: post.id, booked: post.booked });
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
      />
    </View>
  );
};

Main.navigationOptions = {
  title: "Мой блог",
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={HeaderIcon}>
      <Item title="Take photo" iconName="ios-camera" onPress={() => {}} />
    </HeaderButtons>
  ),
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={HeaderIcon}>
      <Item title="Toggle Drawer" iconName="ios-menu" onPress={() => {}} />
    </HeaderButtons>
  )
};

export default Main;
