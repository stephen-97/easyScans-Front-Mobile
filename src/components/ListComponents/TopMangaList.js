import React, {useState, useEffect, useRef} from "react";
import {StyleSheet, Image, Text, View, FlatList, Dimensions, ScrollView} from "react-native";
import { LinearGradient} from "expo-linear-gradient";
import {connect} from "react-redux";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from "../../constants/colors";
import url from "../../request/url";

const TopMangaList = (props) => {

  const navigation = useNavigation();

  const testData= ["test 1", "test 2", "test 3", "test 4", "test 4","test 4","test 4","test 4","test 4", "test"]


  return (
      <View style={styles.container} >
        <FlatList
            style={{ backgroundColor: 'blue'}}
            horizontal={true}
            keyExtractor={(item, index) => {
              return index.toString()
            }}
            data={testData}
            pagingEnabled={true}
            renderItem={({ item, index }) => (
                <Image key={index} source={{uri: url.avatarUrl(props.user.avatar)}} style={styles.image}/>
            )}
        />
        <LinearGradient
            // Button Linear Gradient
            colors={['#FFFFFF00', '#FFFFFF']}
            style={styles.bottom}

        >
          <Text style={styles.title}>Titre du manga</Text>
        </LinearGradient>
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
  },
  image: {
    zIndex: 1,
    width,
    height: 400
  },
  bottom: {
    height: 150,
    width: "100%",
    position: "absolute",
    bottom: 0,
    background: "linear-gradient(to right, black, white)"
  },
  title: {
    position: "absolute",
    bottom:50,
    width: '100%',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
    color: colors.darkButton
  }
});