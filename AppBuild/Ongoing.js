import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const Ongoing = () => {
  return (
    <>
      <Text style={styles.mainText}>Ongoing Tasks</Text>
      <View style={styles.OngoingCont}>
        <View style={styles.OngoingTask}>
          <Text style={styles.subText}>Software Development</Text>
        </View>
        <View style={styles.OngoingTask}>
          <Text style={styles.subText}>Critical Thinking</Text>
        </View>
        <View style={styles.OngoingTask}>
          <Text style={styles.subText}>Orientation For Level Hundreds</Text>
        </View>
        <View style={styles.OngoingTask}>
          <Text style={styles.subText}>Web Development</Text>
        </View>
        <View style={styles.OngoingTask}>
          <Text style={styles.subText}>
            Computer Organization And Architecture
          </Text>
        </View>
        <View style={styles.OngoingTask}>
          <Text style={styles.subText}>Mathematics</Text>
        </View>
        <View style={styles.OngoingTask}>
          <Text style={styles.subText}>Statistics</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 3,
    alignSelf: "flex-start",
  },
  OngoingCont: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "left",
    marginTop: 20,
    marginBottom: 30,
  },
  OngoingTask: {
    height: 130,
    width: 330,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#f7f0e8",
    marginBottom: 10,
    borderRadius: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Ongoing;
