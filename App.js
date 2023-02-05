import { StyleSheet, View } from 'react-native';
import HomePage from './src/ui/pages/HomePage';

export default function App() {
  return (
    <View style={styles.body}>
      <HomePage></HomePage>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    height: "100%",
  }
});
