import { View, Text, Image } from "react-native";

import styles from "./styles";

export default function HomeContent() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.subTitle}>JESTESMY PROFESJONALI SERIO</Text>
        <Text style={styles.title}>Testy na prawko</Text>
      </View>
      <View style={styles.row}>
        <Image
          source={require("../../../../assets/images/car.png")}
          style={styles.logo}
        />
      </View>
    </View>
  );
}
