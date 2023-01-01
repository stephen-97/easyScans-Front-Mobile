import React, {useState, useEffect, useRef} from "react";
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
    
    return (
      <View style={{justifyContent: "center", backgroundColor: "#f66c6c", flex: 1,}}>
        <View style={styles.inputsView}>
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