import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import NavigationButton from "../../molecules/navigation-button/NavigationButton";

import styles from "./styles.js";

export default function Navbar() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Superlogo</Text>
      </View>
      <View style={styles.navigationContainer}>
        <View style={styles.navigationItems}>
          <NavigationButton text="Egzamin"></NavigationButton>
          <NavigationButton text="Nauka"></NavigationButton>
          <NavigationButton text="Kontakt"></NavigationButton>
          {/* <Text style={styles.navigationItem}>Egzamin</Text>
          <Text style={styles.navigationItem}>Nauka</Text>
          <Text style={styles.navigationItem}>Kontakt</Text> */}
          <Image style={styles.userLogo} source={require("../../../../assets/images/user-logo.png")} />
        </View>
      </View>
    </View>
  );
}
