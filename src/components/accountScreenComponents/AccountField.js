import React, {useState, useEffect, useRef} from "react";
import { StyleSheet, Image, Text, TouchableOpacity} from "react-native";
import { icons } from "../../constants";
import propTypes from "prop-types";
import {connect} from "react-redux";
import { useNavigation } from '@react-navigation/native';

const AccountField = (props) => {

  const navigation = useNavigation();

  const screenAccountNavigation = () => {
    switch (props.legend) {
      case 'Utilisateur':
        navigation.navigate("AccountChangeEmailScreen")
        break;
      case 'Email':
        navigation.navigate("AccountChangeEmailScreen")
        break;
      case 'Papayas':
        navigation.navigate("AccountChangeEmailScreen")
        break;
      default:
        break;
    }
  }
  return (
      <TouchableOpacity style={styles.line} onPress={() => screenAccountNavigation()}>
        <Text style={styles.legend}>{props.legend}</Text>
        <Text style={styles.text}>{props.user.length===0 ? props.user.createdAd : 'aaaaaaaaaaaa'}</Text>
        <Image style={styles.fieldIcon} source={icons.arrowHeadUp}/>
      </TouchableOpacity>
  );
};

AccountField.propTypes = {
  user: propTypes.object,
  legend: propTypes.string.isRequired,
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(AccountField);


const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 1,
    width: "100%",
    borderColor: 'rgba(0,0,0,0.3)',
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