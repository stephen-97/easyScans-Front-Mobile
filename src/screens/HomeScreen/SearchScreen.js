import React, {useState, useEffect, useRef} from "react";
import {View, Switch, StyleSheet, Image, Text, ScrollView, TouchableOpacity} from "react-native";
import {connect, useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import propTypes from "prop-types";
import ListManga from "../../components/ListComponents/ListManga";
import TopMangaList from "../../components/ListComponents/TopMangaList";
import InputText from "../../components/InputText";
import Button from "../../components/Button";
import InputTextBorder from "../../components/inputTextBorder";

const SearchScreen = (props) => {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  useEffect(() =>{
  }, [props.user])
  return (
      <ScrollView style={styles.container} contentContainerStyle={{justifyContent: "center"}}>
        <Text style={styles.closeButton} onPress={() => navigation.goBack()}>Fermer</Text>
        <InputTextBorder placeholder={"Chercher un manga"} icon={"search-sharp"} />
        <Text style={styles.closeButton} onPress={() => navigation.goBack()}>Fermer</Text>
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
    backgroundColor: "white",
    paddingTop: 50,
    marginHorizontal: 50,
  },
  closeButton: {
    fontSize: 20,
    backgroundColor: "yellow",
    textAlign: 'center'
  }
});