import React, {useState, useEffect, useRef} from "react";
import {StyleSheet, Image, Text, View, FlatList} from "react-native";
import { icons } from "../../constants";
import propTypes from "prop-types";
import {connect} from "react-redux";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from "../../constants/colors";
import url from "../../request/url";

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

  const testData= ["test 1", "test 2", "test 3", "test 4", "test 4","test 4","test 4","test 4","test 4", "test"]


  const renderItem = () => {
    return (
        <>
          <Image source={{uri: url.avatarUrl(props.user.avatar)}} style={styles.image}/>
        </>
    )
  }
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Nouveautés</Text>
        <FlatList
            data={testData}
            initialNumToRender={2}
            windowSize={3}
            maxToRenderPerBatch={2}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
                <View style={styles.viewImage}>
                  <Image source={{uri: url.avatarUrl(props.user.avatar)}} style={styles.image}/>
                  <View style={styles.viewTitle}>
                    <Text style={styles.mangaTitle}>Titre</Text>
                  </View>
                </View>
            )}
        />
      </View>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

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
    backgroundColor: colors.darkButton,
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