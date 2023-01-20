import React, {useState, useEffect, useRef} from "react";
import {View, StyleSheet, Animated, Text, TouchableOpacity,Image} from "react-native";
import {connect, useDispatch } from "react-redux";
//import {setUser} from "../../redux/redux";
import {setUser} from "../../../redux/redux";
import {userObjectStorage} from "../../../utility/security/encodeJwt";
import {SERVER} from "../../../../config";
import {Formik} from "formik";
import InputText from "../../InputText";
import {icons} from "../../../constants"
import Button from "../../Button";
import colors from "../../../constants/colors";
import {useNavigation} from "@react-navigation/native";
import {Request} from "../../../request/requestFunctions";
import url from "../../../request/url";
import * as ImagePicker from "expo-image-picker";

const SignUpScreen = (props) => {

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const formVerification = (values) => {
    console.log(values.username)
    if(values.email === '' || values.username === '' ||  values.password === '' ||  values.confirmPassword === '') return alert("L'un des champs est vide");
    const bodyObject = JSON.stringify({
      'email': values.email.toLowerCase(),
      'username': values.username,
      'password': values.password,
      'confirmPassword': values.confirmPassword,
      'avatar': values.avatarBase64Data
    });
    navigation.navigate('LoadingScreen');
    Request(url.signUp.method, url.signUp.endpoint, bodyObject, null)
        .then(data => {
          console.log(data)
          if(data.status === url.signUp.status) {
            //dispatch(setUser(userObjectStorage(data.body.jwt)))
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

  const chooseAvatar = async (handleChange) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      handleChange('avatar')(result.base64);
    }
  };

  return (
          <Formik
              initialValues={{email: '', username: '', password: '', confirmPassword: '', avatarUri: '', avatarBase64Data: ''}}
              onSubmit={values => formVerification(values)}
          >
            {({ handleChange,  handleSubmit, values }) => (
                <>
                  <InputText onChangeText={handleChange('email')} title="Email" placeholder="Email " value={null} icon={"email"}/>
                  <InputText onChangeText={handleChange('username')} title="Username" placeholder="Username" value={null} icon={"username"}/>
                  <InputText onChangeText={handleChange('password')} title="Password" placeholder="Password" password value={null} icon={"password"}/>
                  <InputText onChangeText={handleChange('confirmPassword')} title="Confirm Password" placeholder="Confirm password" password value={null} icon={"password"}/>
                  <TouchableOpacity
                      activeOpacity={.9}
                      style={styles.avatarField}
                      onPress={() => chooseAvatar(handleChange)}
                  >
                    <>
                      <Image style={styles.avatar} source={values.avatarUri && values.avatarBase64Data? {uri: "data:image/png;base64," + values.avatarBase64Data }: icons.avatar}/>
                    </>
                  </TouchableOpacity>
                  <Button onPress={() => handleSubmit()} title="Submit"/>
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
export default connect(mapStateToProps )(SignUpScreen);

const styles = StyleSheet.create({

  avatarField:{
    backgroundColor: "white",
    width: "100%",
    alignSelf: "center",
    marginVertical: "5%",
    height: 80,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "gray",
    borderStyle: "dashed",
    fontSize: 20,
    justifyContent: "center",
  },
  avatarText : {
    justifyContent: "center",
    fontWeight:"500",
    fontSize: 15,
    alignItems: "center",
  },
  avatar:{
    alignSelf: "center",
    height: 70,
    width: 70,
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 1,
  },
});