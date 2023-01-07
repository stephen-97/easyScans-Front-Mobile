import React, {useState, useEffect, useRef} from "react";
import { StyleSheet, Image, Text, TouchableOpacity} from "react-native";
import { icons } from "../../constants";
import propTypes from "prop-types";
import {connect} from "react-redux";
import { useNavigation } from '@react-navigation/native';
import ChangeEmailForm from "../formComponents/AccountManagerForm/ChangeEmailForm";
import ChangePasswordForm from "../formComponents/AccountManagerForm/ChangePasswordForm";

const AccountField = (props) => {

  const navigation = useNavigation();

  const screenAccountNavigation = () => {
    switch (props.legend) {
      case 'Changer Email':
        navigation.push("AccountChangeFormScreen", {legend: props.legend})
        break;
      case 'Changer Mot de passe':
        navigation.push("AccountChangeFormScreen", {legend: props.legend})
        break;
      default:
        break;
    }
  }
  return (
      <TouchableOpacity style={styles.container} onPress={() => screenAccountNavigation()}>
        <Text style={styles.legend}>{props.legend}</Text>
        <Text style={styles.text}>{props.user.length===0 ? props.user.createdAd : 'aaaaaaaaaaaa'}</Text>
        {{
          true: <Image style={styles.fieldIcon} source={icons.arrowHeadUp}/>,
        }[props.touchable]}
      </TouchableOpacity>
  );
};

AccountField.propTypes = {
  user: propTypes.object,
  legend: propTypes.string.isRequired,
  touchable: propTypes.bool,
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(AccountField);


const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 55,
    justifyContent: 'center'
  },
  legend:{
    fontSize: 16,
    position: 'absolute',
    fontWeight: 'bold',
    left: 20
  },
  text: {
    marginVertical: 10,
    fontSize: 16,
    color: 'gray',
    position: 'absolute',
    fontWeight: 'bold',
    right: 50,
  },
  fieldIcon: {
    position: 'absolute',
    right: 10,
    height: 25,
    width: 25
  }
});