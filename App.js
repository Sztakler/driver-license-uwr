import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View, Text } from "react-native";
import HomePage from "./src/ui/pages/HomePage";
import ExamPage from "./src/ui/pages/ExamPage";
import LearningPage from "./src/ui/pages/LearningPage";
import ContactPage from "./src/ui/pages/ContactPage";

const Stack = new createNativeStackNavigator();

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Exam" component={ExamPage}/>
        <Stack.Screen name="Learning" component={LearningPage}/>
        <Stack.Screen name="Contact" component={ContactPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    height: "100%",
  },
});
