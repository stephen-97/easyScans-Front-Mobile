import React, { useState} from "react";
import { StyleSheet, Text, Pressable} from "react-native";
import propTypes from "prop-types";

const LongText = (props) => {

  const [pressed, setPressed] = useState(false);

  return(
      <Pressable onPress={() => pressed ? setPressed(false) : setPressed(true)}>
        <Text
            style={props.extraStyle}
            numberOfLines={pressed ? 100 : 4}
        >
          {props.text}
        </Text>
      </Pressable>
  )
}

LongText.propTypes = {
  text: propTypes.string,
  extraStyle: propTypes.object
}

const styles = StyleSheet.create({

})

export default LongText;
