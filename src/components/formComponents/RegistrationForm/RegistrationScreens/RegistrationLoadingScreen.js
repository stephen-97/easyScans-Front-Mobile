import React, {useState, useEffect, useRef} from "react";
import { View, StyleSheet} from "react-native";
import Spinner from "../../../../utility/Spinner";


const RegistrationLoadingScreen = (props) => {

    return(
          <View style={styles.container}>
            <Spinner />
          </View>
      )
};

const styles = StyleSheet.create({
  container:{
    minHeight: 100, 
    justifyContent: "center",
  },
});

export default RegistrationLoadingScreen;

