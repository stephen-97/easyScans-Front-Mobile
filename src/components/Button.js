import React, {useEffect, useState} from "react";
import { TextInput, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

const Button = (props) => {
    const [onFocus, setOnFocus] = useState(false);

    return(
        <TouchableOpacity
            style={styles.button}
            onPress={props.onPress}
        >
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    )
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