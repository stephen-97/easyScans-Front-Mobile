import React, {useState} from "react";
import {StyleSheet, Image, TouchableOpacity, View} from "react-native";
import { icons } from "../../constants";
import propTypes from "prop-types";
import url from '../../request/url'
import UserWithoutAvatar from '../../assets/icons/userWithoutAvatar.svg'

import {Request} from "../../request/requestFunctions";
import {connect, useDispatch} from "react-redux";
import * as ImagePicker from "expo-image-picker";
import {userObjectStorage} from "../../utility/security/encodeJwt";
import {setUser} from "../../redux/redux";
import Icon from 'react-native-vector-icons/Ionicons';
import colors from "../../constants/colors";


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
      Request(url.changeAvatar.method, url.changeAvatar.endpoint, JSON.stringify(objectBody), props.user.token)
          .then((json) => {
            console.log()
            if(json.status === url.changeAvatar.status) {
              dispatch(setUser(userObjectStorage(json.body.jwt)))
            }
          })
          .catch((err) => {
            console.log(err)
          })
    }
  };


  return (
      <View style={styles.avatarBlock}>
        <View style={{borderRadius: 500}}>
          <TouchableOpacity
              style={styles.changeAvatarButtonContainer}
              onPress={() => chooseAvatar()}
          >
            <Icon name={'add'} size={30} color={colors.darkButton} />
          </TouchableOpacity>
          {props.user.avatar ?
              <Image style={styles.avatar} source={{uri: url.avatarUrl(props.user.avatar)}}/>
              :
              <UserWithoutAvatar height={220} width={220} style={styles.avatar}/>
          }
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
    right: 20,
    borderColor: '#838383',
    borderWidth: 1,
    justifyContent: 'center'
  },
});