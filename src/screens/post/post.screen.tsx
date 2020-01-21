import React, { useEffect } from "react";
import { View, Text, Image, Button, ScrollView, Alert } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderIcon from "../../components/header-icon";
import styles from "./post.styles";
import { DATA } from "../../data";
import { THEME } from "../../theme";

type Props = {
  navigation: NavigationStackProp;
};

const Post = ({ navigation }: Props) => {
  const postId = navigation.getParam("postId");

  const post = DATA.find(p => p.id === postId);

  // useEffect(() => {
  //   navigation.setParams({ booked: post.booked });
  // }, []);

  const removeHandler = () => {
    Alert.alert(
      "Удалить",
      "Удалить пост?",
      [
        { text: "Отменить", style: "cancel" },
        { text: "Удалить", onPress: () => {}, style: "destructive" }
      ],
      { cancelable: false }
    );
  };

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
  const iconName = booked ? "ios-star" : "ios-star-outline";
  return {
    headerTitle: `Пост ${postId}`,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderIcon}>
        <Item title="Take photo" iconName={iconName} onPress={() => {}} />
      </HeaderButtons>
    )
  };
};

export default Post;
