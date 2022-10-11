import React, {useState, useEffect} from "react";
import { View,  StyleSheet, Text, TouchableOpacity, FlatList } from "react-native";
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

    const firstPageVerification = (props) => {
      if(!correctEmail(props.email)) return alert("Correct email is required");
      if(!correctUsername(props.username)) return alert("Wrong username");
      if(!correctPassword(props.password)) return alert ("Wrong password. It should have 8 charcters with at least one number.")
      if(!samesPasswords(props.password, props.confirmPassword)) return alert("Password are not the sames");
      SetPage(page+1);
    }

    const handleSubmitSecondScreen = () => {
      if(dataTags.length === 0) return alert("Select at least one tag")
    }

    const dataTagsList = ["Shonen", "Seinen", "Shojo", "catégorie 4", "catégorie 5", "catégorie 6", "catégorie 7", "catégorie 8"];
    const [dataTags, setDataTags] = useState([]);
  
    useEffect(() => {
    }, []);

  
    
    return (
      <View style={{justifyContent: "center", backgroundColor: "#f66c6c", flex: 1,}}>
        <View style={styles.inputsView}>
          {console.log(page)}
        <Formik
          initialValues={{ 
            email: "", 
            username: "", 
            password: "", 
            confirmPassword: "",
            tagsList: [],
            generalCondition: false
          }}
          onSubmit={values => console.log(values)}
        >
        {({ handleChange, handleBlur, handleSubmit, values }) => (    
          <>
            {(() => {
              switch (page) {
                case 1:
                  return <RegistrationSecondScreen 
                            handleChangePage={SetPage} 
                            pageNumber={page} 
                            data={dataTags} 
                            listOfAllTags={dataTagsList} 
                            onChangeDataTags={setDataTags}
                          />;
                case 2:
                  return <RegistrationFirstScreen 
                            handleChangePage={SetPage} 
                            pageNumber={page}
                            handleSubmit={handleSubmit}
                            handleChange={handleChange} 
                            values={values} 
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
      paddingVertical: "15%",
      marginHorizontal: "2.5%",
      borderTopLeftRadius: 40,
      borderBottomRightRadius: 40,
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
    },
  });