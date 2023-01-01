import React, {useState, useEffect, useRef} from "react";
<<<<<<< HEAD
import { View, StyleSheet} from "react-native";
import Button from "../../../Button";
import ButtonWithLogo from "../../../ButtonWithLogo";
import InputText from "../../../InputText";
import { Formik } from "formik";
import { icons } from "../../../../constants";
import {validate} from "../../../../redux/redux";
=======
import InputText from "../../../InputText";
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated} from "react-native";
import { correctEmail, correctUsername, correctPassword, samesPasswords} from "../../../../utility/formVerificationFunctions";
import { SERVER } from "../../../../../config";
import Spinner from "../../../../utility/Spinner";
import Button from "../../../Button";
import * as ImagePicker from "expo-image-picker";
import { icons } from "../../../../constants";
>>>>>>> main


const RegistrationFirstScreen = (props) => {

<<<<<<< HEAD
    const formVerification = (values) => {
      props.setLoginRequestResponse(values);
    }
    const test = () => {
        store.dispatch(validate("test"))
    }

    return(
          <View style={styles.container}>
            <Formik
              initialValues={{'emailOrUsername': '', 'password': ''}}
              onSubmit={values => formVerification(values)}
            >
              {({ handleChange,  handleSubmit, values }) => (
              <>
                <InputText onChangeText={handleChange('emailOrUsername')} title="Email" placeholder="Email " value={null} icon={icons.email}/>
                <InputText onChangeText={handleChange('password')} title="password" password placeholder="Mot de passe " value={null} icon={icons.email}/>
                <Button onPress={() => handleSubmit()} title="Connexion "/>

              </>
              )}
              </Formik>
            <ButtonWithLogo
              onPress={() => props.handleChangePage('formulaire')} 
              extraStyle={styles.extraStyleButton}  
              extraStyleTitle={styles.extraStyleTitle} 
              title="Connexion Gmail"
              source={icons.googleLogo}
            />
          </View>
=======
  const [submitValue, setSubmitValue] = useState(false);
  const [jsonResponse, setJsonResponse] = useState(null);

  const firstPageVerification = () => {
    /**if(!correctEmail(props.values.email)) return alert("Correct email is required");
    if(!correctUsername(props.values.username)) return alert("Wrong username");
    if(!correctPassword(props.values.password)) return alert ("Wrong password. It should have 8 charcters with at least one number.")
    if(!samesPasswords(props.values.password, props.values.confirmPassword)) return alert("Password are not the sames");**/
    animationOpacity();
    //props.handleChangePage(props.pageNumber+1);
  }

  const animValue = useRef(new Animated.Value(1)).current;
  const animScaleValue = useRef(new Animated.Value(1000)).current;

  const animationOpacity = () => {
    Animated.timing(animValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animScaleValue, {
        toValue: 100,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        setSubmitValue(true);
        Animated.timing(animValue, {
          toValue: 1,
          duration: 1,
          useNativeDriver: false,
        }).start()
        RegistrationRequest();
      });
    });
  }

  const animationOpacityReverse= (errorMessage) => {
    Animated.timing(animValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setSubmitValue(false);
      Animated.timing(animScaleValue, {
        toValue: 1000,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        Animated.timing(animValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }).start(() => {
          return alert(`Erreur : ${errorMessage}`)
        })
      });
    });
  }


  const handleChooseAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      props.handleChangeAvatar({uri: result.uri, base64: result.base64});
    }
  };

  const RegistrationRequest = () => {
    const formData = new FormData();
    formData.append("username", props.values.username);
    formData.append("email", props.values.email);
    formData.append("password", props.values.password);
    formData.append("confirmPassword", props.values.password);
    return fetch(`http://${SERVER}/API/API_2`, {
      method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((jsonData) => {
          if(jsonData.status !== 200) {
            animationOpacityReverse(jsonData.message)
          }
        });
  };

  
    return(
        <Animated.View style={[{marginHorizontal: "10%", opacity:animValue ,maxHeight: animScaleValue}]}>
          <View style={styles.container}>
            {submitValue ? 
              <Spinner/> 
              : 
              <>
                <InputText onChangeText={props.handleChange('email')} title="Email" placeholder="Email " value={props.values.email}/>
                <InputText onChangeText={props.handleChange('username')} title="Email" placeholder="Username" value={props.values.email}/>
                <InputText onChangeText={props.handleChange('password')} title="Password" placeholder="Password" password value={props.values.password}/>
                <InputText onChangeText={props.handleChange('confirmPassword')} title="Confirm Password" placeholder="Confirm password" password value={props.values.password}/>
                <TouchableOpacity
                  activeOpacity={.9}
                  style={styles.avatarField}
                  onPress={() => handleChooseAvatar()}
                >
                  <>
                    <Image style={styles.avatar} source={props.avatar ? {uri: "data:image/png;base64," + props.avatar.base64 }: icons.avatar}/>
                  </>
                </TouchableOpacity>
                <Button onPress={() => firstPageVerification()} title="Submit"/>
              </>
            }
          </View>
        </Animated.View>
>>>>>>> main
      )
};

const styles = StyleSheet.create({
<<<<<<< HEAD
=======
  avatarField:{
    backgroundColor: "white",
    width: "100%",
    alignSelf: "center",
    marginVertical: "5%",
    height: 80,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "gray",
    borderStyle: "dashed",
    fontSize: 20,
    justifyContent: "center",
  },
>>>>>>> main
  container:{
    minHeight: 100, 
    justifyContent: "center",
  },
<<<<<<< HEAD
  extraStyleButton: {
    backgroundColor: '#3b3a3a',
  },
  extraStyleTitle: {
    color: 'white'
  }
=======
  avatarText : {
    justifyContent: "center",
    fontWeight:"500",
    fontSize: 15,
    alignItems: "center",
  },
  avatar:{
    alignSelf: "center",
    height: 70,
    width: 70,
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 1,

  }
  
>>>>>>> main
});

export default RegistrationFirstScreen;

