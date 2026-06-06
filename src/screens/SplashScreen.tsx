import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo-ecuador.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Ecuador - La Tri</Text>
      <Text style={styles.subtitle}>Pasión y orgullo nacional</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003DA5",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFCC00",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: "#FFFFFF",
  },
});
