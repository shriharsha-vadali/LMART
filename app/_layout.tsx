import { Stack } from "expo-router";
import "../styles/global.css";

import { ThemeProvider } from "@/context/ThemeContext";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack
        screenOptions={{ headerShown: false }}
        initialRouteName="(auth)/splash"
      >
        <Stack.Screen name="(auth)/splash" />
        <Stack.Screen name="(auth)/login" />
        <Stack.Screen name="(auth)/age-verification" />
      </Stack>
    </ThemeProvider>
  );
}
