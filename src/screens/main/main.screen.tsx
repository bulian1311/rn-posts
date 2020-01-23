import React, { useEffect } from "react";
import { NavigationStackProp } from "react-navigation-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";

import PostList from "../../components/post-list";
import HeaderIcon from "../../components/header-icon";
import { loadPosts } from "../../store/actions/post.actions";

type Props = {
  navigation: NavigationStackProp;
};

const Main = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const allPosts = useSelector(state => state.post.allPosts);

  const openPostHandler = (post: any) => {
    navigation.navigate("Post", { postId: post.id, booked: post.booked });
  };

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return <PostList data={allPosts} onOpen={openPostHandler} />;
};

Main.navigationOptions = ({ navigation }) => {
  return {
    title: "Мой блог",
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

export default Main;
