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
  
   const pages = [{page: 1, height: 100}];
   const [page, SetPage] = useState(1);

    const backButton = () => {
      if(page >= 1) SetPage(page-1);
    }

    const handleSubmitSecondScreen = () => {
      if(dataTags.length === 0) return alert("Select at least one tag")
    }

    const dataTagsList = ["Shonen", "Seinen", "Shojo", "catégorie 4", "catégorie 5", "catégorie 6", "catégorie 7", "catégorie 8"];
    const [dataTags, setDataTags] = useState([]);
  
    
    const animationChangeScale = () => {
      Animated.timing(animValue, {
        toValue: 50,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }

  
    const [avatar, setAvatar] = useState(null);
    const animValue = useRef(new Animated.Value(1)).current;


    const animScaleValue = useRef(new Animated.Value(200)).current;

    const animationOpacityFirstPage = () => {
      Animated.timing(animValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        SetPage(2);
        Animated.timing(animScaleValue, {
          toValue: 1000,
          duration: 200,
          useNativeDriver: false,
        }).start(() => {
          Animated.timing(animValue, {
            toValue: 1,
            duration: 200,
            useNativeDriver: false,
          }).start()
        });
      });
    }

    const animationOpacityBackFirstPage = () => {
      Animated.timing(animValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        Animated.timing(animScaleValue, {
          toValue: 200,
          duration: 200,
          useNativeDriver: false,
        }).start(() => {
          SetPage(1);
          Animated.timing(animValue, {
            toValue: 1,
            duration: 200,
            useNativeDriver: false,
          }).start()
        });
      });
    }

    const animationOpacityLoadingPage = () => {
      Animated.timing(animValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        Animated.timing(animScaleValue, {
          toValue: 200,
          duration: 200,
          useNativeDriver: false,
        }).start(() => {
          SetPage('loading');
          RegistrationRequest();
          Animated.timing(animValue, {
            toValue: 1,
            duration: 200,
            useNativeDriver: false,
          }).start()
        });
      });
    }

    const [requestResponse, setRequestResponse] = useState({status: null, message: null});

    const RegistrationRequest = () => {
      console.log("tedte")
      SetPage('loading');
      const formData = new FormData();
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
            setRequestResponse(jsonData)
            if(jsonData.status !== 200){
              animationOpacityFirstPage();
            }
          });
    };



    const selectForm = () => {
      switch (page) {
        case 1:
          return <RegistrationFirstScreen  page={page} handleChangePage={animationOpacityFirstPage}/>
        case 2:
          return <RegistrationSecondScreen 
                    requestResponse={requestResponse}
                    setRequestResponse={setRequestResponse}
                    handleChangePage={animationOpacityBackFirstPage} 
                    handleSendRequest={animationOpacityLoadingPage}
                    pageNumber={page}
                    handleSubmit={null}
                    handleChange={null} 
                    values={null} 
                    handleChangeAvatar={setAvatar}
                    avatar={avatar}
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
  
  /**
   * <FirstPage 
              handleChange={handleChange} 
              handleSubmit={handleSubmit}
              values={values}
            />
   */
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
      paddingVertical: "10%",
      marginHorizontal: "2.5%",
      borderTopLeftRadius: 40,
      borderBottomRightRadius: 40,
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
    },
  });