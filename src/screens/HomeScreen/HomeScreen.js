import React, {useState, useEffect, useRef} from "react";
import {View, Switch, StyleSheet, Image, Text, ScrollView, TouchableOpacity, Animated, Dimensions} from "react-native";
import {connect, useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import propTypes from "prop-types";
import ListManga from "../../components/ListComponents/ListManga";
import TopMangaList from "../../components/ListComponents/TopMangaList";
import url from "../../request/url";

const HomeScreen = (props) => {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  useEffect(() =>{
  }, [props.user])

  const pan = useRef(new Animated.ValueXY()).current;

  return (
      <ScrollView
          scrollEventThrottle={1}
          onScroll={Animated.event(
              [
                  {nativeEvent: {contentOffset: {y: pan.y}}}
              ],
              {
                useNativeDriver: false,
              }
          )}
          style={styles.container}
          contentContainerStyle={{justifyContent: "center"}}
      >

          <TopMangaList pan={pan}/>
          <ListManga title={"Titre 1"}/>
      </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

HomeScreen.propTypes = {
  user: propTypes.object,
  navigation: propTypes.object,
}


export default connect(mapStateToProps)(HomeScreen);
const {width, height} = Dimensions.get('window');


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  image: {
    zIndex: 1,
    width,
    height: 400
  },
});


/**
 * <Animated.Image
 *             source={{uri: url.avatarUrl(props.user.avatar)}}
 *             resizeMethod={"cover"}
 *             style={[styles.image,
 *               {
 *                 transform: [
 *                   {
 *                     translateY: pan.y.interpolate({
 *                       inputRange: [-500, 0],
 *                       outputRange: [-500, 0],
 *                       extrapolate: 'clamp',
 *                     }),
 *                   },
 *                   {
 *                     scale: pan.y.interpolate({
 *                       inputRange: [-10000, 0],
 *                       outputRange: [20, 1],
 *                       extrapolate: 'clamp',
 *                     }),
 *                   },
 *                 ],
 *               }
 *             ]}
 *
 *         />
 *
 */