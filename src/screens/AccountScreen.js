import React, {useState, useEffect, useRef} from "react";
import {View, Switch, StyleSheet, Image, Text, ScrollView, TouchableOpacity} from "react-native";
import { icons } from "../constants";
import {connect} from "react-redux";
import { url} from "../utility/url/url";
import Button from "../components/Button";
import colors from "../constants/colors";
import AccountField from "../components/accountScreenComponents/AccountField";
import AccountFieldAvatar from "../components/accountScreenComponents/AccountFieldAvatar";
import AccountFieldToggleButton from "../components/accountScreenComponents/AccountFieldToggleButton";
import {useNavigation} from "@react-navigation/native";
import propTypes from "prop-types";
import Line from "../utility/Line";

const AccountScreen = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const navigation = useNavigation();

    return (
      <ScrollView style={{backgroundColor: "#f66c6c", flex: 1,}} contentContainerStyle={{justifyContent: "center"}}>
        <View style={styles.inputsView}>
          <AccountFieldAvatar/>

          <View style={styles.fieldsContainer}>
            <Text style={styles.fieldsContainerLegend}>Compte</Text>
            <Line color={'rgba(0,0,0,0.3)'}/>
            <AccountField legend={"Utilisateur"} parameter='username' touchable={false}/>
            <Line color={'rgba(0,0,0,0.3)'}/>
            <AccountField legend={"Date de création"} parameter='createdAd' touchable={false}/>
            <Line color={'rgba(0,0,0,0.3)'}/>
            <AccountField legend={"Changer Email"} parameter='email' touchable/>
            <Line color={'rgba(0,0,0,0.3)'}/>
            <AccountField legend={"Changer Mot de passe"} parameter='password' touchable/>
            <Line color={'rgba(0,0,0,0.3)'}/>
          </View>

          <View style={styles.fieldsContainer}>
            <Text style={styles.fieldsContainerLegend}>Préférence</Text>
            <Line color={'rgba(0,0,0,0.3)'}/>
            <AccountFieldToggleButton legend={"Lecture verticale "} toggleSwitch={toggleSwitch} isEnabled={isEnabled}/>
            <Line color={'rgba(0,0,0,0.3)'}/>
            <AccountFieldToggleButton legend={"Masquer contenu sensible"} toggleSwitch={toggleSwitch} isEnabled={isEnabled}/>
            <Line color={'rgba(0,0,0,0.3)'}/>
          </View>

          <Button
              title="Déconnexion"
              onPress={() => null}
              extraStyle={styles.button}
          />
          <Button
              title="Supprimer compte"
              onPress={() => navigation.push("AccountDeleteFormScreen")}
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

AccountScreen.propTypes = {
  user: propTypes.object,
  navigation: propTypes.object,
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
    fieldsContainer: {
      marginBottom: 40,
    },
    fieldsContainerLegend: {
      fontSize: 22,
      marginLeft: 20,
      color: "gray",
      marginBottom: 10,
      fontWeight: "500"
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
    fieldIcon: {
      position: 'absolute',
      right: 10,
      height: 25,
      width: 25
    }
  });