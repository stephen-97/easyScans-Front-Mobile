import React, {useState, useEffect, useRef} from "react";
import { View,  StyleSheet, Image, Text } from "react-native";
import { icons } from "../constants";

const RegistrationForm = (props) => {
  
    return (
      <View style={{justifyContent: "center", backgroundColor: "#f66c6c", flex: 1,}}>
        <View style={styles.inputsView}>
          <View style={styles.line}>
            <Image style={styles.avatar} source={icons.avatar}/>
          </View>
          <View style={styles.line}>
            <Text style={styles.text}>Utilisateur</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.text}>Email</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.text}>Date de création</Text>
          </View>
          <View style={styles.line}> 
            <Text style={styles.text}>Utilisateur</Text>
          </View>
        </View>
      </View>
    );
  };
  
  export default RegistrationForm;
  
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
      paddingVertical: "7.5%",
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      marginTop: 150,
      height: '100%'
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
    },
    avatar: {
      height: 220,
      width: 220,
      alignSelf: 'center'
    },
    line: {
      borderBottomWidth: 1,
      width: "100%",
      alignItems: 'center',
      borderColor: 'rgba(0,0,0,0.3)'
    },  
    text: {
      marginVertical: 10,
      fontSize: 18
    }
  });