import React, {useState} from "react";
import {StyleSheet, Image, TouchableOpacity, View} from "react-native";
import { icons } from "../../constants";
import propTypes from "prop-types";
import url from '../../request/url'
import {constants} from "../../utility/constants/constants";

import {Request} from "../../request/requestFunctions";
import {connect, useDispatch} from "react-redux";
import * as ImagePicker from "expo-image-picker";
import {userObjectStorage} from "../../utility/security/encodeJwt";
import {setUser} from "../../redux/redux";


const AccountFieldAvatar = (props) => {

  const dispatch = useDispatch();

  const chooseAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      const objectBody = {
        'avatar': result.base64
      }
      const size = new Blob(result.base64).size
      Request(url.changeAvatar.method, url.changeAvatar.endpoint, JSON.stringify(objectBody), props.user.token)
          .then((json) => {
            if(json.status === 200)  dispatch(setUser(userObjectStorage(json.body.jwt)))
          })
          .catch((err) => console.log(err))
    }
  };


  return (
      <View style={styles.avatarBlock}>
        <View style={{borderRadius: 500}}>
          <TouchableOpacity
              style={styles.changeAvatarButtonContainer}
              onPress={() => chooseAvatar()}
          >
            <Image style={styles.changeAvatarButton} source={icons.plusIcon}/>
          </TouchableOpacity>
          <Image style={styles.avatar} source={props.user && props.user.avatar ? {uri: constants.avatarUrl(props.user.avatar)} : icons.avatar}/>
        </View>
      </View>
  );
};

AccountFieldAvatar.propTypes = {
  user: propTypes.object,
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(AccountFieldAvatar);

const styles = StyleSheet.create({
  avatar: {
    height: 220,
    width: 220,
    alignSelf: 'center',
    borderRadius: 500,
  },
  avatarBlock:{
    width: "100%",
    alignItems: 'center',
    paddingVertical: 15,
  },
  changeAvatarButtonContainer: {
    backgroundColor: '#d0d0d0',
    borderRadius: 500,
    position: 'absolute',
    zIndex: 1,
    top: 20,
    mozBorderRadius: 10,
    right: 20,
    borderColor: '#838383',
    borderWidth: 1
  },
  changeAvatarButton: {
    padding: 10,
    borderRadius: 500,
    height: 30,
    width: 30,
  },
});