import React from "react";
import { View, StyleSheet, Text, TouchableOpacity} from "react-native";
import propTypes from "prop-types";
import {connect} from "react-redux";
import ChangeEmailForm from "../../components/formComponents/AccountManagerForm/ChangeEmailForm";
import {useNavigation} from "@react-navigation/native";
import colors from "../../constants/colors";
import ChangePasswordForm from "../../components/formComponents/AccountManagerForm/ChangePasswordForm";

const AccountChangeFormScreen = (props) => {

  const navigation = useNavigation();

  return (
      <View>
        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
          <Text style={styles.closeButtonText}>
            {{
              "Changer Email": "Modification Email",
              "Changer Mot de passe": "Modification mot de passe",
            }[props.route.params.legend]}
          </Text>
        </TouchableOpacity>
        <View>
          {{
            "Changer Email": <ChangeEmailForm/>,
            "Changer Mot de passe": <ChangePasswordForm/>,
          }[props.route.params.legend]}
        </View>
      </View>
  );
};

AccountChangeFormScreen.propTypes = {
  user: propTypes.object,
  route: propTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(AccountChangeFormScreen);

const styles = StyleSheet.create({

  closeButton:{
    width: "100%",
    height: 65,
    backgroundColor: colors.darkButton,
    justifyContent: "center",
    alignItems: "center"
  },
  closeButtonText:{
    fontSize: 25,
    color: "#9f9f9f",
  },
});