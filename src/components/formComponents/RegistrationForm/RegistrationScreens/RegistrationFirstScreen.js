import React, {useState, useEffect} from "react";
import InputText from "../../../InputText";
import { View } from "react-native";
import Button from "../../../Button";

const RegistrationFirstScreen = (props) => {
  
    return(
        <View style={{marginHorizontal: "10%"}}>
          <InputText onChangeText={props.handleChange('email')} title="Email" placeholder="Email " value={props.values.email}/>
          <InputText onChangeText={props.handleChange('username')} title="Email" placeholder="Username" value={props.values.email}/>
          <InputText onChangeText={props.handleChange('password')} title="Password" placeholder="Password" password value={props.values.password}/>
          <InputText onChangeText={props.handleChange('confirmPassword')} title="Confirm Password" placeholder="Confirm password" password value={props.values.password}/>
          <Button onPress={props.handleSubmit} title="Submit"/>
        </View>
      )
};

export default RegistrationFirstScreen;

