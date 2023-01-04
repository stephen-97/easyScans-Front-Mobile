import React, {useState, useEffect, useRef} from "react";
import {View, Switch, StyleSheet, Image, Text, ScrollView, TouchableOpacity} from "react-native";
import { icons } from "../constants";
import {connect} from "react-redux";
import { url} from "../utility/url/url";
import Button from "../components/Button";
import colors from "../constants/colors";
import AccountField from "../components/accountScreenComponents/AccountField";
import AccountFieldToggleButton from "../components/accountScreenComponents/AccountFieldToggleButton";

const AccountScreen = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    return (
      <ScrollView style={{backgroundColor: "#f66c6c", flex: 1,}} contentContainerStyle={{justifyContent: "center"}}>
        {console.log(props)}
        <View style={styles.inputsView}>
          <View style={styles.avatarBlock}>
            <View style={{borderRadius: 500}}>
              <TouchableOpacity
                  style={styles.changeAvatarButtonContainer}
              >
                <Image style={styles.changeAvatarButton} source={icons.plusIcon}/>
              </TouchableOpacity>
              <Image style={styles.avatar} source={props.user && props.user.avatar ? {uri: url.avatarUrl(props.user.avatar)} : icons.avatar}/>
            </View>
          </View>
          <AccountField user={props.user} legend={"Utilisateur"} test={() => console.log(props)}/>
          <AccountField user={props.user} legend={"Email"}/>
          <AccountField user={props.user} legend={"Date de création"}/>
          <AccountFieldToggleButton legend={"Lecture verticale ?"} toggleSwitch={toggleSwitch} isEnabled={isEnabled}/>
          <AccountFieldToggleButton legend={"Lecture verticale ?"} toggleSwitch={toggleSwitch} isEnabled={isEnabled}/>
          <Button
              title="Déconnexion"
              onPress={() => null}
              extraStyle={styles.button}
          />
          <Button
              title="Supprimer compte"
              onPress={() => console.log(colors.darkButton)}
              extraStyle={styles.buttonDelete}
              extraStyleText={styles.buttonDeleteText}
          />
        </View>
      </ScrollView>
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
      alignSelf: 'center',
      borderRadius: 500,
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
      fontSize: 16,
      position: 'absolute',
      fontWeight: 'bold',
      left: 20
    },
    text: {
      marginVertical: 10,
      fontSize: 16,
      color: 'gray',
      position: 'absolute',
      fontWeight: 'bold',
      right: 50,
    },
    button: {
      width: 200,
      alignSelf: 'center',
      borderRadius: 30,
      height: 50,
    },
    buttonDelete: {
      width: 200,
      alignSelf: 'center',
      backgroundColor: colors.darkButton,
      borderRadius: 30,
      height: 50,
    },
    buttonDeleteText: {
      color: 'white'
    },
    changeAvatarButtonContainer: {
      backgroundColor: '#d0d0d0',
      borderRadius: 500,
      position: 'absolute',
      zIndex: 1,
      top: 20,
      mozBorderRadius: 10,
      right: 20,
      borderColor: '#838383',
      borderWidth: 1
    },
    changeAvatarButton: {
      padding: 10,
      borderRadius: 500,
      height: 30,
      width: 30,
    },
    fieldIcon: {
      position: 'absolute',
      right: 10,
      height: 25,
      width: 25
    }
  });