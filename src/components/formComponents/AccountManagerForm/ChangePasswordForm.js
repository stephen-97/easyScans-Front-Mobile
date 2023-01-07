import React, {useState, useEffect, useRef} from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity} from "react-native";
import { icons } from "../../../constants";
import propTypes from "prop-types";
import {connect} from "react-redux";
import { useNavigation } from '@react-navigation/native';
import InputText from "../../InputText";
import Button from "../../Button";
import {Formik} from "formik";

const ChangeEmailForm = (props) => {


  const formVerification = (values) => {
    console.log(values)
    switch (values.newPassword === values.confirmNewPassword) {
      case true:
        break;
      case false:
        alert("Les mots de passes ne sont pas similaires")
        break;
      default:
        break;
    }
  }

  return (
      <View style={styles.container}>
        <Formik
            initialValues={{'newPassword': '', 'confirmNewPassword': '', 'password': ''}}
            onSubmit={values => formVerification(values)}
        >
          {({ handleChange,  handleSubmit, values }) => (
              <>
                <View style={styles.containerCurrentEmail}>
                  <InputText
                      onChangeText={handleChange('newPassword')}
                      title="Nouveau mot de passe"
                      placeholder="Nouveau mot de passe"
                  />
                  <InputText
                      onChangeText={handleChange('confirmNewPassword')}
                      title="Nouveau mot de passe"
                      placeholder="Nouveau mot de passe"
                  />
                </View>
                <InputText
                    onChangeText={handleChange('password')}
                    title="Mot de passe actuel"
                    placeholder="Mot de passe actuel"
                    password
                />
                <Button title={"Changer mot de passe"} onPress={() => handleSubmit()}/>
              </>
          )}
        </Formik>
      </View>
  );
};

ChangeEmailForm.propTypes = {
  user: propTypes.object,
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(ChangeEmailForm);


const styles = StyleSheet.create({
  container:{
    marginHorizontal: 30,
  },
  containerCurrentEmail: {
    marginVertical: 20
  }
});