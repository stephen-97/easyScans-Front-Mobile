import React, {useState, useEffect} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen/HomeScreen";

const HomeScreenNavigation = (props) => {

  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
      >
        <Stack.Screen name={"HomeScreen"} component={HomeScreen}/>
      </Stack.Navigator>
  );
};

export default HomeScreenNavigation;