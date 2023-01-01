import React, {useState, useEffect, useRef} from "react";
import { View,  StyleSheet, Image, Text } from "react-native";
import { icons } from "../constants";
import {connect} from "react-redux";
import { url} from "../utility/url/url";

const AccountScreen = (props) => {
  
    return (
      <View style={{justifyContent: "center", backgroundColor: "#f66c6c", flex: 1,}}>
        <View style={styles.inputsView}>
          <View style={styles.avatarBlock}>
              {console.log(url.avatarUrl(props.user.avatar))}
            <Image style={styles.avatar} source={props.user && props.user.avatar ? {uri: url.avatarUrl(props.user.avatar)} : icons.avatar}/>
          </View>
          <View style={styles.line}>
            <Text style={styles.legend}>Utilisateur</Text>
            <Text style={styles.text}>{props.user ? props.user.username : ''}</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.legend}>Email</Text>
            <Text style={styles.text}>{props.user ? props.user.email : ''}</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.legend}>Date de création</Text>
            <Text style={styles.text}>{props.user ? props.user.createdAd : ''}</Text>
          </View>
          <View style={styles.line}> 
            <Text style={styles.legend}>Lecture verticale</Text>
            <Text style={styles.text}>{props.user ? props.user.username : 'Oui'}</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.legend}>Lecture verticale</Text>
            <Text style={styles.text}>{props.user ? props.user.username : 'Oui'}</Text>
              {console.log(props)}
          </View>
        </View>
      </View>
    );
  };

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(AccountScreen);

const styles = StyleSheet.create({
    navBar:{
      position: "relative",
      bottom: 0,
      height: 80,
      backgroundColor: "black",
      width: "100%",
      justifyContent: "flex-end",
    },
    inputsView:{
      backgroundColor: "white",
      paddingVertical: "7.5%",
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      marginTop: 150,
      height: '100%'
    },
    avatar: {
      height: 220,
      width: 220,
      alignSelf: 'center'
    },
    line: {
      borderBottomWidth: 1,
      width: "100%",
      borderColor: 'rgba(0,0,0,0.3)',
      height: 55,
      justifyContent: 'center'
    },
    avatarBlock:{
      borderBottomWidth: 1,
      width: "100%",
      alignItems: 'center',
      borderColor: 'rgba(0,0,0,0.3)',
      paddingVertical: 15,
    },
    legend:{
      fontSize: 18,
      position: 'absolute',
      fontWeight: 'bold',
      left: 20
    },
    text: {
      marginVertical: 10,
      fontSize: 18,
      color: 'gray',
      position: 'absolute',
      fontWeight: 'bold',
      right: 20,
    }
  });