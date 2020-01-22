import React from "react";
import { NavigationStackProp } from "react-navigation-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import PostList from "../../components/post-list";
import HeaderIcon from "../../components/header-icon";
import { DATA } from "../../data";

type Props = {
  navigation: NavigationStackProp;
};

const Bookmarked = ({ navigation }: Props) => {
  const data = DATA.filter(p => p.booked);

  const openPostHandler = (post: any) => {
    navigation.navigate("Post", { postId: post.id, booked: post.booked });
  };

  return <PostList data={data} onOpen={openPostHandler} />;
};

Bookmarked.navigationOptions = {
  title: "Избранное",
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

export default Bookmarked;
