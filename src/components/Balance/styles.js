import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingVertical: 24,
    marginTop: -24,
    marginHorizontal: 14,
    borderRadius: 4,
    zIndex: 99,
  },
  itemTitle: {
    fontSize: 20,
    color: "#DADADA",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  currency: {
    color: "#DADADA",
    marginRight: 6,
  },
  balance: {
    fontSize: 22,
    color: "#2ecc71",
  },
  expense: {
    fontSize: 22,
    color: "#e74c3c",
  },
});

export default styles;
