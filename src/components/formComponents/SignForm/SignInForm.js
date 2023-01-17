import React, {useState, useEffect, useRef} from "react";
import {View, StyleSheet, Animated, Text} from "react-native";
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


const SignInForm= (props) => {


  const navigation = useNavigation();

  const dispatch = useDispatch();

  const SignInRequest = async (values) => {
    return fetch(`http://${SERVER}/API/signing`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values)
    })
        .then((response) => response.json())
        .then((jsonData) => {
          if(jsonData.status !== 200){
            alert(jsonData.msg)
          } else {
            setRequestResponse(jsonData)
            dispatch(setUser(userObjectStorage(jsonData.jwt)))
          }
        });
  };

  const formVerification = (values) => {
    if(values.emailOrUsername === '' || values.emailOrUsername === '') return alert("L'un des champs est vide");
    const object = {
      'emailOrUsername': values.emailOrUsername.toLowerCase(),
      'password': values.password
    }
  }

  return (
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