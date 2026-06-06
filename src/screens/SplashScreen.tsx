import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/logo-ecuador.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>Ecuador - La Tri</Text>
      <Text style={styles.subtitle}>Rumbo al Mundial 2026</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  logoContainer: {
    width: 190,
    height: 190,
    borderRadius: 95,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 26,
    shadowColor: "#003DA5",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.14,
    shadowRadius: 18,
    elevation: 8,
  },
  logo: {
    width: 135,
    height: 135,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#153E75",
    textAlign: "center",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 17,
    color: "#6B7A90",
    textAlign: "center",
  },
});
