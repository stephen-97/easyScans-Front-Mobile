import React, {useState, useEffect} from "react";
import InputText from "../../../InputText";
import { View } from "react-native";
import { correctEmail, correctUsername, correctPassword, samesPasswords } from "../../../../utility/formVerificationFunctions";
import Button from "../../../Button";

const RegistrationFirstScreen = (props) => {

  const firstPageVerification = () => {
    if(!correctEmail(props.values.email)) return alert("Correct email is required");
    if(!correctUsername(props.values.username)) return alert("Wrong username");
    if(!correctPassword(props.values.password)) return alert ("Wrong password. It should have 8 charcters with at least one number.")
    if(!samesPasswords(props.values.password, props.values.confirmPassword)) return alert("Password are not the sames");
    props.handleChangePage(props.pageNumber+1);
  }
  
    return(
        <View style={{marginHorizontal: "10%"}}>
          <InputText onChangeText={props.handleChange('email')} title="Email" placeholder="Email " value={props.values.email}/>
          <InputText onChangeText={props.handleChange('username')} title="Email" placeholder="Username" value={props.values.email}/>
          <InputText onChangeText={props.handleChange('password')} title="Password" placeholder="Password" password value={props.values.password}/>
          <InputText onChangeText={props.handleChange('confirmPassword')} title="Confirm Password" placeholder="Confirm password" password value={props.values.password}/>
          <Button onPress={() => firstPageVerification()} title="Submit"/>
        </View>
      )
};

export default RegistrationFirstScreen;

