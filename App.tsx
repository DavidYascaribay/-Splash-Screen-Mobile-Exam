import { BebasNeue_400Regular, useFonts } from "@expo-google-fonts/bebas-neue";
import React, { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";

import HomeScreen from "./src/screens/HomeScreen";
import SplashScreen from "./src/screens/SplashScreen";

export default function App() {
  const [showSplash, setShowSplash] = useState<boolean>(true);

  const [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  });

  const splashOpacity = useRef(new Animated.Value(1)).current;
  const homeOpacity = useRef(new Animated.Value(0)).current;
  const homeTranslateY = useRef(new Animated.Value(25)).current;

  useEffect(() => {
    if (!fontsLoaded) return;

    const timer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(splashOpacity, {
          toValue: 0,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(homeOpacity, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(homeTranslateY, {
          toValue: 0,
          duration: 700,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setShowSplash(false);
      });
    }, 2200);

    return () => clearTimeout(timer);
  }, [fontsLoaded, homeOpacity, homeTranslateY, splashOpacity]);

  if (!fontsLoaded) {
    return <SplashScreen />;
  }

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.homeContainer,
          {
            opacity: homeOpacity,
            transform: [{ translateY: homeTranslateY }],
          },
        ]}
      >
        <HomeScreen />
      </Animated.View>

      {showSplash && (
        <Animated.View
          style={[
            styles.splashContainer,
            {
              opacity: splashOpacity,
            },
          ]}
        >
          <SplashScreen />
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homeContainer: {
    flex: 1,
  },
  splashContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
  },
});
