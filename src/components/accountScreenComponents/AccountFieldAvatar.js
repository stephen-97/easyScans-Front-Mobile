import React from "react";
import {StyleSheet, Image, TouchableOpacity, View} from "react-native";
import { icons } from "../../constants";
import propTypes from "prop-types";
import {url} from "../../utility/url/url";
import {connect} from "react-redux";

const AccountFieldAvatar = (props) => {

  return (
      <View style={styles.avatarBlock}>
        <View style={{borderRadius: 500}}>
          <TouchableOpacity
              style={styles.changeAvatarButtonContainer}
          >
            <Image style={styles.changeAvatarButton} source={icons.plusIcon}/>
          </TouchableOpacity>
          <Image style={styles.avatar} source={props.user && props.user.avatar ? {uri: url.avatarUrl(props.user.avatar)} : icons.avatar}/>
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