import React, {useEffect, useState} from "react";
import { TextInput, StyleSheet, View, Text, TouchableOpacity, Image} from "react-native";
import colors from "../constants/colors";
import propTypes from "prop-types";

const ButtonWithLogo = (props) => {
    const [onFocus, setOnFocus] = useState(false);

    return(
        <TouchableOpacity
            style={[styles.button, props.extraStyle]}
            onPress={props.onPress}
        >
            <Text style={[styles.title, props.extraStyleTitle]}>{props.title}</Text>
            <Image style={styles.icon} source={props.source} />
        </TouchableOpacity>
    )
}

ButtonWithLogo.propTypes = {
    extraStyle: propTypes.object,
    extraStyleTitle: propTypes.object,
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
        flexDirection: 'row',
        justifyContent: 'center'
    },
    title:{
        fontSize: 20,
        marginHorizontal: 10,
    },
    icon:{
        height: 40,
        width: 40,
        marginHorizontal: 10,
    }
})

export default ButtonWithLogo;