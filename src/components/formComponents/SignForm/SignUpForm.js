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

const SignUpScreen = (props) => {

  //animations
  const animValue = useRef(new Animated.Value(1)).current;



  const [requestResponse, setRequestResponse] = useState({status: null, message: null});

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
              initialValues={{email: '', username: '', password: '', confirmPassword: '', avatarUri: '', avatarBase64Data: ''}}
              onSubmit={values => formVerification(values)}
          >
            {({ handleChange,  handleSubmit, values }) => (
                <>
                  <InputText onChangeText={handleChange('email')} title="Email" placeholder="Email " value={null} icon={icons.userFormTest}/>
                  <InputText onChangeText={handleChange('username')} title="Username" placeholder="Username" value={null} icon={icons.userForm}/>
                  <InputText onChangeText={handleChange('password')} title="Password" placeholder="Password" password value={null} icon={icons.password}/>
                  <InputText onChangeText={handleChange('confirmPassword')} title="Confirm Password" placeholder="Confirm password" password value={null} icon={icons.password}/>
                  <TouchableOpacity
                      activeOpacity={.9}
                      style={styles.avatarField}
                      onPress={() => null}
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