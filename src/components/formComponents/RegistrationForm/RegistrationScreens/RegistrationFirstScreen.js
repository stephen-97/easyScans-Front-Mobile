import React, {useState, useEffect, useRef} from "react";
import { View, StyleSheet} from "react-native";
import Button from "../../../Button";


const RegistrationFirstScreen = (props) => {
  
    return(
          <View style={styles.container}>
            <Button onPress={() => props.handleChangePage()} title="Connexion gmail"/>
            <Button onPress={() => null} title="Créer compte"/>
          </View>
      )
};

const styles = StyleSheet.create({
  container:{
    minHeight: 100, 
    justifyContent: "center",
  },
});

export default RegistrationFirstScreen;

