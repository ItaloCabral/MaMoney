import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: .5,
    borderBottomColor: "#dadada",
    marginHorizontal: 8
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    marginBottom: 8,
  },
  date: {
    color: "#8e8e93",
    fontWeight: "bold",
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
  },
  balance: {
    fontSize: 16,
    color: "#2ecc71",
    fontWeight: "bold",
  },
  expense: {
    fontSize: 16,
    color: "#e74c3c",
    fontWeight: "bold",
  },
  placeHolder: {
    marginTop: 6,
    width: 160,
    height: 19,
    backgroundColor: "#e5e5e5",
    borderRadius: 8,
  }
});

export default styles;
