import React, {useState, useEffect, useRef} from "react";
import {View, Switch, StyleSheet, Image, Text, ScrollView, TouchableOpacity} from "react-native";
import {connect, useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import propTypes from "prop-types";
import ListManga from "../../components/ListComponents/ListManga";
import TopMangaList from "../../components/ListComponents/TopMangaList";
import InputText from "../../components/InputText";
import Button from "../../components/Button";

const SearchScreen = (props) => {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  useEffect(() =>{
  }, [props.user])
  return (
      <ScrollView style={styles.container} contentContainerStyle={{justifyContent: "center"}}>
        <Button title={'Close'} onPress={() => navigation.goBack()} />
        <InputText />
      </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

SearchScreen.propTypes = {
  user: propTypes.object,
  navigation: propTypes.object,
}


export default connect(mapStateToProps)(SearchScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});