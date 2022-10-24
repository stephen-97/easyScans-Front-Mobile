import { StyleSheet, Text, View } from 'react-native';
import BottomBarNav from './src/navigation/BottomBarNav';

export default function App() {
  return (
    <View style={styles.container}>
      <BottomBarNav />
    </View>
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
