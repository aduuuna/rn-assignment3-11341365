import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Search = () => {
  return (
    <View style={styles.SearchCont}>
      <TextInput style={styles.input} placeholder="Search" />
      <Icon name="search" size={20} style={styles.searchIcon} />
      <TouchableOpacity
        style={styles.Button}
        onPress={() => console.log("Button Pressed!")}
      >
        <Image
          source={require("./assets/picture2.jpg")}
          style={styles.ButtonImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  SearchCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "left",

    marginBottom: 30,
  },

  input: {
    height: 50,
    width: 240,
    borderColor: "balck",
    borderRadius: 10,
    right: 10,
    paddingLeft: 45,
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: "white",
  },
  image: {
    height: 30,
    width: 50,
    borderRadius: 50,
    marginLeft: 150,
  },

  Button: {
    height: 50,
    width: 50,
    borderRadius: 20,
    alignSelf: "flex-end",
    backgroundColor: "black",
    left: 2,
  },
  ButtonImage: {
    height: 50,
    width: 50,
    borderRadius: 20,
  },
  searchIcon: {
    color: "black",
    top: 15,
    right: 234,
  },
});

export default Search;
