import React from "react";
import { View, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderIcon from "../../components/header-icon";

import styles from "./create.styles";

const Create = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Create screen</Text>
    </View>
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
