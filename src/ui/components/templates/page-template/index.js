import { View } from "react-native";

import styles from "./styles";

export default function PageTemplate({ header, content, footer, ...props }) {
  return (
    <View style={styles.wrapper} {...props}>
      <View style={styles.header}>{header}</View>
      <View style={styles.content}>{content}</View>
      <View style={styles.footer}>{footer}</View>
    </View>
  );
}
