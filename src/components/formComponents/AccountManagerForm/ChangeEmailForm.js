import React, {useState, useEffect, useRef} from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, ActivityIndicator} from "react-native";
import { icons } from "../../../constants";
import propTypes from "prop-types";
import {connect} from "react-redux";
import { useNavigation } from '@react-navigation/native';
import InputText from "../../InputText";
import Button from "../../Button";
import {Formik} from "formik";
import {correctEmail} from "../../../utility/formsVerifications/formVerificationFunctions";
import {Request} from "../../../request/requestFunctions";
import url from "../../../request/url";

const ChangeEmailForm = (props) => {

  const [emailUpdated, setEmailUpdated] = useState(false);
  const [loading, setLoading] = useState(false);

  const formVerification = (values) => {
    //const correct = (valuesc.email === values.confirmEmail) && (correctEmail(values.email) && correctEmail(values.confirmEmail))

    switch (true) {
      case true:
        const bodyObject = {
          'email' : values.email,
          'emailConfirm' : values.confirmEmail,
          'password' : values.password,
        }
        setLoading(true)
        Request(url.changeEmail.method, url.changeEmail.endpoint, bodyObject, null)
          .then(data => {
            if(data.status === url.changeEmail.status) {
              setEmailUpdated(true)
            } else {
              alert(data.body.msg)
            }
          })
          .catch((err) => console.log(err))
          .finally(() => {
            setLoading(false);
          });
        break;
      case false:
        alert("Les informations ne sont pas similaires")
        break;
      default:
        break;
    }
  }

  return (
      <View style={styles.container}>
        <Formik
            initialValues={{'email': '', 'confirmEmail': '', 'password': ''}}
            onSubmit={values => formVerification(values)}
        >
          {({ handleChange,  handleSubmit, values }) => (
              <>
                <View style={styles.containerCurrentEmail}>
                  <InputText
                      onChangeText={handleChange('email')}
                      title="Nouvel Email"
                      placeholder="Nouvel Email"
                  />
                  <InputText
                      onChangeText={handleChange('confirmEmail')}
                      title="Nouvel Email"
                      placeholder="Nouvel Email"
                  />
                </View>
                <InputText
                    onChangeText={handleChange('password')}
                    title="Mot de passe"
                    placeholder="Mot de passe"
                    password
                />
                <Button title={"Changer adresse mail"} onPress={() => handleSubmit()}/>
              </>
          )}
        </Formik>
        {loading ? <ActivityIndicator style={styles.loadingIcon} size="large" color="#000000" /> : null}
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
    marginVertical: 20,
  },
  loadingContainer: {
    backgroundColor: 'red',
    height: 500,
  },
  loadingIcon: {
    marginVertical: 30,
  }
});