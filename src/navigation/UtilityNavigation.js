import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import AccountScreen from "../screens/AccountScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Button from "../components/Button";
import AccountChangeEmailScreen from "../screens/accountScreens/AccountChangeFormScreen";
import AccountDeleteFormScreen from "../screens/accountScreens/AccountDeleteFormScreen";
import LoadingScreen from "../screens/UtilityScreens/LoadingScreen";

const UtilityNavigation = (props) => {

  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator
          screenOptions={{
            headerShown: false,
            presentation: 'modal'
          }}
      >
        <Stack.Group screenOptions={{ presentation: 'modal'}}>
          <Stack.Screen name={"LoadingScreen"} component={LoadingScreen}/>
        </Stack.Group>
      </Stack.Navigator>
  );
};

export default UtilityNavigation;
