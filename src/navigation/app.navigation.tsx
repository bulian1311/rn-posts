import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";

import Main from "../screens/main";
import Booked from "../screens/bookmarked";
import Post from "../screens/post";
import About from "../screens/about";
import Create from "../screens/create";

import { THEME } from "../theme";

const navigatorOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff"
    },
    headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR
  }
};

const PostNavigator = createStackNavigator(
  {
    Main: {
      screen: Main
    },
    Post: {
      screen: Post
    }
  },
  navigatorOptions
);

const BookedNavigator = createStackNavigator(
  {
    Booked,
    Post
  },
  navigatorOptions
);

const AboutNavigator = createStackNavigator(
  {
    About
  },
  navigatorOptions
);

const CreateNavigator = createStackNavigator(
  {
    Create
  },
  navigatorOptions
);

const bottomTabsConfig = {
  Post: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarLabel: "Посты",
      tabBarIcon: info => (
        <Ionicons name="ios-albums" size={25} color={info.tintColor} />
      )
    }
  },
  Booked: {
    screen: BookedNavigator,
    navigationOptions: {
      tabBarLabel: "Избранное",
      tabBarIcon: info => (
        <Ionicons name="ios-star" size={25} color={info.tintColor} />
      )
    }
  }
};

const BottomNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(bottomTabsConfig, {
        activeColor: "#fff",
        barStyle: { backgroundColor: THEME.MAIN_COLOR }
      })
    : createBottomTabNavigator(bottomTabsConfig, {
        tabBarOptions: {
          activeTintColor: THEME.MAIN_COLOR,
          inactiveTintColor: "grey"
        }
      });

const MainNavigator = createDrawerNavigator(
  {
    PostTabs: {
      screen: BottomNavigator,
      navigationOptions: {
        drawerLabel: "Все посты"
        //drawerIcon: <Ionicons name="ios-star" />
      }
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        drawerLabel: "О приложении"
      }
    },
    Create: {
      screen: CreateNavigator,
      navigationOptions: {
        drawerLabel: "Создать пост"
      }
    }
  },
  {
    contentOptions: {
      activeTintColor: THEME.MAIN_COLOR,
      labelStyle: {
        fontFamily: "open-bold"
      }
    }
  }
);

const AppNavigation = createAppContainer(MainNavigator);

export default AppNavigation;
