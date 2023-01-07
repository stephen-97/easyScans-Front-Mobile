import React, {useEffect, useState} from "react";
import { TextInput, StyleSheet, View, Text, Image } from "react-native";
import { icons } from "../constants";
import colors from "../constants/colors";

const InputText = (props) => {
    const [onFocus, setOnFocus] = useState(false);

    return(
        <View style={styles.container}>
            {props.icon ? <Image style={styles.icon} source={props.icon} /> : null}
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
        fontSize: 20,
    },
    title: {
        fontSize: 15,
        fontWeight: "bold"
    },
    icon:{
        position: "absolute",
        height: 30,
        width: 25,
        zIndex: 1,
        right: "7.5%",
    }
})

export default InputText;