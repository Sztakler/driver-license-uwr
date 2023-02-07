import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import HomePage from "./src/ui/pages/HomePage";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.body}>
        <HomePage></HomePage>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    height: "100%",
  },
});
