import React, {useState, useEffect, useRef} from "react";
import InputText from "../../../InputText";
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated} from "react-native";
import { correctEmail, correctUsername, correctPassword, samesPasswords} from "../../../../utility/formVerificationFunctions";
import Spinner from "../../../../utility/Spinner";
import Button from "../../../Button";
import * as ImagePicker from "expo-image-picker";
import { icons } from "../../../../constants";


const RegistrationFirstScreen = (props) => {

  const [submitValue, setSubmitValue] = useState(false);

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
      }).start(() => setSubmitValue(true));
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
      )
};

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

  }
  
});

export default RegistrationFirstScreen;

