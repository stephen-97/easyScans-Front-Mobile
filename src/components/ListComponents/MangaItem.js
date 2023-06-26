import React from "react";
import {StyleSheet, Image, Text, View} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
   withSpring
} from 'react-native-reanimated';
import {TapGestureHandler} from "react-native-gesture-handler";
import propTypes from "prop-types";
import {connect} from "react-redux";
import colors from "../../constants/colors";
import url from "../../request/url";
import {useNavigation} from "@react-navigation/native";

const MangaItem = (props) => {

  const navigation = useNavigation();

  const pressed = useSharedValue(false);

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      pressed.value = true;
    },
    onFinish: (event, ctx) => {
      pressed.value = false;
    }
  })
  const animationStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: withSpring(pressed.value ? 0.9 : 1)}]
    }
  })

  return (
      <TapGestureHandler
          key={props.index}
          onGestureEvent={eventHandler}
          onActivated={() => navigation.navigate('MangaScreen')}
      >
        <Animated.View style={[styles.viewImage, animationStyle]}>
          <Image source={{uri: url.avatarUrl(props.user.avatar)}} style={styles.image}/>
          <View style={styles.viewTitle}>
            <Text style={styles.mangaTitle}>{props.title}</Text>
          </View>
        </Animated.View>
      </TapGestureHandler>
  );
};

MangaItem.propTypes = {
  index: propTypes.number,
  title: propTypes.string,
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}
export default connect(mapStateToProps)(MangaItem);


const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  viewImage: {
    height: 250,
    width: 180,
    marginRight: 20,
    backgroundColor: colors.ligthGrayLoading,
    borderRadius: 5,
    overflow: 'hidden',
    marginLeft: 20
  },
  viewTitle: {
    height: 50,
    backgroundColor: '#494949',
  },
  title:{
    marginLeft: 20,
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  image:{
    height: 210,
    width: 180,
  },
  mangaTitle: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
  }
});