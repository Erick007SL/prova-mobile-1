import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

const PlaceholderImage = require("../component/image/soldado.png");

const Home = ({ navigation }) => {
  const signOutUser = () => {
    signOut(auth);
    navigation.navigate("Login");
  };

  const onLoginClick = () => {
    navigation.navigate("Ficha");
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={PlaceholderImage} style={styles.image} />
        <Text style={styles.titulo}>Principal</Text>
      </View>
      <View sytle={styles.corpo}>
        <View sytle={styles.menu}>
          <TouchableOpacity style={styles.botao} onPress={onLoginClick}>
            <Text style={styles.textoBotao}>Ficha Usuario</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={signOutUser}>
            <Text style={styles.textoBotao}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    gap: 10,
  },
  image: {
    width: "80%",
    height: 100,
    resizeMode: "contain",
  },
  titulo: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 60,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  botao: {
    backgroundColor: "orange",
    width: "75%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  textoBotao: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  corpo: {
    backgroundColor: "blue",
    flex: 1,
    width: "100%",
  },
  menu: {
    backgroundColor: "red",
    flex: 1,
    width: "35%",
  },
});

export default Home;
