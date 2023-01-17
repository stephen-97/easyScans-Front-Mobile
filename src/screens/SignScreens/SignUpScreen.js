import React, {useState, useEffect, useRef} from "react";
import {View, StyleSheet, Animated, Text, TouchableOpacity, Image} from "react-native";
import {connect, useDispatch } from "react-redux";
import {setUser} from "../../redux/redux";
import jwt_decode from 'jwt-decode';
import {userObjectStorage} from "../../utility/security/encodeJwt";
import {SERVER} from "../../../config";
import {Formik} from "formik";
import InputText from "../../components/InputText";
import {icons} from "../../constants";
import Button from "../../components/Button";
import ButtonWithLogo from "../../components/ButtonWithLogo";
import colors from "../../constants/colors";
import SignUpForm from "../../components/formComponents/SignForm/SignUpForm";
import {useNavigation} from "@react-navigation/native";


const SignUpScreen = (props) => {

  const navigation = useNavigation();
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
      <View style={styles.container}>
        <View style={styles.inputsView}>
          <SignUpForm/>
          <Text style={styles.backPreviousPageText} onPress={() => navigation.navigate('SignInScreen')}>Retour</Text>
        </View>
      </View>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps )(SignUpScreen);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#f66c6c",
    flex: 1
  },
  inputsView:{
    backgroundColor: "white",
    paddingVertical: "7.5%",
    marginHorizontal: "2.5%",
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingHorizontal: "10%"
  },
  backPreviousPageText:{
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'gray',
  }
});