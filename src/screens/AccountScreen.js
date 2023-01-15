import React, {useState, useEffect, useRef} from "react";
import {View, Switch, StyleSheet, Image, Text, ScrollView, TouchableOpacity} from "react-native";
import { icons } from "../constants";
import {connect, useDispatch} from "react-redux";
import url from '../request/url'
import Button from "../components/Button";
import colors from "../constants/colors";
import AccountField from "../components/accountScreenComponents/AccountField";
import AccountFieldAvatar from "../components/accountScreenComponents/AccountFieldAvatar";
import AccountFieldToggleButton from "../components/accountScreenComponents/AccountFieldToggleButton";
import {useNavigation} from "@react-navigation/native";
import propTypes from "prop-types";
import Line from "../utility/Line";
import {Request} from "../request/requestFunctions";
import {setUser} from "../redux/redux";
import {userObjectStorage} from "../utility/security/encodeJwt";

const AccountScreen = (props) => {
  const dispatch = useDispatch();


  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [verticalReading, setVerticalReading] = useState(props.user ? props.user.verticalReading : null);
  const [shockingContent, setShockingContent] = useState(props.user ? props.user.shockingContent : null);


  const changeVerticalReading = () => {
    setVerticalReading(previousState => !previousState)
    const objectBody = {
      'verticalReading': !props.user.verticalReading
    }
    Request(url.changeVerticalReading.method, url.changeVerticalReading.endpoint, JSON.stringify(objectBody), props.user.token)
        .then((json) => {
          console.log("then response : ")
          console.log(json)
          if(json.status === 200) {
            dispatch(setUser(userObjectStorage(json.body.jwt)))
          }
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          console.log(" ")
          console.log("finally : ")
          console.log(props.user.verticalReading)
          //setVerticalReading(props.user.verticalReading)
        })
  }

  const changeShockingContent = () => {
    setShockingContent(previousState => !previousState)
    const objectBody = {
      'shockingContent': !props.user.shockingContent
    }
    Request(url.changeShockingContent.method, url.changeShockingContent.endpoint, JSON.stringify(objectBody), props.user.token)
        .then((json) => {
          if(json.status === 200) {
            dispatch(setUser(userObjectStorage(json.body.jwt)))
          }
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          setShockingContent(props.user.verticalReading)
        })
  }
  const navigation = useNavigation();

  useEffect(() =>{
  }, [props.user])
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
            <AccountField legend={"Changer Mot de passe"} parameter='noValue' touchable/>
            <Line color={'rgba(0,0,0,0.3)'}/>
          </View>

          <View style={styles.fieldsContainer}>
            <Text style={styles.fieldsContainerLegend}>Préférence</Text>
            <Line color={'rgba(0,0,0,0.3)'}/>
            <AccountFieldToggleButton legend={"Lecture verticale "} toggleSwitch={changeVerticalReading} isEnabled={verticalReading}/>
            <Line color={'rgba(0,0,0,0.3)'}/>
            <AccountFieldToggleButton legend={"Contenu sensible"} toggleSwitch={changeShockingContent} isEnabled={shockingContent}/>
            <Line color={'rgba(0,0,0,0.3)'}/>
          </View>

          <View style={styles.fieldsContainer}>
            <Text style={styles.fieldsContainerLegend}>À propos</Text>
            <Line color={'rgba(0,0,0,0.3)'}/>
            <AccountField legend={"Condition d'utilisations"} parameter='noValue' touchable/>
            <Line color={'rgba(0,0,0,0.3)'}/>
            <AccountField legend={"Besoin d'aide"} parameter='noValue' touchable/>
            <Line color={'rgba(0,0,0,0.3)'}/>
          </View>

          <View style={styles.buttonContainer}>
            <Button
                title="Déconnexion"
                onPress={() => null}
                extraStyle={styles.button}
                extraStyleText={styles.buttonText}
            />
            <Button
                title="Supprimer compte"
                onPress={() => navigation.push("AccountDeleteFormScreen")}
                extraStyle={styles.buttonDelete}
                extraStyleText={styles.buttonDeleteText}
            />
          </View>
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
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    button: {
      width: 150,
      fontSize: 10,
      borderRadius: 30,
      height: 50,
    },
    buttonDelete: {
      width: 150,
      backgroundColor: colors.darkButton,
      borderRadius: 30,
      height: 50,
    },
    buttonText: {
      fontSize: 14,
      fontWeight: 'bold'
    },
    buttonDeleteText: {
      color: 'white',
      fontSize: 14,
      fontWeight: 'bold'
    },
    fieldIcon: {
      position: 'absolute',
      right: 10,
      height: 25,
      width: 25
    }
  });