import { View, Text, Image } from "react-native";

import styles from "./styles.js";

export default function NavigationButton(props) {
  return (
  <View style={styles.container}>
    <Text style={styles.text}>{props.text}</Text>
  </View>
  )
}
