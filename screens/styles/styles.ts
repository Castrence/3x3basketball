import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 20,
  },

  center: {
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  timer: {
    color: "orange",
    fontSize: 55,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },

  teamsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  teamCard: {
    backgroundColor: "#222",
    width: "48%",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
  },

  teamName: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },

  score: {
    color: "orange",
    fontSize: 70,
    fontWeight: "bold",
    marginVertical: 10,
  },

  foulText: {
    color: "white",
    fontSize: 20,
    marginTop: 10,
  },

  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 5,
    width: 100,
    alignItems: "center",
  },

  plusButton: {
    backgroundColor: "green",
  },

  minusButton: {
    backgroundColor: "red",
  },

  foulButton: {
    backgroundColor: "orange",
  },

  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

  saveButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 12,
    marginTop: 25,
  },

  historyButton: {
    backgroundColor: "#8E44AD",
    padding: 15,
    borderRadius: 12,
    marginTop: 15,
  },

  bigButtonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },

  historyCard: {
    backgroundColor: "#222",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },

  historyScore: {
    color: "orange",
    fontSize: 24,
    fontWeight: "bold",
  },

  historyDate: {
    color: "white",
    marginTop: 5,
  },
});

export default styles;