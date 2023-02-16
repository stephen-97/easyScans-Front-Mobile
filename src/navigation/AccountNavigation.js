import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import AccountScreen from "../screens/AccountScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Button from "../components/Button";
import AccountChangeEmailScreen from "../screens/AccountScreens/AccountChangeFormScreen";
import AccountDeleteFormScreen from "../screens/AccountScreens/AccountDeleteFormScreen";
import LoadingScreen from "../screens/UtilityScreens/LoadingScreen";

const AccountNavigation = (props) => {

  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
      >
        <Stack.Screen name={"AccountScreen"} component={AccountScreen}/>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name={"AccountChangeFormScreen"} component={AccountChangeEmailScreen}/>
          <Stack.Screen name={"AccountDeleteFormScreen"} component={AccountDeleteFormScreen}/>
        </Stack.Group>
      </Stack.Navigator>
  );
};

export default AccountNavigation;
