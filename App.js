import { StyleSheet, View } from 'react-native';
import BottomBarNav from './src/navigation/BottomBarNav';
import {store} from "./src/redux/redux";
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <BottomBarNav />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
