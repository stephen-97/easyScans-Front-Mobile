import React, {useState, useEffect} from "react";
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import Button from "../../../Button";
import colors from "../../../../constants/colors";

const RegistrationSecondScreen = (props) => {

  const checkTagOnData = (tag) => {
    if(props.data.includes(tag)){ 
      props.onChangeDataTags(props.data.filter(data => data !== tag));
    } else props.onChangeDataTags([...props.data, tag]);
  }

  const formVerification = () => {
    if(props.data.length === 0) return alert("Put a least one tag");
    return props.handleChangePage(props.pageNumber+1);
  }


  
    return(
      <>
        <Text style={styles.title}>Genre favoris</Text>
          <FlatList 
            data={props.listOfAllTags}
            contentContainerStyle={styles.flatListStyle}
            columnWrapperStyle={{flexWrap : 'wrap'}}
            numColumns={3}
            key={3}
            renderItem={({item}) => (
              <TouchableOpacity
                activeOpacity={.9}
                style={props.data.includes(item) ? styles.tagsTouchable : styles.tagsTouchable2}
                onPress={() => checkTagOnData(item)}
              >
                <Text style={styles.itemText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
          <Button extraStyle={{marginHorizontal: "10%"}} onPress={() => formVerification()} title="Submit"/>
      </>
      )
};

const styles = StyleSheet.create({
  tagsView:{
    backgroundColor: "white",
    paddingVertical: "15%",
    marginHorizontal: "2.5%",
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  flatListStyle: {
    //alignItems: "center",
    flexDirection: "column",
    marginTop: 20,
    marginVertical: 10,
    marginHorizontal: 5,
    padding: 10,
    flexWrap: 'nowrap',
  },
  tagsTouchable: {
    backgroundColor :colors.inputBorderColorFocus, 
    borderRadius: 50,
    alignSelf: "flex-start",
    margin: 5,
    padding: 10,
  },
  tagsTouchable2: {
    backgroundColor :"#d5d0d0", 
    borderRadius: 50,
    alignSelf: "flex-start",
    margin: 5,
    padding: 10,
  },
  itemText:{
    color: "white",
    fontSize: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
  });

export default RegistrationSecondScreen;

