import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import InputText from "../components/InputText";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomAppearanceBarNav from "./BottomBarAppearanceNav";
import { icons } from "../constants";

const BottomBarNav = (props) => {
  const Tab = createBottomTabNavigator();

  const Test1 = () => {
    return(
        <ScrollView>
            <Text style={{fontSize: 50}}>Screen 1</Text>
            <Text style={{fontSize: 50}}>Screen 1</Text>
            <Text style={{fontSize: 50}}>Screen 1</Text>
            <Text style={{fontSize: 50}}>Screen 1</Text>
            <Text style={{fontSize: 50}}>Screen 1</Text>
            <Text style={{fontSize: 50}}>Screen 1</Text>
            <Text style={{fontSize: 50}}>Screen 1</Text>
            <Text style={{fontSize: 50}}>Screen 1</Text>
            <Text style={{fontSize: 50}}>Screen 1</Text>
            <Text style={{fontSize: 50}}>Screen 1</Text>
            <Text style={{fontSize: 50}}>Screen 1</Text>
            <Text style={{fontSize: 50}}>Screen 1</Text>
            <Text style={{fontSize: 50}}>Screen 1</Text>
            <Text style={{fontSize: 50}}>Screen 1</Text>
            <Text style={{fontSize: 50}}>Screen 1</Text>
            <Text style={{fontSize: 50}}>Screen 1</Text>
            <Text style={{fontSize: 50}}>Screen 1</Text>
        </ScrollView>
    )
  }
  const Test2 = () => {
    return(
        <View style={{justifyContent: "center", backgroundColor: "red", flex: 1,}}>
          <View style={styles.inputsView}>
            <InputText placeholder="hey"/>
            <InputText placeholder="hey"/>
          </View>
        </View>
    )
  }

  const Test3 = () => {
    return(
        <View>
            <Text>Screen 3</Text>
        </View>
    )
  }

  const [pagesInfo, setPagesInfo] = useState([
    {name: "Home", component: Test1, icon: icons.home},
    {name: "Login", component: Test2, icon: icons.user},
    {name: "Books", component: Test3, icon: icons.bd}
  ]);

  useEffect(() => {
  }, []);
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <BottomAppearanceBarNav pagesInfo={pagesInfo} {...props}/>}
        screenOptions={{
            headerShown: false
        }}
        >
          {pagesInfo.map((item, key) => {
            return(
            <Tab.Screen 
              key={key}
              name={item.name}
              component={Test2} 
              screenOptions={{
                headerShown: false
              }}
            />
          )
        })}
      </Tab.Navigator>
    </NavigationContainer>
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
    justifyContent: "center",
    alignContent: "flex-end",
    backgroundColor: "black",
    paddingVertical: "5%",
    marginHorizontal: "2.5%"
  }
});
