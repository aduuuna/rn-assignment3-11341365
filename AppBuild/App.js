import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  text,
  ScrollView,
} from "react-native";
import Status from "./Status";
import Search from "./Search";
import Categories from "./Categories";
import Ongoing from "./Ongoing";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Status />
          <Search />
          <Categories />
          <Ongoing />
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#f7f0e8",
    alignItems: "center",
    alignContent: "center",
    height: "100%",
    padding: 20,
  },
});
