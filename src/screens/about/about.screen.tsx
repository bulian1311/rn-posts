import React from "react";
import { View, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderIcon from "../../components/header-icon";

import styles from "./about.styles";

const About = () => {
  return (
    <View style={styles.wrapper}>
      <Text>{"About screen ".repeat(20)}</Text>
    </View>
  );
};

About.navigationOptions = ({ navigation }) => {
  return {
    title: "О приложении",
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

export default About;
