import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const Status = () => {
  return (
    <View style={styles.StatusCont}>
      <Text style={styles.mainText}>
        Hello, Devs{"\n"}
        <Text style={styles.miniText}>14 tasks today</Text>
      </Text>
      <Image source={require("./assets/picture4.jpg")} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  StatusCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "left",
    marginTop: 20,
    marginBottom: 30,
  },
  mainText: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 3,
    Left: 10,
  },
  miniText: {
    fontSize: 10,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 1,
    marginTop: 20,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginLeft: 110,
  },
});
export default Status;
