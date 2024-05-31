import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  text,
} from "react-native";
import pic4 from "./assets/picture4.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.field1}>
          <Text style={styles.header}>
            {"\n"}Hello, Devs {"\n"}
            <Text style={styles.miniHeader}>14 task today</Text>
          </Text>
          <Image source={pic4} style={styles.picFour} />
        </View>
        <View style={styles.field2}>
          <TextInput style={styles.input} placeholder="Search" value={text} />
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "pink",
    height: "100%",
    margin: 0,
    padding: 10,
  },
  header: {
    textAlign: "left",
    fontSize: 30,
    fontWeight: "bold",
    top: -24,
  },
  miniHeader: {
    fontSize: 14,
    fontWeight: "normal",
    letterSpacing: 1,
  },
  picFour: {
    width: 50,
    height: 50,
    borderRadius: 20,
    alignSelf: "flex-end",
    marginTop: -73,
  },
  field1: {
    display: "flex",

    borderWidth: 1,
    //borderColor: "#ccc",
    //borderRadius: 4,
    padding: 10,
    height: 120,

    marginTop: 30,
  },
  input: {
    height: 55,
    borderWidth: 2,
    width: "70%",
    borderColor: "balck",
    borderRadius: 15,
    marginVertical: 8,
    padding: 8,
    fontWeight: "bold",
    fontSize: 20,
  },

  field2: {
    padding: 10,
    height: 100,
    marginBottom: 30,
    borderColor: "#ccc",
    borderRadius: 4,
    borderWidth: 2,
    alignContent: "center",
    // alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  mag: {
    width: 24,
    height: 24,
    marginRight: 8,
    backgroundColor: "red",
    color: "black",
  },
});
