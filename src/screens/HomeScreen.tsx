import React, { useState } from "react";
import {
    Image,
    Modal,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

type Match = {
  type: "match";
  day: string;
  month: string;
  title: string;
  rival: string;
  date: string;
  hour: string;
  stadium: string;
  city: string;
  note: string;
  analysis: string;
  image: any;
};

type Player = {
  type: "player";
  initials: string;
  name: string;
  club: string;
  position: string;
  goals: string;
  debut: string;
  clubs: string[];
  achievements: string[];
  importance: string;
  image: any;
  captain?: boolean;
};

type DetailItem = Match | Player;

const COLORS = {
  background: "#C7D6CE",
  dark: "#151515",
  coral: "#FF6B5E",
  yellow: "#FFD35A",
  blue: "#6D73FF",
  green: "#DDE9DD",
  white: "#FFFFFF",
};

const matches: Match[] = [
  {
    type: "match",
    day: "14",
    month: "JUN",
    title: "Costa de Marfil vs Ecuador",
    rival: "Costa de Marfil",
    date: "Domingo, 14 de junio de 2026",
    hour: "18:00 hora Ecuador",
    stadium: "Philadelphia Stadium",
    city: "Filadelfia, Estados Unidos",
    note: "Debut mundialista",
    image: require("../../assets/stadiums/philadelphia.jpg"),
    analysis:
      "Será el primer partido de Ecuador en el Mundial 2026. Es clave iniciar con concentración, presión alta y orden defensivo. Costa de Marfil suele ser un rival físico y rápido, por lo que Ecuador debe manejar bien el mediocampo y aprovechar las transiciones ofensivas.",
  },
  {
    type: "match",
    day: "20",
    month: "JUN",
    title: "Ecuador vs Curazao",
    rival: "Curazao",
    date: "Sábado, 20 de junio de 2026",
    hour: "21:00 hora Ecuador",
    stadium: "Kansas City Stadium",
    city: "Kansas City, Estados Unidos",
    note: "Partido clave",
    image: require("../../assets/stadiums/kansas-city.jpg"),
    analysis:
      "Este puede ser el partido más importante para sumar puntos. Ecuador debería tomar la iniciativa, controlar la posesión y atacar con paciencia. Ganar este encuentro podría dejar a La Tri muy cerca de la clasificación a la siguiente ronda.",
  },
  {
    type: "match",
    day: "25",
    month: "JUN",
    title: "Ecuador vs Alemania",
    rival: "Alemania",
    date: "Jueves, 25 de junio de 2026",
    hour: "15:00 hora Ecuador",
    stadium: "New York New Jersey Stadium",
    city: "East Rutherford, Estados Unidos",
    note: "Reto principal",
    image: require("../../assets/stadiums/new-york-new-jersey.png"),
    analysis:
      "Alemania será el rival más fuerte del grupo por historia, jerarquía y calidad individual. Ecuador necesitará máxima intensidad, bloque compacto y mucha personalidad. Moisés Caicedo será fundamental para cortar circuitos de juego y sostener al equipo.",
  },
];

const players: Player[] = [
  {
    type: "player",
    initials: "MC",
    name: "Moisés Caicedo",
    club: "Chelsea FC",
    position: "Mediocampista defensivo",
    goals: "3 goles con Ecuador",
    debut: "Debutó con Ecuador en 2020",
    image: require("../../assets/players/caicedo.png"),
    clubs: [
      "Independiente del Valle",
      "Brighton & Hove Albion",
      "Beerschot",
      "Chelsea FC",
    ],
    achievements: [
      "Campeón de la UEFA Conference League 2024-25 con Chelsea",
      "Uno de los fichajes ecuatorianos más importantes en Europa",
      "Figura clave de Ecuador en eliminatorias y torneos internacionales",
    ],
    importance:
      "Es el equilibrio de Ecuador. Recupera balones, presiona, distribuye rápido y permite que el equipo pueda competir contra selecciones fuertes.",
  },
  {
    type: "player",
    initials: "PH",
    name: "Piero Hincapié",
    club: "Arsenal FC",
    position: "Defensa central / lateral izquierdo",
    goals: "Defensor con aporte ocasional en ataque",
    debut: "Debutó con Ecuador en 2021",
    image: require("../../assets/players/hincapie.png"),
    clubs: [
      "Independiente del Valle",
      "Talleres de Córdoba",
      "Bayer Leverkusen",
      "Arsenal FC",
    ],
    achievements: [
      "Campeón de Bundesliga con Bayer Leverkusen",
      "Campeón de Copa de Alemania con Bayer Leverkusen",
      "Titular habitual en la defensa de Ecuador",
    ],
    importance:
      "Es importante porque combina velocidad, fuerza y salida limpia. Puede defender como central o lateral, lo que le da variantes tácticas a Ecuador.",
  },
  {
    type: "player",
    initials: "WP",
    name: "Willian Pacho",
    club: "Paris Saint-Germain",
    position: "Defensa central",
    goals: "Defensor central, prioridad defensiva",
    debut: "Debutó con Ecuador en 2023",
    image: require("../../assets/players/pacho.png"),
    clubs: [
      "Independiente del Valle",
      "Royal Antwerp",
      "Eintracht Frankfurt",
      "Paris Saint-Germain",
    ],
    achievements: [
      "Campeón de la UEFA Champions League con PSG",
      "Campeón de liga en Bélgica con Royal Antwerp",
      "Uno de los defensores ecuatorianos más destacados en Europa",
    ],
    importance:
      "Aporta seguridad, anticipación y fortaleza física. Es uno de los centrales más importantes de Ecuador para sostener el bloque defensivo.",
  },
  {
    type: "player",
    initials: "PE",
    name: "Pervis Estupiñán",
    club: "AC Milan",
    position: "Lateral izquierdo",
    goals: "Lateral con aporte ofensivo",
    debut: "Debutó con Ecuador en 2019",
    image: require("../../assets/players/pervis.png"),
    clubs: [
      "Liga de Quito",
      "Watford",
      "Osasuna",
      "Mallorca",
      "Villarreal",
      "Brighton & Hove Albion",
      "AC Milan",
    ],
    achievements: [
      "Campeón de UEFA Europa League con Villarreal",
      "Experiencia en Premier League, LaLiga y Serie A",
      "Lateral titular de Ecuador durante varios procesos",
    ],
    importance:
      "Es clave por su velocidad y recorrido. Le da salida por izquierda, profundidad ofensiva y centros al área.",
  },
  {
    type: "player",
    initials: "EV",
    name: "Enner Valencia",
    club: "Internacional",
    position: "Delantero centro",
    goals: "49 goles con Ecuador",
    debut: "Debutó con Ecuador en 2012",
    image: require("../../assets/players/enner.png"),
    captain: true,
    clubs: [
      "Emelec",
      "Pachuca",
      "West Ham United",
      "Everton",
      "Tigres UANL",
      "Fenerbahçe",
      "Internacional",
    ],
    achievements: [
      "Máximo goleador histórico de la Selección Ecuatoriana",
      "Capitán de Ecuador",
      "Goleador ecuatoriano en Copas del Mundo",
    ],
    importance:
      "Es el líder ofensivo y emocional de La Tri. Su experiencia puede ser decisiva en partidos cerrados y momentos de presión.",
  },
];

export default function HomeScreen() {
  const [selectedItem, setSelectedItem] = useState<DetailItem | null>(null);

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <View style={styles.main}>
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.container}
      >
        <View style={styles.topBar}>
          <Text style={styles.topBarTitle}>LA TRI APP</Text>

          <View style={styles.topBadge}>
            <Text style={styles.topBadgeText}>2026</Text>
          </View>
        </View>

        <View style={styles.headerCard}>
          <View style={styles.logoCircle}>
            <Image
              source={require("../../assets/logo-ecuador.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.label}>Selección Ecuatoriana</Text>
          <Text style={styles.title}>Rumbo al Mundial</Text>
          <Text style={styles.description}>
            Partidos, jugadores clave y análisis de Ecuador en la Copa Mundial.
          </Text>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoBox}>
            <Text style={styles.infoNumber}>E</Text>
            <Text style={styles.infoLabel}>Grupo</Text>
          </View>

          <View style={styles.infoBoxYellow}>
            <Text style={styles.infoNumber}>3</Text>
            <Text style={styles.infoLabel}>Partidos</Text>
          </View>

          <View style={styles.infoBoxBlue}>
            <Text style={styles.infoNumberWhite}>5</Text>
            <Text style={styles.infoLabelWhite}>Figuras</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionTitleRow}>
            <Text style={styles.sectionTitle}>Rivales del Grupo</Text>
            <Text style={styles.tapHint}>Grupo E · Mundial 2026</Text>
          </View>

          <View style={styles.teamsGrid}>
            <View style={styles.teamCard}>
              <Text style={styles.flag}>🇪🇨</Text>
              <Text style={styles.teamName}>Ecuador</Text>
            </View>

            <View style={styles.teamCardYellow}>
              <Text style={styles.flag}>🇩🇪</Text>
              <Text style={styles.teamName}>Alemania</Text>
            </View>

            <View style={styles.teamCardCoral}>
              <Text style={styles.flag}>🇨🇮</Text>
              <Text style={styles.teamName}>Costa de Marfil</Text>
            </View>

            <View style={styles.teamCardBlue}>
              <Text style={styles.flag}>🇨🇼</Text>
              <Text style={styles.teamNameWhite}>Curazao</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionTitleRow}>
            <Text style={styles.sectionTitle}>Partidos</Text>
            <Text style={styles.tapHint}>
              Toca una tarjeta para ver análisis
            </Text>
          </View>

          {matches.map((match) => (
            <Pressable
              key={match.title}
              onPress={() => setSelectedItem(match)}
              style={({ pressed }) => [
                styles.matchCard,
                pressed && styles.cardPressed,
              ]}
            >
              <View style={styles.dateBox}>
                <Text style={styles.day}>{match.day}</Text>
                <Text style={styles.month}>{match.month}</Text>
              </View>

              <View style={styles.matchContent}>
                <Text style={styles.matchTitle}>{match.title}</Text>
                <Text style={styles.matchPlace}>{match.stadium}</Text>
                <Text style={styles.matchHour}>{match.hour}</Text>
              </View>

              <View style={styles.arrowCircle}>
                <Text style={styles.arrow}>›</Text>
              </View>
            </Pressable>
          ))}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionTitleRow}>
            <Text style={styles.sectionTitle}>Jugadores</Text>
            <Text style={styles.tapHint}>
              Toca un jugador para ver su ficha
            </Text>
          </View>

          {players.map((player) => (
            <Pressable
              key={player.name}
              onPress={() => setSelectedItem(player)}
              style={({ pressed }) => [
                player.captain ? styles.playerCardCaptain : styles.playerCard,
                pressed && styles.cardPressed,
              ]}
            >
              <View
                style={
                  player.captain
                    ? styles.initialCircleCaptain
                    : styles.initialCircle
                }
              >
                <Text
                  style={
                    player.captain
                      ? styles.initialTextCaptain
                      : styles.initialText
                  }
                >
                  {player.initials}
                </Text>
              </View>

              <View style={styles.playerContent}>
                <Text style={styles.playerName}>{player.name}</Text>
                <Text style={styles.playerRole}>{player.position}</Text>
                <Text style={styles.playerDescription}>{player.club}</Text>
              </View>

              <View style={styles.arrowCircle}>
                <Text style={styles.arrow}>›</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      <Modal
        visible={selectedItem !== null}
        transparent
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            {selectedItem && (
              <ScrollView showsVerticalScrollIndicator={false}>
                <View
                  style={[
                    styles.modalImageContainer,
                    selectedItem.type === "player" &&
                      styles.playerImageContainer,
                  ]}
                >
                  <Image
                    source={selectedItem.image}
                    style={styles.modalImage}
                    resizeMode={
                      selectedItem.type === "player" ? "contain" : "cover"
                    }
                  />
                </View>

                <View style={styles.modalContent}>
                  {selectedItem.type === "match" ? (
                    <>
                      <Text style={styles.modalLabel}>
                        Análisis del partido
                      </Text>
                      <Text style={styles.modalTitle}>
                        {selectedItem.title}
                      </Text>

                      <View style={styles.detailBoxYellow}>
                        <Text style={styles.detailTitle}>Fecha y hora</Text>
                        <Text style={styles.detailText}>
                          {selectedItem.date}
                        </Text>
                        <Text style={styles.detailText}>
                          {selectedItem.hour}
                        </Text>
                      </View>

                      <View style={styles.detailBox}>
                        <Text style={styles.detailTitle}>Sede</Text>
                        <Text style={styles.detailText}>
                          {selectedItem.stadium}
                        </Text>
                        <Text style={styles.detailText}>
                          {selectedItem.city}
                        </Text>
                      </View>

                      <View style={styles.detailBoxCoral}>
                        <Text style={styles.detailTitle}>Rival</Text>
                        <Text style={styles.detailText}>
                          {selectedItem.rival}
                        </Text>
                      </View>

                      <Text style={styles.analysisText}>
                        {selectedItem.analysis}
                      </Text>
                    </>
                  ) : (
                    <>
                      <Text style={styles.modalLabel}>Ficha del jugador</Text>
                      <Text style={styles.modalTitle}>{selectedItem.name}</Text>

                      <View style={styles.detailBoxYellow}>
                        <Text style={styles.detailTitle}>
                          Información general
                        </Text>
                        <Text style={styles.detailText}>
                          Club actual: {selectedItem.club}
                        </Text>
                        <Text style={styles.detailText}>
                          Posición: {selectedItem.position}
                        </Text>
                        <Text style={styles.detailText}>
                          Goles: {selectedItem.goals}
                        </Text>
                        <Text style={styles.detailText}>
                          Debut: {selectedItem.debut}
                        </Text>
                      </View>

                      <View style={styles.detailBox}>
                        <Text style={styles.detailTitle}>Clubes</Text>
                        {selectedItem.clubs.map((club) => (
                          <Text key={club} style={styles.listText}>
                            • {club}
                          </Text>
                        ))}
                      </View>

                      <View style={styles.detailBoxCoral}>
                        <Text style={styles.detailTitle}>
                          Logros importantes
                        </Text>
                        {selectedItem.achievements.map((achievement) => (
                          <Text key={achievement} style={styles.listText}>
                            • {achievement}
                          </Text>
                        ))}
                      </View>

                      <Text style={styles.analysisText}>
                        {selectedItem.importance}
                      </Text>
                    </>
                  )}

                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={closeModal}
                  >
                    <Text style={styles.closeButtonText}>Cerrar</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const baseCardShadow = {
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 7 },
  shadowOpacity: 0.2,
  shadowRadius: 10,
  elevation: 7,
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    padding: 18,
    paddingTop: 48,
    paddingBottom: 36,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  topBarTitle: {
    fontFamily: "BebasNeue_400Regular",
    color: COLORS.dark,
    fontSize: 34,
    lineHeight: 36,
  },
  topBadge: {
    backgroundColor: COLORS.yellow,
    borderWidth: 3,
    borderColor: COLORS.dark,
    borderRadius: 18,
    paddingVertical: 6,
    paddingHorizontal: 13,
  },
  topBadgeText: {
    color: COLORS.dark,
    fontSize: 13,
    fontWeight: "900",
  },
  headerCard: {
    backgroundColor: COLORS.dark,
    borderRadius: 34,
    padding: 22,
    marginBottom: 18,
    borderWidth: 4,
    borderColor: "#0B0B0B",
    ...baseCardShadow,
  },
  logoCircle: {
    width: 118,
    height: 118,
    borderRadius: 59,
    backgroundColor: COLORS.yellow,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    alignSelf: "center",
    borderWidth: 3,
    borderColor: COLORS.dark,
  },
  logo: {
    width: 86,
    height: 86,
  },
  label: {
    color: COLORS.yellow,
    fontSize: 15,
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: 1.2,
    textAlign: "center",
  },
  title: {
    fontFamily: "BebasNeue_400Regular",
    color: COLORS.white,
    fontSize: 55,
    textAlign: "center",
    lineHeight: 57,
    marginTop: 6,
  },
  description: {
    color: "#D8D8D8",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 21,
    marginTop: 8,
    fontWeight: "600",
  },
  infoRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 22,
  },
  infoBox: {
    flex: 1,
    backgroundColor: COLORS.coral,
    borderRadius: 22,
    paddingVertical: 14,
    alignItems: "center",
    borderWidth: 3,
    borderColor: COLORS.dark,
    ...baseCardShadow,
  },
  infoBoxYellow: {
    flex: 1,
    backgroundColor: COLORS.yellow,
    borderRadius: 22,
    paddingVertical: 14,
    alignItems: "center",
    borderWidth: 3,
    borderColor: COLORS.dark,
    ...baseCardShadow,
  },
  infoBoxBlue: {
    flex: 1,
    backgroundColor: COLORS.blue,
    borderRadius: 22,
    paddingVertical: 14,
    alignItems: "center",
    borderWidth: 3,
    borderColor: COLORS.dark,
    ...baseCardShadow,
  },
  infoNumber: {
    fontFamily: "BebasNeue_400Regular",
    color: COLORS.dark,
    fontSize: 38,
    lineHeight: 40,
  },
  infoNumberWhite: {
    fontFamily: "BebasNeue_400Regular",
    color: COLORS.white,
    fontSize: 38,
    lineHeight: 40,
  },
  infoLabel: {
    color: COLORS.dark,
    fontSize: 12,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  infoLabelWhite: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  section: {
    backgroundColor: COLORS.dark,
    borderRadius: 30,
    padding: 16,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: "#0B0B0B",
    ...baseCardShadow,
  },
  sectionTitleRow: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontFamily: "BebasNeue_400Regular",
    color: COLORS.white,
    fontSize: 38,
    lineHeight: 39,
  },
  tapHint: {
    color: COLORS.yellow,
    fontSize: 12,
    fontWeight: "800",
    marginTop: 2,
    textTransform: "uppercase",
  },
  teamsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  teamCard: {
    width: "48%",
    backgroundColor: COLORS.green,
    borderRadius: 22,
    padding: 14,
    alignItems: "center",
    borderWidth: 3,
    borderColor: COLORS.dark,
  },
  teamCardYellow: {
    width: "48%",
    backgroundColor: COLORS.yellow,
    borderRadius: 22,
    padding: 14,
    alignItems: "center",
    borderWidth: 3,
    borderColor: COLORS.dark,
  },
  teamCardCoral: {
    width: "48%",
    backgroundColor: COLORS.coral,
    borderRadius: 22,
    padding: 14,
    alignItems: "center",
    borderWidth: 3,
    borderColor: COLORS.dark,
  },
  teamCardBlue: {
    width: "48%",
    backgroundColor: COLORS.blue,
    borderRadius: 22,
    padding: 14,
    alignItems: "center",
    borderWidth: 3,
    borderColor: COLORS.dark,
  },
  flag: {
    fontSize: 30,
    marginBottom: 5,
  },
  teamName: {
    fontFamily: "BebasNeue_400Regular",
    color: COLORS.dark,
    fontSize: 25,
    textAlign: "center",
  },
  teamNameWhite: {
    fontFamily: "BebasNeue_400Regular",
    color: COLORS.white,
    fontSize: 25,
    textAlign: "center",
  },
  matchCard: {
    flexDirection: "row",
    backgroundColor: COLORS.coral,
    borderRadius: 24,
    padding: 14,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: COLORS.dark,
    alignItems: "center",
  },
  cardPressed: {
    transform: [{ scale: 0.97 }],
    opacity: 0.9,
  },
  dateBox: {
    width: 62,
    height: 70,
    borderRadius: 20,
    backgroundColor: COLORS.yellow,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
    borderWidth: 3,
    borderColor: COLORS.dark,
  },
  day: {
    fontFamily: "BebasNeue_400Regular",
    color: COLORS.dark,
    fontSize: 38,
    lineHeight: 39,
  },
  month: {
    color: COLORS.dark,
    fontSize: 13,
    fontWeight: "900",
  },
  matchContent: {
    flex: 1,
  },
  matchTitle: {
    fontFamily: "BebasNeue_400Regular",
    color: COLORS.dark,
    fontSize: 28,
    lineHeight: 30,
  },
  matchPlace: {
    color: COLORS.dark,
    fontSize: 13,
    fontWeight: "700",
    marginTop: 2,
  },
  matchHour: {
    color: COLORS.dark,
    fontSize: 13,
    fontWeight: "900",
    marginTop: 6,
  },
  arrowCircle: {
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: COLORS.dark,
    alignItems: "center",
    justifyContent: "center",
  },
  arrow: {
    color: COLORS.white,
    fontSize: 30,
    fontWeight: "900",
    marginTop: -2,
  },
  playerCard: {
    flexDirection: "row",
    backgroundColor: COLORS.green,
    borderRadius: 24,
    padding: 14,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: COLORS.dark,
    alignItems: "center",
  },
  playerCardCaptain: {
    flexDirection: "row",
    backgroundColor: COLORS.yellow,
    borderRadius: 24,
    padding: 14,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: COLORS.dark,
    alignItems: "center",
  },
  initialCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: COLORS.blue,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
    borderWidth: 3,
    borderColor: COLORS.dark,
  },
  initialCircleCaptain: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: COLORS.coral,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
    borderWidth: 3,
    borderColor: COLORS.dark,
  },
  initialText: {
    color: COLORS.white,
    fontWeight: "900",
    fontSize: 15,
  },
  initialTextCaptain: {
    color: COLORS.dark,
    fontWeight: "900",
    fontSize: 15,
  },
  playerContent: {
    flex: 1,
  },
  playerName: {
    fontFamily: "BebasNeue_400Regular",
    color: COLORS.dark,
    fontSize: 28,
    lineHeight: 30,
  },
  playerRole: {
    color: "#333333",
    fontSize: 12,
    fontWeight: "900",
    marginTop: 2,
    textTransform: "uppercase",
  },
  playerDescription: {
    color: "#444444",
    fontSize: 13,
    lineHeight: 18,
    marginTop: 3,
    fontWeight: "700",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.58)",
    justifyContent: "center",
    padding: 18,
  },
  modalCard: {
    maxHeight: "88%",
    backgroundColor: COLORS.green,
    borderRadius: 34,
    overflow: "hidden",
    borderWidth: 4,
    borderColor: COLORS.dark,
  },
  modalImageContainer: {
    width: "100%",
    height: 300,
    backgroundColor: "#EAF1FF",
    alignItems: "center",
    justifyContent: "center",
  },
  playerImageContainer: {
    height: 340,
    backgroundColor: "#EEF4FF",
  },
  modalImage: {
    width: "100%",
    height: "100%",
  },
  modalContent: {
    padding: 20,
  },
  modalLabel: {
    color: COLORS.dark,
    fontSize: 13,
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 4,
  },
  modalTitle: {
    fontFamily: "BebasNeue_400Regular",
    color: COLORS.dark,
    fontSize: 48,
    lineHeight: 49,
    marginBottom: 14,
  },
  detailBox: {
    backgroundColor: COLORS.white,
    borderRadius: 22,
    padding: 14,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: COLORS.dark,
  },
  detailBoxYellow: {
    backgroundColor: COLORS.yellow,
    borderRadius: 22,
    padding: 14,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: COLORS.dark,
  },
  detailBoxCoral: {
    backgroundColor: COLORS.coral,
    borderRadius: 22,
    padding: 14,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: COLORS.dark,
  },
  detailTitle: {
    fontFamily: "BebasNeue_400Regular",
    color: COLORS.dark,
    fontSize: 27,
    marginBottom: 4,
  },
  detailText: {
    color: "#333333",
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "700",
  },
  listText: {
    color: "#333333",
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "700",
  },
  analysisText: {
    color: COLORS.dark,
    fontSize: 15,
    lineHeight: 23,
    marginTop: 4,
    marginBottom: 18,
    fontWeight: "700",
  },
  closeButton: {
    backgroundColor: COLORS.dark,
    borderRadius: 18,
    paddingVertical: 15,
    alignItems: "center",
  },
  closeButtonText: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: "900",
    textTransform: "uppercase",
  },
});
