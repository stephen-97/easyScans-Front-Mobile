import React, {useState, useEffect, useRef} from "react";
<<<<<<< HEAD
import { View,  StyleSheet, Animated } from "react-native";
import {connect, useDispatch } from "react-redux";
import {setUser} from "../../../redux/redux"
import jwt_decode from 'jwt-decode';

import RegistrationFirstScreen from "./RegistrationScreens/RegistrationFirstScreen";
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

    const dispatch = useDispatch();

    const SignInRequest = async (values) => {
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
                    dispatch(setUser(jwt_decode(jsonData.jwt)))
                }
            });
    };


=======
import { View,  StyleSheet, Text, TouchableOpacity, FlatList,Animated } from "react-native";
import InputText from "../../InputText";
import { icons, colors } from "../../../constants";
import Button from "../../Button";
import { correctEmail, correctPassword, correctUsername, samesPasswords } from "../../../utility/formVerificationFunctions";
import RegistrationFirstScreen from "./RegistrationScreens/RegistrationFirstScreen";
import { Formik } from "formik";
import RegistrationSecondScreen from "./RegistrationScreens/RegistrationSecondScreen";

const RegistrationForm = (props) => {
  
   const numberOfPage = 3;
   const [page, SetPage] = useState(1);

    const backButton = () => {
      if(page >= 1) SetPage(page-1);
    }

    const handleSubmitSecondScreen = () => {
      if(dataTags.length === 0) return alert("Select at least one tag")
    }

    const dataTagsList = ["Shonen", "Seinen", "Shojo", "catégorie 4", "catégorie 5", "catégorie 6", "catégorie 7", "catégorie 8"];
    const [dataTags, setDataTags] = useState([]);
  
    useEffect(() => {
      //animationChangeScale();
    }, [page===2]);
    
    const animValue = useRef(new Animated.Value(600)).current;
    const animationChangeScale = () => {
      Animated.timing(animValue, {
        toValue: 50,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }

    const RegistrationLoadingScreen = () => {
      return (<View><Text>Test</Text></View>)
    }
  
    const [avatar, setAvatar] = useState(null);
>>>>>>> main
    
    return (
      <View style={{justifyContent: "center", backgroundColor: "#f66c6c", flex: 1,}}>
        <View style={styles.inputsView}>
<<<<<<< HEAD
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
=======
        <Formik
          initialValues={{ 
            email: "", 
            username: "", 
            password: "", 
            confirmPassword: "",
            tagsList: [],
            generalCondition: false,
          }}
          onSubmit={values => console.log(values)}
        >
        {({ handleChange, handleBlur, handleSubmit, values }) => (    
          <>
            {(() => {
              switch (page) {
                case 3:
                  return <RegistrationSecondScreen 
                            handleChangePage={SetPage} 
                            pageNumber={page} 
                            data={dataTags} 
                            listOfAllTags={dataTagsList} 
                            onChangeDataTags={setDataTags}
                          />;
                case 1:
                  return <RegistrationFirstScreen 
                            handleChangePage={SetPage} 
                            pageNumber={page}
                            handleSubmit={handleSubmit}
                            handleChange={handleChange} 
                            values={values} 
                            handleChangeAvatar={setAvatar}
                            avatar={avatar}
                          />;
                case 2:
                  return <RegistrationLoadingScreen
                          />;
                default:
                  return null;
              }
            })()}
          </>
        )}
        </Formik>
>>>>>>> main
        </View>
      </View>
    );
  };
<<<<<<< HEAD

  const mapStateToProps = state => {
      return {
          user: state.user
      }
  }
  export default connect(mapStateToProps )(RegistrationForm);
=======
  
  /**
   * <FirstPage 
              handleChange={handleChange} 
              handleSubmit={handleSubmit}
              values={values}
            />
   */
  export default RegistrationForm;
>>>>>>> main
  
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
<<<<<<< HEAD
      paddingVertical: "7.5%",
=======
      paddingVertical: "10%",
>>>>>>> main
      marginHorizontal: "2.5%",
      borderTopLeftRadius: 40,
      borderBottomRightRadius: 40,
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
    },
  });