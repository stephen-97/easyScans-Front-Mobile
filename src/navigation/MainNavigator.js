import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import AccountScreen from "../screens/AccountScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomBarNav from "./BottomBarNav";
import LoadingScreen from "../screens/UtilityScreens/LoadingScreen";
import {NavigationContainer} from "@react-navigation/native";

const MainNavigator = (props) => {

  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator
            initialRouteName={'BottomBarNav'}
            screenOptions={{
              headerShown: false,
            }}
        >
          <Stack.Screen name={"BottomBarNav"} component={BottomBarNav}/>
          <Stack.Group
              screenOptions={{
                presentation: 'containedTransparentModal',
                animation: "none",
              }}
          >
            <Stack.Screen  name={"LoadingScreen"} component={LoadingScreen}/>
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default MainNavigator;
