import React, {useState, useEffect, useRef} from "react";
import { View, StyleSheet, Text} from "react-native";
import Button from "../../../Button";
import ButtonWithLogo from "../../../ButtonWithLogo";
import InputText from "../../../InputText";
import { Formik } from "formik";
import { icons } from "../../../../constants";
import {validate} from "../../../../redux/redux";
import colors from "../../../../constants/colors";
import propTypes from "prop-types";

const RegistrationFirstScreen = (props) => {

    const formVerification = (values) => {
      const object = {
        'emailOrUsername': values.emailOrUsername.toLowerCase(),
        'password': values.password
      }
      props.setLoginRequestResponse(object);
    }

    return(
          <View style={styles.container}>
            <Formik
              initialValues={{'emailOrUsername': '', 'password': ''}}
              onSubmit={values => formVerification(values)}
            >
              {({ handleChange,  handleSubmit, values }) => (
              <>
                <InputText onChangeText={handleChange('emailOrUsername')} title="Email" placeholder="Email " value={null} icon={icons.email}/>
                <InputText onChangeText={handleChange('password')} title="password" password placeholder="Mot de passe " value={null} icon={icons.email}/>
                <Button onPress={() => handleSubmit()} title="Connexion "/>

              </>
              )}
              </Formik>
            <Text>Mot de passe oublié ? <Text onPress={() => alert("HEEEEY")}>Cliquez ici</Text> </Text>
            <ButtonWithLogo
              onPress={() => props.handleChangePage('formulaire')} 
              extraStyle={styles.extraStyleButton}  
              extraStyleTitle={styles.extraStyleTitle} 
              title="Connexion Gmail"
              source={icons.googleLogo}
            />
          </View>
      )
};

RegistrationFirstScreen.propTypes = {
  handleChangePage: propTypes.func,
  setLoginRequestResponse: propTypes.func,
}

const styles = StyleSheet.create({
  container:{
    minHeight: 100, 
    justifyContent: "center",
  },
  extraStyleButton: {
    backgroundColor: colors.darkButton,
  },
  extraStyleTitle: {
    color: 'white'
  }
});

export default RegistrationFirstScreen;

