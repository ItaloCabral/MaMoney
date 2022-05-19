import { StyleSheet, StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight + 10 ?? 64;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8000ff",
    paddingTop: statusBarHeight,
    flexDirection: "row",
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 54,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  username: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: "rgba(255,255,255,.5)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22,
  }
});

export default styles;
