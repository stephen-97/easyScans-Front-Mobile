import React, {useState, useEffect, useRef} from "react";
import {View, StyleSheet, ActivityIndicator} from "react-native";
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


const LoadingScreen = () => {



  return (
      <View style={styles.container}>
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator size="large" color="white" />
        </View>
      </View>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps )(LoadingScreen);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  activityIndicatorContainer: {
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: colors.darkButtonOpacity,
    height: 80,
    width: 80,
  }
});