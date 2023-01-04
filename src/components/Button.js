import React, {useEffect, useState} from "react";
import { TextInput, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../constants/colors";
import propTypes from 'prop-types';

const Button = (props) => {
    const [onFocus, setOnFocus] = useState(false);

    return(
        <TouchableOpacity
            style={[styles.button, props.extraStyle]}
            onPress={props.onPress}
        >
            <Text style={[styles.title, props.extraStyleText]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

Button.propTypes = {
    extraStyle: propTypes.object,
    extraStyleText: propTypes.object,
    title: propTypes.string.isRequired,
    onPress: propTypes.func.isRequired,
}

const styles = StyleSheet.create({
    button: {
        marginVertical: 10,
        backgroundColor: colors.submitButton,
        alignItems: "center",
        marginTop: "5%",
        height: 65,
        justifyContent: "center",
    },
    title:{
        fontSize: 20,
    }
})

export default Button;