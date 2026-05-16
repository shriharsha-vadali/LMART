import { View, Text, StyleSheet } from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";
import { Beer } from "lucide-react-native";

export default function Splash() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(auth)/login");
    }, 2000); // 2 seconds splash

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Beer size={64} color="#fff" />
      <Text style={styles.title}>LiquorSwift</Text>
      <Text style={styles.subtitle}>Premium spirits, instantly delivered</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4f46e5",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "900",
    marginTop: 16,
  },
  subtitle: {
    color: "#e0e7ff",
    marginTop: 6,
    fontSize: 14,
  },
});
