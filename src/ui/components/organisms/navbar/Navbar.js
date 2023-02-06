import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import NavigationButton from "../../molecules/navigation-button/NavigationButton";
import NavigationLogo from "../../molecules/navigation-logo/NavigationLogo";

import styles from "./styles.js";

import userLogo from "../../../../assets/images/user-logo.png";

export default function Navbar() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <NavigationLogo text="Superlogo"></NavigationLogo>
      </View>
      <View style={styles.navigationContainer}>
        <View style={styles.navigationItems}>
          <NavigationButton text="Egzamin"></NavigationButton>
          <NavigationButton text="Nauka"></NavigationButton>
          <NavigationButton text="Kontakt"></NavigationButton>
          <NavigationButton image={userLogo}></NavigationButton>
        </View>
      </View>
    </View>
  );
}
