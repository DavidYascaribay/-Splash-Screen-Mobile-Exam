import React from "react";
import {
    Alert,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function HomeScreen() {
  const showMessage = () => {
    Alert.alert(
      "La Tri",
      "¡Vamos Ecuador! Esta aplicación fue creada con React Native y Expo Go.",
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Selección Ecuatoriana de Fútbol</Text>

      <Image
        source={require("../../assets/logo-ecuador.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Datos básicos del equipo</Text>

        <Text style={styles.info}>Confederación: CONMEBOL</Text>
        <Text style={styles.info}>Entrenador: Sebastián Beccacece</Text>
        <Text style={styles.info}>Estadio: Rodrigo Paz Delgado, Quito</Text>
        <Text style={styles.info}>Colores: amarillo, azul y rojo</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={showMessage}>
        <Text style={styles.buttonText}>Mostrar mensaje</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FFCC00",
    alignItems: "center",
    padding: 24,
    paddingTop: 60,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#003DA5",
    textAlign: "center",
    marginBottom: 20,
  },
  logo: {
    width: 170,
    height: 170,
    marginBottom: 24,
  },
  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderWidth: 3,
    borderColor: "#003DA5",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#003DA5",
    marginBottom: 12,
    textAlign: "center",
  },
  info: {
    fontSize: 16,
    color: "#222222",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#003DA5",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
