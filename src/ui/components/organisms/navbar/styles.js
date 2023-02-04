import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    
    elevation: 10,
  },
  logo: {
    color: "white",
    fontSize: 25,
    fontWeight: 600
  },
  navigationItems: {
    flexDirection: "row",
    gap: 15,
  },
  navigationItem: {
    color: "white",
    fontSize: 25,
    fontWeight: 600
  }
});
