import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles.js";


export default function NavigationButton({text, image, navigationTarget}) {

  const navigation = useNavigation();
  let displayedComponent = <Text>Provide text or image path in props</Text>;
  
  if (text) {
    displayedComponent = <Text style={styles.text}>{text}</Text>;
  } else if (image) {
    displayedComponent = <Image style={styles.image} source={image} />;
  }

  return (
    <Pressable 
    title={"Go to " + navigationTarget}
    onPress={() => navigation.navigate(navigationTarget)}
    style={styles.container}>
     {displayedComponent}
    </Pressable>
  );
}
