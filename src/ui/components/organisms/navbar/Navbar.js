import { View, Text } from "react-native";
import { FlatList } from "react-native-web";
import { LinearGradient } from "expo-linear-gradient";

import LogoSVG from "../../../../assets/images/adidas.svg";
import styles from "./styles.js";

export default function Navbar() {
  return (
    <LinearGradient
      colors={["#2196f3", "#a268f0", "#1273de", "#bd97f8"]}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 0.0}}
      style={styles.container}
>
      {/* <View style={styles.container}> */}
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>Logo</Text>
        </View>
        <View style={styles.navigationContainer}>
          <View style={styles.navigationItems}>
            <Text style={styles.navigationItem}>Home</Text>
            <Text style={styles.navigationItem}>Tests</Text>
            <Text style={styles.navigationItem}>Learning</Text>
            <Text style={styles.navigationItem}>User</Text>
          </View>
        </View>
      {/* </View> */}
    </LinearGradient>
  );
}
