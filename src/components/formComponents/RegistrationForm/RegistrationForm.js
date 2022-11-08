import React, {useState, useEffect, useRef} from "react";
import { View,  StyleSheet, Text, TouchableOpacity, FlatList,Animated } from "react-native";
import InputText from "../../InputText";
import { icons, colors } from "../../../constants";
import Button from "../../Button";
import { correctEmail, correctPassword, correctUsername, samesPasswords } from "../../../utility/formVerificationFunctions";
import RegistrationFirstScreen from "./RegistrationScreens/RegistrationFirstScreen";
import { Formik } from "formik";
import Form, { Field } from 'rc-field-form';
import RegistrationSecondScreen from "./RegistrationScreens/RegistrationSecondScreen";
import RegistrationLoadingScreen from "./RegistrationScreens/RegistrationLoadingScreen";
import { SERVER } from "../../../../config";

const RegistrationForm = (props) => {
  
    //sizes for animation
    const pageSize = {small : 200, large: 1000}

    const [page, SetPage] = useState('choix');

    //animations
    const animValue = useRef(new Animated.Value(1)).current;
    const animScaleValue = useRef(new Animated.Value(1000)).current;


    const dataTagsList = ["Shonen", "Seinen", "Shojo", "catégorie 4", "catégorie 5", "catégorie 6", "catégorie 7", "catégorie 8"];
    const [dataTags, setDataTags] = useState([]);


    const [requestResponse, setRequestResponse] = useState({status: null, message: null});

    const RegistrationRequest = (values) => {
      SetPage('loading')
      return fetch(`http://${SERVER}/API/API_2`, {
        method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        })
          .then((response) => response.json())
          .then((jsonData) => { 
            if(jsonData.status !== 200){
              SetPage('forumaire')
            }
            setRequestResponse(jsonData)
        });
    };


    const SignInRequest = async (values) => {
      SetPage('loading')
      return fetch(`http://${SERVER}/API/signing`, {
        method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values)
      })
        .then((response) => response.json())
        .then((jsonData) => { 
          if(jsonData.status !== 200){
            SetPage('choix')
            alert(jsonData.msg)
          } else {
            setRequestResponse(jsonData)
          }
      });
    };
    
    
    return (
      <View style={{justifyContent: "center", backgroundColor: "#f66c6c", flex: 1,}}>
        <View style={styles.inputsView}>
        <Animated.View style={[{marginHorizontal: "10%", opacity:animValue}]}>
          {
            { 
              'choix': 
                <RegistrationFirstScreen 
                  page={page} 
                  handleChangePage={SetPage}
                  setLoginRequestResponse={SignInRequest}
                />,
              'formulaire:':
                <RegistrationSecondScreen 
                  setRequestResponse={RegistrationRequest}
                  handleChangePage={SetPage} 
                  pageNumber={page}
                  handleSubmit={null}
                  handleChange={null} 
                  values={null} 
                />,
                'loading': 
                  <RegistrationLoadingScreen 
                    requestResponse={requestResponse}
                  />,
            }[page]
          }
        </Animated.View>
        </View>
      </View>
    );
  };
  
  export default RegistrationForm;
  
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
      marginHorizontal: "2.5%",
      borderTopLeftRadius: 40,
      borderBottomRightRadius: 40,
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
    },
  });