import React, {useState, useEffect, useRef} from "react";
import {StyleSheet, Image, Text, View, FlatList} from "react-native";
import { icons } from "../../constants";
import propTypes from "prop-types";
import {connect} from "react-redux";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from "../../constants/colors";

const ListManga = (props) => {

  const navigation = useNavigation();

  const screenAccountNavigation = () => {
    switch (props.legend) {
      case 'Changer Email':
        navigation.push("AccountChangeFormScreen", {legend: props.legend})
        break;
      case 'Changer Mot de passe':
        navigation.push("AccountChangeFormScreen", {legend: props.legend})
        break;
      default:
        break;
    }
  }

  const rightParam = () => {
    switch (props.parameter) {
      case 'username':
        return props.user.username
      case 'email':
        return props.user.email
      case 'createdAd':
        return props.user.createdAd
      case 'noValue':
        return ''
      default:
        break;
    }
  }

  const testData= ["test 1", "test 2", "test 3", "test 4", "test 4","test 4","test 4","test 4","test 4",]


  return (
      <FlatList
          data={testData}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Image source={icons.email} style={styles.image}/>
          )}
      />
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(ListManga);


const styles = StyleSheet.create({
  image:{
    height: 300,
    width: 200,
    margin: 20,
    backgroundColor: 'blue'
  }
});