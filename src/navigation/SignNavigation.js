import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from "../screens/SignScreens/SignInScreen";
import SignUpScreen from "../screens/SignScreens/SignUpScreen";

const SignNavigation = () => {

  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
      >
        <Stack.Group
            screenOptions={{
              animation: "none",
              gestureEnabled: false,
            }}
            >
          <Stack.Screen name={"SignInScreen"} component={SignInScreen}/>
          <Stack.Screen name={"SignUpScreen"} component={SignUpScreen}/>
        </Stack.Group>
      </Stack.Navigator>
  );
};

export default SignNavigation;
