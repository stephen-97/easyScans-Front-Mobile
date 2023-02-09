import React, {useState, useEffect, useRef} from "react";
import {StyleSheet, Image, Text, View, FlatList, TouchableOpacity} from "react-native";
import { icons } from "../../constants";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withTiming, withSpring
} from 'react-native-reanimated';
import {TapGestureHandler} from "react-native-gesture-handler";
import propTypes from "prop-types";
import {connect} from "react-redux";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from "../../constants/colors";
import url from "../../request/url";
import Button from "../Button";

const ListManga = (props) => {

  const navigation = useNavigation();

  const testData= [{id: "0", title: "test 1"}, {id: "2", title: "test 2"}, {id: "3", title: "test 3"}, {id: "4", title: "test 4"}, {id: "5", title: "test 5"}]

  const animation = useSharedValue(1);



  const RenderItem = () => {
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
            onActivated={() => console.log("hey")}
        >
          <Animated.View style={[styles.viewImage, animationStyle]}>
            <Image source={{uri: url.avatarUrl(props.user.avatar)}} style={styles.image}/>
            <View style={styles.viewTitle}>
              <Text style={styles.mangaTitle}>{props.title}</Text>
            </View>
          </Animated.View>
        </TapGestureHandler>
    )
  }
  return (
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <FlatList
            data={testData}
            initialNumToRender={2}
            windowSize={3}
            maxToRenderPerBatch={2}
            keyExtractor={(item, index) => {
              return index.toString()
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
                <RenderItem title={'Test'} index={index}/>
            )}
        />
      </View>
  );
};

ListManga.propTypes = {
  extraStyle: propTypes.object,
  extraStyleText: propTypes.object,
  title: propTypes.string.isRequired,
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}
/**
 * <TapGestureHandler
 *             onGestureEvent={eventHandler}
 *             onActivated={() => console.log("hey")}
 *             onPress={() => console.log("test")}
 *         >
 *           <Animated.View onPress={() => console.log("test")} style={[{height: 100, width: 100, backgroundColor: 'yellow'}, animationStyle]}></Animated.View>
 *         </TapGestureHandler>
 */

export default connect(mapStateToProps)(ListManga);


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

/**
 *
 * <View style={styles.container}>
 *         <Text style={styles.title}>{props.title}</Text>
 *         <FlatList
 *             data={testData}
 *             initialNumToRender={2}
 *             windowSize={3}
 *             maxToRenderPerBatch={2}
 *             keyExtractor={(item, index) => {
 *               console.log(index.toString())
 *               return item.toString()
 *             }}
 *             horizontal={true}
 *             showsHorizontalScrollIndicator={false}
 *             renderItem={({item}) => (
 *                   <View
 *                       key={item.id}
 *                   >
 *                     {console.log(item.id)}
 *                   </View>
 *             )}
 *         />
 *       </View>
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *       <TapGestureHandler
 *                       key={item}
 *                       onGestureEvent={eventHandler}
 *                       onActivated={() => console.log("hey")}
 *                   >
 *                     <Animated.View style={focusIndex===item.index ? styles.viewImage : [styles.viewImage, animationStyle]}>
 *                       {console.log(item)}
 *                       <Image source={{uri: url.avatarUrl(props.user.avatar)}} style={styles.image}/>
 *                       <View style={styles.viewTitle}>
 *                         <Text style={styles.mangaTitle}>{item.title}</Text>
 *                       </View>
 *                     </Animated.View>
 *                   </TapGestureHandler>
 */