import React, {useState, useEffect, useRef} from "react";
import { View, StyleSheet} from "react-native";
import Button from "../../../Button";
import ButtonWithLogo from "../../../ButtonWithLogo";
import InputText from "../../../InputText";
import { Formik } from "formik";
import { icons } from "../../../../constants";


const RegistrationFirstScreen = (props) => {

    const handleSubmit = () => {
      props.setRequestResponse({emailOrUsername: emailOrUsername, password: password})

    }
    const formVerification = (values) => {
      props.setLoginRequestResponse(values);
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

