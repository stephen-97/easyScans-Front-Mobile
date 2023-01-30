import React, {useState, useEffect} from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import SignNavigation from "./SignNavigation";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { icons } from "../constants";
import AccountNavigation from "./AccountNavigation";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../constants/colors";
import HomeScreenNavigation from "./HomeScreenNavigation";

const BottomBarNav = (props) => {
  const Tab = createBottomTabNavigator();

  useEffect(() => {
  }, []);
  
  return (
      <Tab.Navigator
        initialRouteName={'Home'}
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#f66c6c',
            tabBarLabelStyle: {
              fontSize: 11,
              fontWeight: 'bold',
            },
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              backgroundColor: colors.darkButton,
              borderTopWidth: 10,
              borderTopColor: colors.darkButton
            },
        }}
        >
          <Tab.Screen
              name={"Home"}
              component={HomeScreenNavigation}
              options={{
                tabBarLabel: 'Accueil',
                tabBarIcon: ({ color, size }) => (
                    <Icon style={styles.icon} name='home-sharp' size={size} color={color} />
                ),
              }}
          />
          <Tab.Screen
              name="Login"
              component={AccountNavigation}
              options={{
                headerShown: false,
                tabBarLabel: 'Liste',
                tabBarIcon: ({ color, size }) => (
                    <Icon style={styles.icon} name={'md-list'} size={size} color={color} />
                ),
              }}
          />
          <Tab.Screen
              name="Books"
              component={AccountNavigation}
              options={{
                headerShown: false,
                tabBarLabel: 'Compte',
                tabBarIcon: ({ color, size }) => (
                    <Icon style={styles.icon} name={'md-settings-sharp'} size={size} color={color} />
                ),
              }}
          />
      </Tab.Navigator>
  );
};

export default BottomBarNav;

const styles = StyleSheet.create({
  navBar:{
    position: "relative",
    bottom: 0,
    height: 80,
    backgroundColor: "black",
    width: "100%",
    justifyContent: "flex-end",
  },
  inputsView:{
    backgroundColor: "white",
    paddingVertical: "15%",
    marginHorizontal: "2.5%",
    paddingHorizontal: "10%",
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
  }
});

/**
 * <Tab.Group
 *           screenOptions={{
 *             headerShown: false,
 *             presentation: 'modal',
 *             animationEnabled: true
 *           }}
 *         >
 *           <Tab.Screen
 *               name={"Utility"}
 *               component={UtilityNavigation}
 *               screenOptions={{
 *                 headerShown: false,
 *                 presentation: 'modal',
 *                 animationEnabled: true
 *               }}
 *               listeners={({navigation}) => {
 *                 navigation.navigate('LoadingScreen');
 *               }}
 *           />
 *         </Tab.Group>
 */