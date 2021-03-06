import React from "react";
import { NavigationStackProp } from "react-navigation-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import PostList from "../../components/post-list";
import HeaderIcon from "../../components/header-icon";

type Props = {
  navigation: NavigationStackProp;
};

const Bookmarked = ({ navigation }: Props) => {
  const data = useSelector(state => state.post.bookedPosts);

  const openPostHandler = (post: any) => {
    navigation.navigate("Post", { postId: post.id, booked: post.booked });
  };

  return <PostList data={data} onOpen={openPostHandler} />;
};

Bookmarked.navigationOptions = ({ navigation }) => {
  return {
    title: "Избранное",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderIcon}>
        <Item
          title="Take photo"
          iconName="ios-camera"
          onPress={() => navigation.navigate("Create")}
        />
      </HeaderButtons>
    ),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderIcon}>
        <Item
          title="Toggle Drawer"
          iconName="ios-menu"
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    )
  };
};

export default Bookmarked;
