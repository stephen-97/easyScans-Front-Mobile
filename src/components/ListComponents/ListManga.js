import React from "react";
import {StyleSheet,  Text, View, FlatList, } from "react-native";
import propTypes from "prop-types";
import {connect} from "react-redux";
import { useNavigation } from '@react-navigation/native';
import colors from "../../constants/colors";
import MangaItem from "./MangaItem";

const ListManga = (props) => {


  const testData= [{id: "0", title: "test 1"}, {id: "2", title: "test 2"}, {id: "3", title: "test 3"}, {id: "4", title: "test 4"}, {id: "5", title: "test 5"}]

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
                <MangaItem title={'Test'} index={index}/>
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