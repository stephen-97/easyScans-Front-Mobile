import React, { useState} from "react";
import { TextInput, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import colors from "../constants/colors";
import propTypes from "prop-types";

const InputTextBorder = (props) => {
  const [onFocus, setOnFocus] = useState(false);


  return(
      <View style={styles.container}>
        {props.icon ? <Icon style={styles.icon} name={props.icon} size={30} color="gray" /> : null}
        <TextInput
            style={!onFocus ? styles.input : [styles.input, {borderColor: colors.inputBorderColorFocus}]}
            onFocus={() => setOnFocus(true)}
            onBlur={() => setOnFocus(false)}
            onChangeText={props.onChangeText}
            placeholder={props.placeholder}
            placeholderTextColor={colors.inputPlaceholderColor}
            secureTextEntry={!!props.password}
        />
      </View>
  )
}

InputTextBorder.propTypes = {
  icon: propTypes.string,
  onChangeText: propTypes.func,
  placeholder: propTypes.string,
  password: propTypes.string,
}


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  input: {
    backgroundColor: colors.inputColor,
    width: "100%",
    alignSelf: "center",
    marginVertical: "5%",
    height: 65,
    padding: "5%",
    paddingRight: "20%",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: colors.darkButton,
    fontSize: 16,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold"
  },
  icon:{
    position: "absolute",
    zIndex: 1,
    right: "7.5%",
  },
})

export default InputTextBorder;
