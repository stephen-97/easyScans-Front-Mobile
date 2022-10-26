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

    //pages
    const pages = {
      'choix': {size: pageSize.small}, 
      'formulaire': {size: pageSize.large},
      'loading': {size: pageSize.small},
    }
    const [page, SetPage] = useState('choix');

    //animations
    const animValue = useRef(new Animated.Value(1)).current;
    const animScaleValue = useRef(new Animated.Value(200)).current;


    const dataTagsList = ["Shonen", "Seinen", "Shojo", "catégorie 4", "catégorie 5", "catégorie 6", "catégorie 7", "catégorie 8"];
    const [dataTags, setDataTags] = useState([]);

    const animationTinyToLarge = (newPage, response) => {
      Animated.timing(animValue, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }).start(() => {
        SetPage(newPage);
        Animated.timing(animScaleValue, {
          toValue: pages[newPage].size,
          duration: 150,
          useNativeDriver: false,
        }).start(() => {
          if(response) alert(' Erreur ' + response.message);
          Animated.timing(animValue, {
            toValue: 1,
            duration: 150,
            useNativeDriver: false,
          }).start()
        });
      });
    }

    const animationLargeToTiny = async (newPage) => {
      Animated.timing(animValue, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }).start(() => {
        Animated.timing(animScaleValue, {
          toValue: pages[newPage].size,
          duration: 150,
          useNativeDriver: false,
        }).start(() => {
          SetPage(newPage);
          Animated.timing(animValue, {
            toValue: 1,
            duration: 150,
            useNativeDriver: false,
          }).start()
        });
      });
    }

    const [requestResponse, setRequestResponse] = useState({status: null, message: null});

    const RegistrationRequest = (values) => {
      animationLargeToTiny('loading')
      setTimeout(() => {
        const formData = new FormData();
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
                animationTinyToLarge('formulaire', jsonData)
              }
              setRequestResponse(jsonData)
          });
      }, 1000);
    };



    const selectForm = () => {
      switch (page) {
        default: 
          return <RegistrationFirstScreen  page={page} handleChangePage={animationTinyToLarge}/>
        case 'choix':
          return <RegistrationFirstScreen  page={page} handleChangePage={animationTinyToLarge}/>
        case 'formulaire':
          return <RegistrationSecondScreen 
                    setRequestResponse={RegistrationRequest}
                    handleChangePage={animationLargeToTiny} 
                    pageNumber={page}
                    handleSubmit={null}
                    handleChange={null} 
                    values={null} 
                  />;
        case 'loading':
          return <RegistrationLoadingScreen 
                    requestResponse={requestResponse}
                  />
      }
    }
    
    return (
      <View style={{justifyContent: "center", backgroundColor: "#f66c6c", flex: 1,}}>
        <View style={styles.inputsView}>
        <Animated.View style={[{marginHorizontal: "10%", opacity:animValue ,maxHeight: animScaleValue}]}>
          {
            selectForm()
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