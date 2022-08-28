import React, {useEffect, useState} from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { icons } from "../constants";


const BottomAppearanceBarNav = (props) => {


    return (
        <View style={styles.container}>
          <Image style={styles.background} source={icons.backgroundColor} blurRadius={90} />
            {props.pagesInfo.map((item, key) => {
              return(
                <TouchableOpacity
                  key={key}
                  accessibilityRole="button"
                  style={{ flex: 1, alignItems: "center" }}
                  onPress={() => props.navigation.navigate(item.name)}
                >
                  <Image style={styles.icon} source={item.icon} />
                </TouchableOpacity>
              )
            })}
        </View>
      );
};

export default BottomAppearanceBarNav;

const styles = StyleSheet.create({
  container:{
    flexDirection: "row",
    width: "100%",
    height: 80,
  },
  icon:{
    height: 35,
    width: 35,
    top: "15%",
  },
  background: {
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0.7
  }
});
