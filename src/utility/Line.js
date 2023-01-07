import React from "react";
import { View, StyleSheet  } from "react-native";
import propTypes from "prop-types";

const Line = (props) => {
  return <View style={[styles.line,{ borderColor: props.color}]}></View>;
};

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 1,
    width: "100%",
  },
});

Line.propTypes = {
  color: propTypes.string,
}

export default Line;
