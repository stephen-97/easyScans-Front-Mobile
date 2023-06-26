import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity} from "react-native";
import propTypes from "prop-types";
import {connect} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import colors from "../../constants/colors";
import AccountDeleteForm from "../../components/formComponents/AccountManagerForm/AccountDeleteForm";

const AccountDeleteFormScreen = (props) => {

  const navigation = useNavigation();

  return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
          <Text style={styles.closeButtonText}>Fermer</Text>
        </TouchableOpacity>
        <View style={styles.formContent}>
          <AccountDeleteForm />
        </View>
      </View>
  );
};

AccountDeleteFormScreen.propTypes = {
  user: propTypes.object,
  route: propTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(AccountDeleteFormScreen);

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  formContent:{
    paddingVertical: 50,
    justifyContent: "center"
  },
  closeButton:{
    width: "100%",
    height: "8.5%",
    backgroundColor: colors.darkButton,
    justifyContent: "center",
    alignItems: "center"
  },
  closeButtonText:{
    fontSize: 25,
    color: "#9f9f9f",
  },
  text: {
    backgroundColor: 'yellow',

  }
});