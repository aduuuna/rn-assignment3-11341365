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
  Button,
} from "react-native";
import pic4 from "./assets/picture4.jpg";
import pic2 from "./assets/picture2.jpg";
import HorizontalScrollView from "./HorizontalScrollView";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.field1}>
            <Text style={styles.header}>
              {"\n"}Hello, Devs {"\n"}
              <Text style={styles.miniHeader}>14 tasks today</Text>
            </Text>
            <Image source={pic4} style={styles.picFour} />
          </View>
          <View style={styles.field2}>
            <TextInput style={styles.input} placeholder="Search" value={text} />
            <Image source={pic2} style={styles.picTwo} />
          </View>
          <Text style={styles.Cate}>Categories{"\n"}</Text>
          <HorizontalScrollView />
          <StatusBar style="auto" />
        </SafeAreaView>
      </View>
    </ScrollView>
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
    padding: 10,
    height: 110,

    marginTop: 30,
  },
  input: {
    height: 55,
    width: "78%",
    borderColor: "balck",
    borderRadius: 15,
    marginVertical: 8,
    padding: 8,
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: "white",
  },

  field2: {
    padding: 10,
    height: 80,
    marginBottom: 30,
    alignContent: "center",
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
  picTwo: {
    width: 50,
    height: 50,
    borderRadius: 20,
    alignSelf: "flex-end",
    top: -60,
  },
  Cate: {
    fontWeight: "600",
    fontSize: 25,
    marginLeft: 10,
    letterSpacing: 1,
  },
});
