import React, {useEffect, useRef} from "react";
import { StyleSheet, Image, Animated} from "react-native";
import { icons } from "../constants";

const Spinner = () => {
    
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        animationUp();
    }, [fadeAnim]);

    const animationUp = () => {
        Animated.loop(
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        })
        ).start();
    };

    const spin = fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

    return(
        <Animated.Image style={[styles.spinner, {transform: [{rotate: spin}]}]} source={icons.spinner}></Animated.Image>
    )
}

const styles = StyleSheet.create({
    spinner: {
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        height: 50,
        width: 50,
    },
})

export default Spinner;