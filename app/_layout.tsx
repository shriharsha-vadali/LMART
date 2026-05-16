import { Stack } from "expo-router";
import "../styles/global.css";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{ headerShown: false }}
      initialRouteName="(auth)/splash"
    >
      <Stack.Screen name="(auth)/splash" />
      <Stack.Screen name="(auth)/login" />
      <Stack.Screen name="(auth)/age-verification" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
