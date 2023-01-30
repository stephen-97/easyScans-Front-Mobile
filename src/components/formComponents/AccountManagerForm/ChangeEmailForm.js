import React, {useState, useEffect, useRef} from "react";
import { View, StyleSheet, Alert, Modal} from "react-native";
import { icons } from "../../../constants";
import propTypes from "prop-types";
import {connect} from "react-redux";
import { useNavigation } from '@react-navigation/native';
import InputText from "../../InputText";
import Button from "../../Button";
import {Formik} from "formik";
import {correctEmail} from "../../../utility/formsVerifications/formVerificationFunctions";
import {Request} from "../../../request/requestFunctions";
import url from "../../../request/url";
import LoadingScreen from "../../../screens/UtilityScreens/LoadingScreen";

const ChangeEmailForm = (props) => {
  const navigation = useNavigation();

  const [modal, setModal] = useState(false);

  const formVerification = (values) => {
    //const correct = (values.email === values.confirmEmail) && (correctEmail(values.email) && correctEmail(values.confirmEmail))

    switch ((values.email === values.confirmEmail) && (correctEmail(values.email) && correctEmail(values.confirmEmail))) {
      case true:
        const bodyObject = JSON.stringify({
          'email' : values.email,
          'emailConfirm' : values.confirmEmail,
          'password' : values.password,
        })
        //navigation.navigate('LoadingScreen');
        setModal(true);
        Request(url.changeEmail.method, url.changeEmail.endpoint, bodyObject, null)
          .then(data => {
            console.log(data)
            if(data.status === url.changeEmail.status) {
              setModal(false);
            } else {
              setModal(false);
              Alert.alert("Erreur", "Réinitialisation de l'adresse mail impossible, réessayer")
            }
          })
          .catch((err) => {
            setModal(false);
            Alert.alert("Erreu Serveur", "")
            console.log(err)
          })
        break;
      case false:
        Alert.alert("Informations incorrects", 'Insérez deux emailsc identiques', [{}])
        break;
      default:
        break;
    }
  }

  return (
      <View style={styles.container}>
        <Formik
            initialValues={{'email': '', 'confirmEmail': '', 'password': ''}}
            onSubmit={values => formVerification(values)}
        >
          {({ handleChange,  handleSubmit, values }) => (
              <>
                <View style={styles.containerCurrentEmail}>
                  <InputText
                      onChangeText={handleChange('email')}
                      title="Nouvel Email"
                      placeholder="Nouvel Email"
                      icon={"email"}
                  />
                  <InputText
                      onChangeText={handleChange('confirmEmail')}
                      title="Nouvel Email"
                      placeholder="Nouvel Email"
                      icon={"email"}
                  />
                </View>
                <InputText
                    onChangeText={handleChange('password')}
                    title="Mot de passe"
                    placeholder="Mot de passe"
                    icon={"password"}
                    password
                />
                <Button title={"Changer adresse mail"} onPress={() => handleSubmit()}/>
                <Button title={"Annuler"} extraStyle={{backgroundColor: 'gray'}} extraStyleText={{color: 'white'}} onPress={() => handleSubmit()}/>
              </>
          )}
        </Formik>
        <Modal
            presentationStyle={'overFullScreen'}
            transparent={true}
            visible={modal}
        >
          <LoadingScreen />
        </Modal>
      </View>
  );
};

ChangeEmailForm.propTypes = {
  user: propTypes.object,
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(ChangeEmailForm);


const styles = StyleSheet.create({
  container:{
    marginHorizontal: 30,
  },
  containerCurrentEmail: {
    marginVertical: 20,
  },
  loadingContainer: {
    backgroundColor: 'red',
    height: 500,
  },
  loadingIcon: {
    marginVertical: 30,
  },
  centeredView: {
    backgroundColor: 'red',
    height: '30%',
  }
});