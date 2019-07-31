import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useIsLoggedIn, useLogIn, useLogOut } from "../AuthContext";
import AuthNavigation from "../navigation/AuthNavigation";
import TabNavigation from "../navigation/TabNavigation";
import MainNavigation from "../navigation/MainNavigation";

export default () => {
  const isLoggedIn = false;

  return (
    <View style={{ flex: "1" }}>
      {isLoggedIn ? (
        <MainNavigation/>
      ) : (
        <AuthNavigation/>
      )}
    </View>
  );
};