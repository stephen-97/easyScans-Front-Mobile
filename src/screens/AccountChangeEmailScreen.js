import React, {useState, useEffect, useRef} from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity} from "react-native";
import { icons } from "../constants"
import propTypes from "prop-types";
import {connect} from "react-redux";
import ChangeEmailForm from "../components/formComponents/AccountManagerForm/ChangeEmailForm";
import {useNavigation} from "@react-navigation/native";
import colors from "../constants/colors";

const AccountChangeEmailScreen = (props) => {

  const navigation = useNavigation();

  return (
      <View>
        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
          <Text style={styles.closeButtonText}>Fermer</Text>
        </TouchableOpacity>
        <ChangeEmailForm />
      </View>
  );
};

AccountChangeEmailScreen.propTypes = {
  user: propTypes.object,
  legend: propTypes.string.isRequired,
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(AccountChangeEmailScreen);

const styles = StyleSheet.create({
  closeButton:{
    width: "100%",
    height: "12.5%",
    backgroundColor: colors.darkButton,
    justifyContent: "center",
    alignItems: "center"
  },
  closeButtonText:{
    fontSize: 25,
    color: "#9f9f9f",
  },
});