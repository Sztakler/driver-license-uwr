import { View, Text, Image } from "react-native";

import styles from "./styles.js";


export default function NavigationButton(props) {
  
  let displayedComponent = <Text>Provide text or image path in props</Text>;
  
  if (props.text) {
    displayedComponent = <Text style={styles.text}>{props.text}</Text>;
  } else if (props.image) {
    displayedComponent = <Image style={styles.image} source={props.image} />;
  }
  
  return (
    <View style={styles.container}>
      {displayedComponent}
    </View>
  );
}
