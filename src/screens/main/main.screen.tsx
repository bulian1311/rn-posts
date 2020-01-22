import React from "react";
import { NavigationStackProp } from "react-navigation-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import PostList from "../../components/post-list";
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

  return <PostList data={DATA} onOpen={openPostHandler} />;
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
