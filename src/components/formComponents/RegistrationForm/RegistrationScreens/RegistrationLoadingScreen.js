import React, {useState, useEffect, useRef} from "react";
import { View, StyleSheet, Text} from "react-native";
import Spinner from "../../../../utility/Spinner";


const RegistrationLoadingScreen = (props) => {


    return(
          <View style={styles.container}>
            {
              props.requestResponse ? <Text style={styles.text}>{props.requestResponse.msg}</Text>  : null
            }
          </View>
      )
};

const styles = StyleSheet.create({
  container:{
    minHeight: 100, 
    justifyContent: "center",
  },
  text:{
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default RegistrationLoadingScreen;

