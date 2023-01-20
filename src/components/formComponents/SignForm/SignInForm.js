import React, {useState, useEffect, useRef} from "react";
import {View, StyleSheet, Animated, Text, ActivityIndicator, Alert} from "react-native";
import {connect, useDispatch } from "react-redux";
//import {setUser} from "../../redux/redux";
import {setUser} from "../../../redux/redux";
import {userObjectStorage} from "../../../utility/security/encodeJwt";
import {SERVER} from "../../../../config";
import {Formik} from "formik";
import InputText from "../../InputText";
import {icons} from "../../../constants"
import Button from "../../Button";
import {useNavigation} from "@react-navigation/native";
import {Request} from "../../../request/requestFunctions";
import url from "../../../request/url";


const SignInForm= (props) => {

  const navigation = useNavigation();

  const dispatch = useDispatch();


  const formVerification = (values) => {
    if(values.emailOrUsername === '' || values.password === '') return alert("L'un des champs est vide");
    const bodyObject = {
      'emailOrUsername': values.emailOrUsername.toLowerCase(),
      'password': values.password
    }
    navigation.navigate('LoadingScreen');
    Request(url.signIn.method, url.signIn.endpoint, bodyObject, null)
        .then(data => {
          if(data.status === url.signIn.status) {
            dispatch(setUser(userObjectStorage(data.body.jwt)))
            navigation.goBack();
          } else {
            navigation.goBack();
            setTimeout(() => {
              alert(data.body.msg);
            }, 500)
          }
        })
        .catch((err) => {
          navigation.goBack();
          setTimeout(() => {
            alert('Erreur serveur');
          }, 500)
          console.log(err);
        })
  }

  return (
      <Formik
          initialValues={{'emailOrUsername': '', 'password': ''}}
          onSubmit={values => formVerification(values)}
      >
        {({ handleChange,  handleSubmit, values }) => (
            <>
              <InputText onChangeText={handleChange('emailOrUsername')} title="Email" placeholder="Email / Pseudo" value={null} icon={"username"}/>
              <InputText onChangeText={handleChange('password')} title="password" password placeholder="Mot de passe " value={null} icon={"password"}/>
              <Button onPress={() => handleSubmit()} title="Connexion "/>
            </>
        )}
      </Formik>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps )(SignInForm);

const styles = StyleSheet.create({
});