import React, { useEffect, useCallback } from "react";
import { View, Text, Image, Button, ScrollView, Alert } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";

import HeaderIcon from "../../components/header-icon";
import styles from "./post.styles";
import { THEME } from "../../theme";
import { toggleBooked, removePost } from "../../store/actions/post.actions";

type Props = {
  navigation: NavigationStackProp;
};

const Post = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const postId = navigation.getParam("postId");

  const booked = useSelector(state =>
    state.post.bookedPosts.some(post => post.id === postId)
  );

  const post = useSelector(state =>
    state.post.allPosts.find(p => p.id === postId)
  );

  useEffect(() => {
    navigation.setParams({ booked });
  }, [booked]);

  const toggleHandler = useCallback(() => {
    dispatch(toggleBooked(postId));
  }, [dispatch, postId]);

  useEffect(() => {
    navigation.setParams({ toggleHandler });
  }, [toggleHandler]);

  const removeHandler = () => {
    Alert.alert(
      "Удалить",
      "Удалить пост?",
      [
        { text: "Отменить", style: "cancel" },
        {
          text: "Удалить",
          style: "destructive",
          onPress: () => {
            navigation.navigate("Main");
            dispatch(removePost(postId));
          }
        }
      ],
      { cancelable: false }
    );
  };

  if (!post) return null;

  return (
    <ScrollView style={styles.wrapper}>
      <Image source={{ uri: post.img }} style={styles.image} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text.repeat(10)}</Text>
      </View>
      <Button
        title="Удалить"
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
    </ScrollView>
  );
};

Post.navigationOptions = ({ navigation }) => {
  const postId = navigation.getParam("postId");
  const booked = navigation.getParam("booked");
  const toggleHandler = navigation.getParam("toggleHandler");
  const iconName = booked ? "ios-star" : "ios-star-outline";

  return {
    headerTitle: `Пост ${postId}`,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderIcon}>
        <Item title="Take photo" iconName={iconName} onPress={toggleHandler} />
      </HeaderButtons>
    )
  };
};

export default Post;
