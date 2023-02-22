import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {TouchableHighlight } from "react-native";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import MangaScreen from "../screens/MangaScreen/MangaScreen";
import colors from "../constants/colors";
import Icon from "react-native-vector-icons/Ionicons";
import SearchScreen from "../screens/HomeScreen/SearchScreen";
import {useNavigation} from "@react-navigation/native";

const HomeScreenNavigation = () => {

  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
      <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
      >
        <Stack.Group screenOptions={{
          headerShown: true,
          title: '',
          headerBlurEffect: 'extraLight',
          headerTintColor: colors.darkButton,
          navigationBarColor: colors.darkButton,
          headerStyle: {
            backgroundColor: colors.darkButton
          },
          headerRight: () => {
            return (
                <TouchableHighlight style={{marginRight: 10}} onPress={() => navigation.navigate('SearchScreen')}>
                  <Icon name={'search-sharp'} size={30} color={'#f66c6c'}/>
                </TouchableHighlight>
            )
          }
        }}>
          <Stack.Screen
              name={"HomeScreen"}
              component={HomeScreen}
          />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_bottom',
            presentation: 'fullScreenModal'
          }}

        >
          <Stack.Screen name={"SearchScreen"} component={SearchScreen} />
          <Stack.Screen name={"MangaScreen"} component={MangaScreen} />
        </Stack.Group>
      </Stack.Navigator>
  );
};

export default HomeScreenNavigation;