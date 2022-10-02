import React, {useState, useEffect} from "react";
import { View,  StyleSheet, Text } from "react-native";
import InputText from "../InputText";
import { icons, colors } from "../../constants";
import Button from "../Button";
import { correctEmail, correctPassword, correctUsername, samesPasswords } from "../../utility/formVerificationFunctions";
import { Formik } from "formik";

const AuthentifcationForm = (props) => {
  
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

    const FirstPage = (props) => {
      return(
        <>
          <InputText onChangeText={props.handleChange('email')} title="Email" placeholder="Email " value={props.values.email}/>
          <InputText onChangeText={props.handleChange('username')} title="Email" placeholder="Username" value={props.values.email}/>
          <InputText onChangeText={props.handleChange('password')} title="Password" placeholder="Password" password value={props.values.password}/>
          <InputText onChangeText={props.handleChange('confirmPassword')} title="Confirm Password" placeholder="Confirm password" password value={props.values.password}/>
          <Button onPress={props.handleSubmit} title="Submit"/>
        </>
      )
    }

    const SecondPage = (props) => {
      return(
        <>
          <Text>Choissisez </Text>
          <Button onPress={props.handleSubmit} title="Submit"/>
        </>
      )
    }

    const ThirdPage = (props) => {
      return(
        <>
        
        </>
      )
    }
  
    useEffect(() => {
    }, []);
    
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
            generalCondition: false
          }}
          onSubmit={values => console.log(values)}
        >
        {({ handleChange, handleBlur, handleSubmit, values }) => (    
          <>
            {(() => {
              switch (page) {
                case 1 :
                  return <SecondPage handleSubmit={handleSubmit} />;
                case 2:
                  return <FirstPage handleChange={handleChange} handleSubmit={() => firstPageVerification(values)} values={values} />;
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
  export default AuthentifcationForm;
  
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
      paddingHorizontal: "10%",
      borderTopLeftRadius: 40,
      borderBottomRightRadius: 40,
    }
  });