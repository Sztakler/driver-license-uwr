import { View, Text, Image } from "react-native";

import styles from "./styles.js";


export default function NavigationButton(props) {
  return (
    <View style={styles.container}>
      {props.text !== undefined ? (
        <Text style={styles.text}>{props.text}</Text>
      ) : props.image !== undefined ? (
        <Image style={styles.image} source={props.image} />
      ) : (
        <Text>Provide text or image path in props</Text>
      )}
    </View>
  );
}
