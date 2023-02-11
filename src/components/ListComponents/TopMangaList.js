import React, {useState, useEffect, useRef} from "react";
import {StyleSheet, Image, Text, View, FlatList, Dimensions, Animated} from "react-native";
import { LinearGradient} from "expo-linear-gradient";
import {connect} from "react-redux";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from "../../constants/colors";
import url from "../../request/url";

const TopMangaList = (props) => {

  const navigation = useNavigation();

  const testData= ["test 1", "test 2", "test 3", "test 4", "test 5"]

  const testData2 = [
    {title: "Test1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mi enim, ultricies faucibus nisl ultrices, pretium auctor neque. Donec sed mi nisl. Suspendisse fringilla dolor at dolor accumsan tincidunt. Nam. "},
    {title: "Test1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mi enim, ultricies faucibus nisl ultrices, pretium auctor neque. Donec sed mi nisl. Suspendisse fringilla dolor at dolor accumsan tincidunt. Nam. "},
    {title: "Test3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mi enim, ultricies faucibus nisl ultrices, pretium auctor neque. Donec sed mi nisl. Suspendisse fringilla dolor at dolor accumsan tincidunt. Nam. "},
    {title: "Test4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mi enim, ultricies faucibus nisl ultrices, pretium auctor neque. Donec sed mi nisl. Suspendisse fringilla dolor at dolor accumsan tincidunt. Nam. "},
    {title: "Test5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mi enim, ultricies faucibus nisl ultrices, pretium auctor neque. Donec sed mi nisl. Suspendisse fringilla dolor at dolor accumsan tincidunt. Nam. "}
  ]
  const scrollX = new Animated.Value(0);
  const position = Animated.divide(scrollX, width);

  const textOpacityFunction = (key, item) => {
    const opacity = position.interpolate({
      inputRange: [key - 1, key, key + 1],
      outputRange: [-0.5, 0.8, -0.5],
      extrapolate: "clamp",
    });
    return (
        <Animated.View
            key={key}
            style={[{ opacity }]}
        >
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}  numberOfLines={3}>{item.description}</Text>
        </Animated.View>
    );
  };

  return (
      <View style={styles.container} >
        <FlatList
            style={styles.list}
            horizontal={true}
            keyExtractor={(item, index) => {
              return index.toString()
            }}
            showsHorizontalScrollIndicator={false}
            data={testData2}
            pagingEnabled={true}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                {
                  useNativeDriver: false,
                }
            )}
            renderItem={({ item, index }) => (
                <View>
                  <Image
                      key={index}
                      source={{uri: url.avatarUrl(props.user.avatar)}}
                      style={styles.image}
                  />
                  <View style={styles.linearGradientContainer}>
                    <LinearGradient
                        colors={['#FFFFFF00', '#FFFFFF90']}
                        start={{x:0, y:0}}
                        end={{x: 0, y:1}}
                        style={styles.linearGradient1}
                    />
                    <LinearGradient
                        colors={['#FFFFFF90', '#FFFFFF']}
                        start={{x:0, y:0}}
                        end={{x: 0, y:0.9}}
                        style={styles.linearGradient2}
                    >
                      {textOpacityFunction(index, item)}
                     </LinearGradient>
                  </View>
                </View>
            )}
        />
        <View style={styles.containerPoints}>
          {testData2.map((_, key) => {
            const opacity = position.interpolate({
              inputRange: [key - 1, key, key + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });
            return (
                <Animated.View
                    key={key}
                    style={[styles.itemsLogo, { opacity }]}
                />
            );
          })}
        </View>
      </View>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(TopMangaList);

//use this for add a padding to the bottom locations={[0, 0.7]}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: 450,
    marginBottom: 30,
  },
  list: {
  },
  image: {
    width,
    height: '100%'
  },
  linearGradientContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  linearGradient1: {
    height: 50,
    width: "100%",
    background: "linear-gradient(to bottom, black, white)",
  },
  linearGradient2: {
    height: 120,
    width: "100%",
    background: "linear-gradient(to bottom, black, white)",
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    marginHorizontal: 20,
    //backgroundColor: 'yellow',
    textAlign: 'left',
    fontWeight: '700',
    fontSize: 20,
    color: colors.darkButton
  },
  description: {
   marginHorizontal: 20,
   fontWeight: 'bold',
   //backgroundColor: 'red',
  },
  itemsLogo: {
    height: 5,
    width: 60,
    backgroundColor: "black",
    margin: 4,
    borderRadius: 5,
  },
  containerPoints: {
    position: 'absolute',
    bottom: 5,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    marginHorizontal: 20,
  }
});

/**
 *
 * {testData.map((_, key) => {
 *             const opacity = position.interpolate({
 *               inputRange: [key - 1, key, key + 1],
 *               outputRange: [0.3, 1, 0.3],
 *               extrapolate: "clamp",
 *             });
 *             return (
 *                 <Animated.View
 *                     key={key}
 *                     style={[styles.itemsLogo, { opacity }]}
 *                 />
 *             );
 *           })}
 */