import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 32, 
    paddingVertical: 40,
    marginBottom: 30,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    color: "#444",
    fontSize: 25,
    fontWeight: "600",
  },
  navigationItems: {
    flexDirection: "row",
    gap: 15,
  },
  navigationItem: {
    color: "white",
    fontSize: 25,
    fontWeight: "600",
  },
  userLogo: {
    alignSelf: "center",
    width: 40,
    height: 40,
    tintColor: "#444",
  },
});
