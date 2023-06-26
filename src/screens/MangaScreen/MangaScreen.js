import React, {useState} from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Pressable,
  Animated,
} from "react-native";
import propTypes from "prop-types";
import {connect} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {LinearGradient} from "expo-linear-gradient";
import url from "../../request/url";
import colors from "../../constants/colors";
import Line from "../../utility/Line";
import LongText from "../../components/LongText";

const MangaScreen = (props) => {

  const navigation = useNavigation();

  const data = ['chapite 1', 'chapitre 2', 'chapitre 3', 'chapite 1', 'chapitre 2', 'chapitre 3', 'chapite 1', 'chapitre 2', 'chapitre 3', 'chapite 1', 'chapitre 2', 'chapitre 3']
  const [fullSummary, setFullSummary] = useState(false)

  const headerHeight = 100

  const scrollY = new Animated.Value(0)
  const headerY = scrollY.interpolate( {
    inputRange: [0, headerHeight],
    outputRange: [0, -headerHeight]
  })
  const headerComponent = () => {
    return (
        <>
          <View style={{ backgroundColor: 'red'}}>
            <Image
                source={{uri: url.avatarUrl(props.user.avatar)}}
                style={styles.image}
            />
            <LinearGradient
                colors={['#FFFFFF00', '#FFFFFF']}
                start={{x:0, y:0}}
                end={{x: 0, y:0.9}}
                style={styles.linearGradient}
            >
            </LinearGradient>
          </View>

          <View style={styles.titleAndSummaryContainer}>
            <Text style={styles.mangaTitle}>Titre manga</Text>
            <LongText text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
                'Nulla eget tincidunt nibh, non blandit augue.\n' +
                'Maecenas eu efficitur lectus, vel gravida velit.\n' +
                'Sed fermentum, mauris nec consectetur mattis, nisi arcu faucibus turpis,\n' +
                'sit amet ullamcorper est ligula et purus. Lorem ipsum dolor sit amet,\n' +
                'consectetur adipiscing elit. Aliquam commodo eros sit amet diam ullamcorper,\n' +
                'vel placerat dui elementum. Etiam vehicula faucibus metus, sit amet egestas erat aliquet in.\n' +
                'Nunc risus dolor, porttitor eget tellus a, viverra elementum mauris.\n' +
                'Nam ut enim et lacus sagittis feugiat. Pellentesque sagittis eleifend laoreet.\n' +
                'Cras condimentum ante urna, vitae consectetur ante dapibus et. Donec sit.'}
            />
          </View>

          <View style={styles.buttonView}>
            <TouchableOpacity
              style={styles.button}
            >
              <Text style={styles.textButton}>Chapitre</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
            >
              <Text style={styles.textButton}>Tome</Text>
            </TouchableOpacity>
            </View>

          <View style={[styles.itemContainer, {marginBottom: 50}]}>
            <Line color={'rgba(0,0,0,0.3)'}/>
            <View style={styles.item}>
              <Text style={styles.itemText}>Dernier chapitre</Text>
            </View>
            <Line color={'rgba(0,0,0,0.3)'}/>
          </View>
        </>
    )
  }

  return (
      <>
        <Animated.View style={[styles.header, {height: headerHeight}]}></Animated.View>
      <FlatList
          data={data}
          onScroll={Animated.event([
            {
              nativeEvent:{contentOffset:{y: scrollY}}
            }
          ])}
          style={{backgroundColor: 'white', paddingTop: 100}}
          keyExtractor={(item, index) => {
            return index.toString()
          }}
          showsHorizontalScrollIndicator={false}
          horizontal={false}
          ListHeaderComponent={headerComponent}
          renderItem={({item, index}) => (
              <View style={styles.itemContainer}>
                {index=== 0 ? <Line color={'rgba(0,0,0,0.3)'}/> : null}
                <View style={styles.item}>
                  <Text style={styles.itemText}>{item}</Text>
                </View>
                <Line color={'rgba(0,0,0,0.3)'}/>
              </View>
          )}
      />
      </>
  );
};

MangaScreen.propTypes = {
  user: propTypes.object,
  route: propTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(MangaScreen);

const styles = StyleSheet.create({
  container: {
  },
  header: {
    position:'absolute',
    width: '100%',
    backgroundColor: colors.darkButton,
    zIndex: 1,
  },
  closeButton: {
    fontSize: 20,
    backgroundColor: "yellow",
    textAlign: 'center'
  },
  titleAndSummaryContainer: {
    marginHorizontal: 10,
  },
  mangaTitle: {
    fontSize: 22,
    textAlign: 'left',
    marginBottom: 20,
  },
  mangaSummary: {

  },
  image: {
    top: 0,
    width: '100%',
    height: 500,
  },
  linearGradient: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 200,
    zIndex: 1
  },
  listContainer : {

  },
  buttonView: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 30,
  },
  button: {
    backgroundColor: colors.submitButton,
    width: 100,
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
  },
  textButton: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white'
  },
  itemContainer: {
    marginHorizontal: 10,
  },
  item: {
    height: 50,
    textAlign: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 15,
    textAlign: 'center',
  },
  lastChapter: {
    fontSize: 18,
    fontWeight: '700'
  }
});

//<Text style={styles.closeButton} onPress={() => navigation.goBack()}>Fermer</Text>
//<Text style={styles.lastChapter}>Dernier chapitre </Text>