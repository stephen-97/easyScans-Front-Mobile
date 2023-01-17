import React, {useState, useEffect, useRef} from "react";
import {View, StyleSheet, Animated, Text} from "react-native";
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
import {useNavigation} from "@react-navigation/native";
import SignInForm from "../../components/formComponents/SignForm/SignInForm";


const SignInScreen = (props) => {


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
      <View style={styles.container}>
        <View style={styles.inputsView}>
              <SignInForm />
              <ButtonWithLogo
                  onPress={() => props.handleChangePage('formulaire')}
                  extraStyle={styles.extraStyleButton}
                  extraStyleTitle={styles.extraStyleTextButton}
                  title="Connexion Gmail"
                  source={icons.googleLogo}
              />
              <Text style={styles.passwordForgottenText}>Mot de passe oublié ? <Text style={styles.passwordForgottenOnPress} onPress={() => alert("HEEEEY")}>Cliquez ici</Text>
              </Text>
              <Text style={styles.passwordForgottenText}>Pas encore inscrit ? <Text style={styles.passwordForgottenOnPress} onPress={() => navigation.navigate('SignUpScreen')}>Créer un compte</Text>
              </Text>
        </View>
      </View>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps )(SignInScreen);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#f66c6c",
    flex: 1
  },
  navBar:{
    position: "relative",
    bottom: 0,
    height: 80,
    backgroundColor: "black",
    width: "100%",
    justifyContent: "flex-end",
  },
  inputsView:{
    backgroundColor: "white",
    paddingVertical: "7.5%",
    marginHorizontal: "2.5%",
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingHorizontal: "10%"
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonBottomContainer: {
    marginTop: 40,
  },
  extraStyleButton: {
    backgroundColor: colors.darkButton,
  },
  extraStyleTextButton: {
    color: 'white'
  },
  passwordForgottenText: {
    fontWeight: '500',
    marginVertical: 5,
  },
  passwordForgottenOnPress: {
    color: 'gray',
    fontWeight: 'bold'
  }
});

/**
 *
 * <View style={styles.buttonBottomContainer}>
 *           <ButtonWithLogo
 *               onPress={() => props.handleChangePage('formulaire')}
 *               extraStyle={styles.extraStyleButton}
 *               extraStyleTitle={styles.extraStyleTextButton}
 *               title="Connexion Gmail"
 *               source={icons.googleLogo}
 *           />
 *           <Button
 *               extraStyle={styles.extraStyleButton}
 *               extraStyleText={styles.extraStyleTextButton}
 *               onPress={() => null}
 *               title="Créer un compte "
 *           />
 *         </View>
 */