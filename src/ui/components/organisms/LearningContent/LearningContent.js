import { View, Text, Image } from "react-native";

import styles from "./styles";

export default function LearningContent() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.subTitle}>JESTESMY PROFESJONALNI SERIO</Text>
        <Text style={styles.title}>Tu będą kiedyś materiały do nauki</Text>
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
