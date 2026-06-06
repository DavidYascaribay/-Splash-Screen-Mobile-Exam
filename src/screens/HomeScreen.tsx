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
      "¡Vamos Ecuador!",
      "La Tri llega al Mundial 2026 con talento, juventud y mucha ilusión.",
    );
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.container}>
      <View style={styles.headerCard}>
        <View style={styles.logoCircle}>
          <Image
            source={require("../../assets/logo-ecuador.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.label}>Selección Ecuatoriana</Text>
        <Text style={styles.title}>La Tri rumbo al Mundial 2026</Text>
        <Text style={styles.description}>
          Información rápida sobre Ecuador, sus partidos y jugadores destacados.
        </Text>
      </View>

      <View style={styles.infoRow}>
        <View style={styles.infoBox}>
          <Text style={styles.infoNumber}>E</Text>
          <Text style={styles.infoLabel}>Grupo</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoNumber}>3</Text>
          <Text style={styles.infoLabel}>Partidos</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoNumber}>5</Text>
          <Text style={styles.infoLabel}>Figuras</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Rivales del grupo</Text>

        <View style={styles.teamsGrid}>
          <View style={styles.teamCard}>
            <Text style={styles.flag}>🇪🇨</Text>
            <Text style={styles.teamName}>Ecuador</Text>
          </View>

          <View style={styles.teamCard}>
            <Text style={styles.flag}>🇩🇪</Text>
            <Text style={styles.teamName}>Alemania</Text>
          </View>

          <View style={styles.teamCard}>
            <Text style={styles.flag}>🇨🇮</Text>
            <Text style={styles.teamName}>Costa de Marfil</Text>
          </View>

          <View style={styles.teamCard}>
            <Text style={styles.flag}>🇨🇼</Text>
            <Text style={styles.teamName}>Curazao</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Partidos de Ecuador</Text>

        <View style={styles.matchCard}>
          <View style={styles.dateBox}>
            <Text style={styles.day}>14</Text>
            <Text style={styles.month}>JUN</Text>
          </View>

          <View style={styles.matchContent}>
            <Text style={styles.matchTitle}>Costa de Marfil vs Ecuador</Text>
            <Text style={styles.matchPlace}>Philadelphia Stadium</Text>
            <Text style={styles.matchNote}>Debut mundialista</Text>
          </View>
        </View>

        <View style={styles.matchCard}>
          <View style={styles.dateBox}>
            <Text style={styles.day}>20</Text>
            <Text style={styles.month}>JUN</Text>
          </View>

          <View style={styles.matchContent}>
            <Text style={styles.matchTitle}>Ecuador vs Curazao</Text>
            <Text style={styles.matchPlace}>Kansas City Stadium</Text>
            <Text style={styles.matchNote}>Partido clave</Text>
          </View>
        </View>

        <View style={styles.matchCard}>
          <View style={styles.dateBox}>
            <Text style={styles.day}>25</Text>
            <Text style={styles.month}>JUN</Text>
          </View>

          <View style={styles.matchContent}>
            <Text style={styles.matchTitle}>Ecuador vs Alemania</Text>
            <Text style={styles.matchPlace}>New York New Jersey Stadium</Text>
            <Text style={styles.matchNote}>Reto principal</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Jugadores destacados</Text>

        <View style={styles.playerCard}>
          <View style={styles.initialCircle}>
            <Text style={styles.initialText}>MC</Text>
          </View>

          <View style={styles.playerContent}>
            <Text style={styles.playerName}>Moisés Caicedo</Text>
            <Text style={styles.playerRole}>Mediocampista</Text>
            <Text style={styles.playerDescription}>
              Aporta equilibrio, recuperación y salida limpia desde el
              mediocampo.
            </Text>
          </View>
        </View>

        <View style={styles.playerCard}>
          <View style={styles.initialCircle}>
            <Text style={styles.initialText}>PH</Text>
          </View>

          <View style={styles.playerContent}>
            <Text style={styles.playerName}>Piero Hincapié</Text>
            <Text style={styles.playerRole}>Defensa central</Text>
            <Text style={styles.playerDescription}>
              Defensor rápido, fuerte y con buena salida desde atrás.
            </Text>
          </View>
        </View>

        <View style={styles.playerCard}>
          <View style={styles.initialCircle}>
            <Text style={styles.initialText}>WP</Text>
          </View>

          <View style={styles.playerContent}>
            <Text style={styles.playerName}>Willian Pacho</Text>
            <Text style={styles.playerRole}>Defensa central</Text>
            <Text style={styles.playerDescription}>
              Seguro en marca, ordenado y con experiencia internacional.
            </Text>
          </View>
        </View>

        <View style={styles.playerCard}>
          <View style={styles.initialCircle}>
            <Text style={styles.initialText}>PE</Text>
          </View>

          <View style={styles.playerContent}>
            <Text style={styles.playerName}>Pervis Estupiñán</Text>
            <Text style={styles.playerRole}>Lateral izquierdo</Text>
            <Text style={styles.playerDescription}>
              Velocidad, recorrido y apoyo constante por la banda izquierda.
            </Text>
          </View>
        </View>

        <View style={styles.playerCard}>
          <View style={styles.initialCircleCaptain}>
            <Text style={styles.initialTextCaptain}>EV</Text>
          </View>

          <View style={styles.playerContent}>
            <Text style={styles.playerName}>Enner Valencia</Text>
            <Text style={styles.playerRole}>Delantero y capitán</Text>
            <Text style={styles.playerDescription}>
              Referente ofensivo y máximo goleador histórico de Ecuador.
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={showMessage}>
        <Text style={styles.buttonText}>Enviar mensaje de apoyo</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F3F6FB",
  },
  container: {
    padding: 20,
    paddingTop: 52,
    paddingBottom: 36,
  },
  headerCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    padding: 24,
    alignItems: "center",
    marginBottom: 18,
    shadowColor: "#153E75",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 5,
  },
  logoCircle: {
    width: 138,
    height: 138,
    borderRadius: 69,
    backgroundColor: "#F8FAFF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#E6EDF7",
  },
  logo: {
    width: 102,
    height: 102,
  },
  label: {
    color: "#D69E00",
    fontSize: 13,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
  },
  title: {
    color: "#153E75",
    fontSize: 28,
    fontWeight: "900",
    textAlign: "center",
    lineHeight: 34,
  },
  description: {
    color: "#6B7A90",
    fontSize: 15,
    textAlign: "center",
    lineHeight: 22,
    marginTop: 10,
  },
  infoRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 22,
  },
  infoBox: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 16,
    alignItems: "center",
    shadowColor: "#153E75",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
  },
  infoNumber: {
    color: "#153E75",
    fontSize: 26,
    fontWeight: "900",
  },
  infoLabel: {
    color: "#7D8CA3",
    fontSize: 13,
    marginTop: 3,
  },
  section: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 18,
    marginBottom: 20,
    shadowColor: "#153E75",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.06,
    shadowRadius: 14,
    elevation: 4,
  },
  sectionTitle: {
    color: "#153E75",
    fontSize: 21,
    fontWeight: "900",
    marginBottom: 14,
  },
  teamsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  teamCard: {
    width: "48%",
    backgroundColor: "#F8FAFF",
    borderRadius: 16,
    padding: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E6EDF7",
  },
  flag: {
    fontSize: 28,
    marginBottom: 6,
  },
  teamName: {
    color: "#153E75",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "center",
  },
  matchCard: {
    flexDirection: "row",
    backgroundColor: "#F8FAFF",
    borderRadius: 18,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E6EDF7",
  },
  dateBox: {
    width: 58,
    height: 64,
    borderRadius: 16,
    backgroundColor: "#FFF3C4",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  day: {
    color: "#153E75",
    fontSize: 24,
    fontWeight: "900",
  },
  month: {
    color: "#D69E00",
    fontSize: 12,
    fontWeight: "900",
  },
  matchContent: {
    flex: 1,
  },
  matchTitle: {
    color: "#153E75",
    fontSize: 16,
    fontWeight: "900",
  },
  matchPlace: {
    color: "#6B7A90",
    fontSize: 13,
    marginTop: 4,
  },
  matchNote: {
    alignSelf: "flex-start",
    marginTop: 8,
    backgroundColor: "#EAF1FF",
    color: "#153E75",
    fontSize: 12,
    fontWeight: "800",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
    overflow: "hidden",
  },
  playerCard: {
    flexDirection: "row",
    backgroundColor: "#F8FAFF",
    borderRadius: 18,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E6EDF7",
  },
  initialCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#EAF1FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },
  initialCircleCaptain: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#FFE8E8",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },
  initialText: {
    color: "#153E75",
    fontWeight: "900",
  },
  initialTextCaptain: {
    color: "#C83333",
    fontWeight: "900",
  },
  playerContent: {
    flex: 1,
  },
  playerName: {
    color: "#153E75",
    fontSize: 16,
    fontWeight: "900",
  },
  playerRole: {
    color: "#D69E00",
    fontSize: 13,
    fontWeight: "800",
    marginTop: 2,
    marginBottom: 5,
  },
  playerDescription: {
    color: "#6B7A90",
    fontSize: 13,
    lineHeight: 19,
  },
  button: {
    backgroundColor: "#153E75",
    borderRadius: 18,
    paddingVertical: 17,
    alignItems: "center",
    marginTop: 2,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "900",
  },
});
