import { Stack } from "expo-router";
import { View, Text } from "react-native";
import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { FontAwesome5 } from "@expo/vector-icons"; // Import Paper Plane icon

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({ Poppins_600SemiBold });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null; // Wait for fonts to load

  return (
    <Stack
      screenOptions={{
        headerTitle: () => (
          <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
            {/* Paper Plane Icon */}
            <FontAwesome5 name="paper-plane" size={20} color="white" style={{ marginRight: 10 }} />
            
            {/* Custom Title */}
            <Text style={{ fontSize: 18, fontWeight: "bold", fontFamily: "Poppins_600SemiBold", color: "#fff" }}>
             Resala
            </Text>
          </View>
        ),
        headerStyle: { backgroundColor: "#6200ea" }, // Background color
        headerTintColor: "#fff", // Text/icon color
        headerTitleAlign: "left", // Align title to the left
      }}
    />
  );
}
