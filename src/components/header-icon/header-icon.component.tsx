import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

type Props = {};

const HeaderIcon = (props: Props) => {
  return (
    <HeaderButton
      {...props}
      title="qqq"
      iconSize={24}
      color="#fff"
      IconComponent={Ionicons}
    />
  );
};

export default HeaderIcon;
