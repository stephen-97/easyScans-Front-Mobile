import React, {useState, useEffect, useRef} from "react";
import { View, StyleSheet} from "react-native";
import Button from "../../../Button";
import ButtonWithLogo from "../../../ButtonWithLogo";
import { icons } from "../../../../constants";


const RegistrationFirstScreen = (props) => {

    return(
          <View style={styles.container}>
            <Button onPress={() => props.handleChangePage('formulaire')} title="Connexion gmail"/>
            <ButtonWithLogo
              onPress={() => null} 
              extraStyle={styles.extraStyleButton}  
              extraStyleTitle={styles.extraStyleTitle} 
              title="Créer compte"
              source={icons.googleLogo}
            />
          </View>
      )
};

const styles = StyleSheet.create({
  container:{
    minHeight: 100, 
    justifyContent: "center",
  },
  extraStyleButton: {
    backgroundColor: '#3b3a3a',
  },
  extraStyleTitle: {
    color: 'white'
  }
});

export default RegistrationFirstScreen;

