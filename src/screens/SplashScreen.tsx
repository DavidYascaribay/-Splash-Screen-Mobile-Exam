import React, { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";

const COLORS = {
  background: "#C7D6CE",
  dark: "#151515",
  coral: "#FF6B5E",
  yellow: "#FFD35A",
  white: "#FFFFFF",
  muted: "#4A4A4A",
};

export default function SplashScreen() {
  const logoScale = useRef(new Animated.Value(0.85)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const textTranslateY = useRef(new Animated.Value(20)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const progressWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(logoScale, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(textTranslateY, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(progressWidth, {
          toValue: 1,
          duration: 900,
          useNativeDriver: false,
        }),
      ]),
    ]).start();
  }, [logoOpacity, logoScale, progressWidth, textOpacity, textTranslateY]);

  const animatedProgressWidth = progressWidth.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "82%"],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.logoCard,
          {
            opacity: logoOpacity,
            transform: [{ scale: logoScale }],
          },
        ]}
      >
        <Image
          source={require("../../assets/logo-ecuador.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>

      <Animated.View
        style={[
          styles.textBlock,
          {
            opacity: textOpacity,
            transform: [{ translateY: textTranslateY }],
          },
        ]}
      >
        <Text style={styles.smallText}>Mundial 2026</Text>
        <Text style={styles.title}>Ecuador</Text>
        <Text style={styles.subtitle}>La Tri rumbo a la gloria</Text>
      </Animated.View>

      <View style={styles.loadingBox}>
        <Animated.View
          style={[
            styles.loadingProgress,
            {
              width: animatedProgressWidth,
            },
          ]}
        />
      </View>

      <Text style={styles.footerText}>Cargando experiencia mundialista...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  logoCard: {
    width: 205,
    height: 205,
    borderRadius: 44,
    backgroundColor: COLORS.yellow,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderColor: COLORS.dark,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 14,
    elevation: 10,
    marginBottom: 30,
  },
  logo: {
    width: 145,
    height: 145,
  },
  textBlock: {
    alignItems: "center",
  },
  smallText: {
    color: COLORS.dark,
    fontSize: 14,
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: 1.4,
    marginBottom: 4,
  },
  title: {
    fontFamily: "BebasNeue_400Regular",
    color: COLORS.dark,
    fontSize: 76,
    lineHeight: 78,
    textAlign: "center",
  },
  subtitle: {
    color: COLORS.muted,
    fontSize: 15,
    fontWeight: "800",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },
  loadingBox: {
    width: 170,
    height: 10,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    borderWidth: 3,
    borderColor: COLORS.dark,
    overflow: "hidden",
    marginTop: 34,
  },
  loadingProgress: {
    height: "100%",
    backgroundColor: COLORS.coral,
    borderRadius: 20,
  },
  footerText: {
    marginTop: 14,
    color: COLORS.dark,
    fontSize: 12,
    fontWeight: "800",
  },
});
