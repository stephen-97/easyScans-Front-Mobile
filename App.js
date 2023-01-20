import { StyleSheet, View } from 'react-native';
import BottomBarNav from './src/navigation/BottomBarNav';
import {store} from "./src/redux/redux";
import { Provider } from 'react-redux';
import AccountNavigation from "./src/navigation/AccountNavigation";
import {NavigationContainer} from "@react-navigation/native";
import MainNavigator from "./src/navigation/MainNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <MainNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
