import React, {useState } from "react";
import {View, StyleSheet, Text,} from "react-native";
import propTypes from "prop-types";
import {connect} from "react-redux";
import InputText from "../../InputText";
import Button from "../../Button";

const AccountDeleteForm = (props) => {

  const [password, setPassword] = useState("");

  return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non efficitur urna, sed rutrum tellus.
          Maecenas aliquam ipsum augue. Fusce massa odio, fringilla at iaculis non, tristique a ipsum.
          Praesent mi purus, euismod id mi quis, eleifend porta leo. Nam ex tortor, mollis ac sapien vel, luctus vehicula justo.
          Maecenas pulvinar a diam sit amet dignissim. Duis malesuada maximus ante, quis condimentum lorem.
          Pellentesque cursus tortor sed nisi ullamcorper mollis.
          {"\n"}
          {"\n"}
          Suspendisse sed odio ac ipsum suscipit lobortis.
          Nulla interdum erat et consequat pretium. Maecenas eget dignissim nulla.
          Aenean et eros pulvinar nibh aliquet consectetur. Nulla facilisi.
          Curabitur vel erat sollicitudin, varius velit at, cursus nisl.
          Cras congue condimentum diam id pulvinar. Praesent at arcu iaculis, hendrerit ante id, accumsan lectus.
          Fusce tempor odio ipsum, et tempor magna tristique in.
          Integer vulputate, augue sed accumsan auctor, libero nisl pretium lacus, id lacinia lectus purus id nulla.
          Donec blandit metus eget sapien condimentum sagittis. Nam velit diam, ullamcorper in est in, posuere ornare orci.
        </Text>
        <InputText
          onChangeText={(e) => setPassword(e)}
          title="Mot de passe"
          placeholder="Mot de passe"
        />
        <Button title={"Supprimer mon compte"} onPress={() => handleSubmit()}/>
      </View>
  );
};

AccountDeleteForm.propTypes = {
  user: propTypes.object,
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(AccountDeleteForm);

const styles = StyleSheet.create({
  container:{
    marginHorizontal: 30,
  },
  containerCurrentEmail: {
    marginVertical: 20
  }
});