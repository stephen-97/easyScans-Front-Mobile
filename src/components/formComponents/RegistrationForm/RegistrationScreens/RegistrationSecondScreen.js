import React, {useState, useEffect, useRef} from "react";
import InputText from "../../../InputText";
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated} from "react-native";
import { correctEmail, correctUsername, correctPassword, samesPasswords, correctAvatarSize} from "../../../../utility/formVerificationFunctions";
import Form, { Field } from 'rc-field-form';
import Button from "../../../Button";
import * as ImagePicker from "expo-image-picker";
import { icons } from "../../../../constants";
import { Formik } from 'formik';


const RegistrationSecondScreen = (props) => {

  const formVerification = (values) => {
    /**if(!correctEmail(values.email)) return alert("Correct email is required");
    if(!correctUsername(values.username)) return alert("Wrong username");
    if(!correctPassword(values.password)) return alert ("Wrong password. It should have 8 charcters with at least one number.")
    if(!samesPasswords(values.password, props.values.confirmPassword)) return alert("Password are not the sames");
    if(correctAvatarSize(values.avatarBase64Data) > 500000) return alert('Avatar size to big')**/
    props.setRequestResponse(values);
  }


  const chooseAvatar = async (handleChange) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      handleChange('avatarUri')(result.uri);
      handleChange('avatarBase64Data')(result.base64);
    }
  };

  
    return(
      <>
          <View style={styles.container}> 
            <Formik
              initialValues={{email: '', username: '', password: '', confirmPassword: '', avatarUri: '', avatarBase64Data: ''}}
              onSubmit={values => formVerification(values)}
            >
              {({ handleChange,  handleSubmit, values }) => (
              <>
                  <InputText onChangeText={handleChange('email')} title="Email" placeholder="Email " value={null} icon={icons.email}/>
                  <InputText onChangeText={handleChange('username')} title="Username" placeholder="Username" value={null} icon={icons.userForm}/>
                  <InputText onChangeText={handleChange('password')} title="Password" placeholder="Password" password value={null} icon={icons.password}/>
                  <InputText onChangeText={handleChange('confirmPassword')} title="Confirm Password" placeholder="Confirm password" password value={null} icon={icons.password}/>
                  <TouchableOpacity
                    activeOpacity={.9}
                    style={styles.avatarField}
                    onPress={() => chooseAvatar(handleChange)}
                  >
                  <>
                    <Image style={styles.avatar} source={values.avatarUri && values.avatarBase64Data? {uri: "data:image/png;base64," + values.avatarBase64Data }: icons.avatar}/>
                  </>
                  </TouchableOpacity>
                  <Button onPress={() => handleSubmit()} title="Submit"/>
              </>
              )}
              </Formik>
              <TouchableOpacity
                activeOpacity={.9}
                style={styles.backButton}
                onPress={() => props.handleChangePage('choix')}
              >
                <Text style={styles.backButtonText}>Retour</Text>
              </TouchableOpacity>
          </View>
        </>
      )
};

//<Button style={styles.backButton} onPress={() => props.handleChangePage('choix')} title="Retour"/>

const styles = StyleSheet.create({
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
  container:{
    minHeight: 100, 
    justifyContent: "center",
  },
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
  },
  backButton: {
    height: 30,
    width: '35%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%'
  },
  backButtonText:{
    color: 'gray',
    fontSize: 20,
  }
});

export default RegistrationSecondScreen;

