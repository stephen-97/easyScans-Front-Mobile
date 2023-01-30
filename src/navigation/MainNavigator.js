import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomBarNav from "./BottomBarNav";
import LoadingScreen from "../screens/UtilityScreens/LoadingScreen";
import {NavigationContainer} from "@react-navigation/native";
import {connect} from "react-redux";
import SignInScreen from "../screens/SignScreens/SignInScreen";
import SignUpScreen from "../screens/SignScreens/SignUpScreen";
import propTypes from "prop-types";

const MainNavigator = (props) => {

  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator
            initialRouteName={'SignInScreen'}
            screenOptions={{
              headerShown: false,
            }}
        >
          {Object.keys(props.user).length === 0 ?
              <Stack.Group
                  screenOptions={{
                    animation: "none",
                    gestureEnabled: false,
                    presentation: "fullScreenModal",
                  }}
              >
                <Stack.Screen name={"SignInScreen"} component={SignInScreen}/>
                <Stack.Screen name={"SignUpScreen"} component={SignUpScreen}/>
              </Stack.Group>
              :
              <Stack.Group
                  screenOptions={{
                    animation: 'fade'
                  }}
              >
                <Stack.Screen name={"BottomBarNav"} component={BottomBarNav}/>
              </Stack.Group>

          }
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

MainNavigator.propTypes = {
  user: propTypes.object,
}


const mapStateToProps = state => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps )(MainNavigator);


