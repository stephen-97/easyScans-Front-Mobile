import React, {useState, useEffect, useRef} from "react";
import {View, Switch, StyleSheet, Image, Text, ScrollView, TouchableOpacity} from "react-native";
import {connect, useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import propTypes from "prop-types";
import ListManga from "../../components/ListComponents/ListManga";

const HomeScreen = (props) => {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  useEffect(() =>{
  }, [props.user])
  return (
      <ScrollView style={styles.container} contentContainerStyle={{justifyContent: "center"}}>
        <ListManga />
        <ListManga />
        <ListManga />
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

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});