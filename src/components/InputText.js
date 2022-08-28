import React, {useEffect, useState} from "react";
import { TextInput, StyleSheet } from "react-native";

const InputText = (props) => {
    return(
        <TextInput
            style={styles.input}
            onChange={null}
            placeholder={props.placeholder}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        width: "80%",
        backgroundColor: "gray",
        alignSelf: "center",
        marginVertical: "5%",
        height: 65,
        padding: "5%",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "yellow"
    }
})

export default InputText;