import React, { useState} from "react";
import { TextInput, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import colors from "../constants/colors";
import propTypes from "prop-types";

const InputText = (props) => {
    const [onFocus, setOnFocus] = useState(false);

    const choiceIcon = () => {
        switch (props.icon) {
            case 'email':
                return 'mail'
            case 'password':
                return 'lock-closed'
            case 'username':
                return 'person'
            default:
                return null
        }
    }

    return(
        <View style={styles.container}>
            {props.icon ? <Icon style={styles.icon} name={choiceIcon()} size={30} color="gray" /> : null}
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

InputText.propTypes = {
    icon: propTypes.string,
    onChangeText: propTypes.func,
    placeholder: propTypes.string,
    password: propTypes.bool,
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
        borderColor: colors.inputColor,
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

export default InputText;
