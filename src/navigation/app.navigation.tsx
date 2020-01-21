import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import Main from "../screens/main";
import Booked from "../screens/bookmarked";
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

const BookedNavigator = createStackNavigator(
  {
    Booked,
    Post
  },
  {
    initialRouteName: "Booked",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff"
      },
      headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR
    }
  }
);

const BottomNavigator = createBottomTabNavigator(
  {
    Post: {
      screen: PostNavigator,
      navigationOptions: {
        tabBarIcon: info => (
          <Ionicons name="ios-albums" size={25} color={info.tintColor} />
        )
      }
    },
    Booked: {
      screen: BookedNavigator,
      navigationOptions: {
        tabBarIcon: info => (
          <Ionicons name="ios-star" size={25} color={info.tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: THEME.MAIN_COLOR,
      inactiveTintColor: "grey"
    }
  }
);

const AppNavigation = createAppContainer(BottomNavigator);

export default AppNavigation;
