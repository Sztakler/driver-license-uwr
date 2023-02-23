import { StyleSheet } from "react-native";

const containerPadding = 40;

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    flexBasis: "auto",
    flexShrink: 1,
    justifyContent: "center",
    paddingHorizontal: 32,
    paddingVertical: containerPadding,
    gap: 110,
  },
  row: {
    width: "100%",
    alignItems: "center",
  },
  subTitle: {
    fontSize: 36,
    fontWeight: "400",
  },
  title: {
    fontSize: 95,
  },
  logo: {
    width: 500,
    height: 200,
  },
});
