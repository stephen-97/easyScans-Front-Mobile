import React, {useState, useEffect, useRef} from "react";
import {StyleSheet, Image, Text, TouchableOpacity, Switch, View} from "react-native";
import { icons } from "../../constants";
import propTypes from "prop-types";
import colors from "../../constants/colors";
import AccountField from "./AccountField";

const AccountFieldToggleButton = (props) => {

  return (
      <TouchableOpacity style={styles.line}>
        <Text style={styles.legend}>{props.legend}</Text>
        <View style={styles.text}>
          <Switch
              trackColor={{ false: colors.darkButton, true: colors.submitButton }}
              thumbColor={props.isEnabled ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={props.toggleSwitch}
              value={props.isEnabled}
          />
        </View>
      </TouchableOpacity>
  );
};

AccountFieldToggleButton.propTypes = {
  user: propTypes.object,
  legend: propTypes.string.isRequired,
  isEnabled: propTypes.bool,
  toggleSwitch: propTypes.func,
}

export default AccountFieldToggleButton;

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