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
        {/* <Text style={styles.logo}>Superlogo</Text> */}
      </View>
      <View style={styles.navigationContainer}>
        <View style={styles.navigationItems}>
          <NavigationButton text="Egzamin"></NavigationButton>
          <NavigationButton text="Nauka"></NavigationButton>
          <NavigationButton text="Kontakt"></NavigationButton>
          <NavigationButton image={userLogo}></NavigationButton>
          {/* <Text style={styles.navigationItem}>Egzamin</Text>
          <Text style={styles.navigationItem}>Nauka</Text>
          <Text style={styles.navigationItem}>Kontakt</Text> */}
          {/* <Image style={styles.userLogo} source={userLogo} /> */}
        </View>
      </View>
    </View>
  );
}
