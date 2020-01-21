import React from "react";
import { Platform, Text, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderIcon from "../components/header-icon";
import Main from "../screens/main";
import Post from "../screens/post";

import { THEME } from "../theme";

const PostNavigator = createStackNavigator(
  {
    Main: {
      screen: Main
    },
    Post: {
      screen: Post
    }
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff"
      },
      headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR
    }
  }
);

const AppNavigation = createAppContainer(PostNavigator);

export default AppNavigation;
