import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderIcon from "../../components/header-icon";
import { useDispatch } from "react-redux";
import { NavigationStackProp } from "react-navigation-stack";

import styles from "./create.styles";
import { THEME } from "../../theme";
import { createPost } from "../../store/actions/post.actions";

type Props = {
  navigation: NavigationStackProp;
};

const Create = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const [text, setText] = useState<string>("");

  const img =
    "https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg";

  const saveHandler = () => {
    const post = {
      date: new Date().toJSON(),
      text,
      img,
      booked: false
    };

    dispatch(createPost(post));
    navigation.navigate("Main");
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Создать пост</Text>
          <TextInput
            style={styles.textarea}
            placeholder="Текст поста"
            value={text}
            onChangeText={setText}
            multiline
          />
          <Image
            style={styles.image}
            source={{
              uri: img
            }}
          />
          <Button
            title="Создать"
            color={THEME.MAIN_COLOR}
            onPress={saveHandler}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

Create.navigationOptions = ({ navigation }) => {
  return {
    title: "Создать",
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

export default Create;
