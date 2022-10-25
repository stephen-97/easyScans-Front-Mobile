import React, {useState, useEffect, useRef} from "react";
import InputText from "../../../InputText";
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated} from "react-native";
import { correctEmail, correctUsername, correctPassword, samesPasswords} from "../../../../utility/formVerificationFunctions";
import { SERVER } from "../../../../../config";
import Spinner from "../../../../utility/Spinner";
import Button from "../../../Button";
import * as ImagePicker from "expo-image-picker";
import { icons } from "../../../../constants";


const RegistrationSecondScreen = (props) => {

  const [submitValue, setSubmitValue] = useState(false);
  const [jsonResponse, setJsonResponse] = useState(null);
  const [height, setHeight] = useState(null);

  const firstPageVerification = () => {
    /**if(!correctEmail(props.values.email)) return alert("Correct email is required");
    if(!correctUsername(props.values.username)) return alert("Wrong username");
    if(!correctPassword(props.values.password)) return alert ("Wrong password. It should have 8 charcters with at least one number.")
    if(!samesPasswords(props.values.password, props.values.confirmPassword)) return alert("Password are not the sames");**/

    //props.handleChangePage(props.pageNumber+1);
  }

  const animValue = useRef(new Animated.Value(1)).current;
  const animScaleValue = useRef(new Animated.Value(1000)).current;

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

  useEffect(() => {
    if(props.requestResponse){
      if(props.requestResponse.status === 200) alert(" erreur " + props.requestResponse.message)
    }
  }, [props.requestResponse]);


    return(
          <View 
            style={styles.container}
            onLayout={({ nativeEvent }) => {
              const { x, y, width, height } = nativeEvent.layout
                 setHeight(height)
           }}
          >
                <InputText onChangeText={null} title="Email" placeholder="Email " value={null}/>
                <InputText onChangeText={null} title="Email" placeholder="Username" value={null}/>
                <InputText onChangeText={null} title="Password" placeholder="Password" password value={null}/>
                <InputText onChangeText={null} title="Confirm Password" placeholder="Confirm password" password value={null}/>
                <TouchableOpacity
                  activeOpacity={.9}
                  style={styles.avatarField}
                  onPress={() => handleChooseAvatar()}
                >
                  <>
                    <Image style={styles.avatar} source={props.avatar ? {uri: "data:image/png;base64," + props.avatar.base64 }: icons.avatar}/>
                  </>
                </TouchableOpacity>
                <Button onPress={() => props.handleChangePage()} title="Submit"/>
                <Button onPress={() => props.handleSendRequest()} title="Submit"/>
          </View>
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

export default RegistrationSecondScreen;

