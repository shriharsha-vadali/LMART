import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import { ArrowLeft, ShieldCheck } from "lucide-react-native";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useCartStore } from "../store/useCartStore";

export default function AgeVerification() {
  const [aadhaar, setAadhaar] = useState("");
  const setVerified = useCartStore((state) => state.setVerified);

  const handleVerify = () => {
    if (aadhaar.length < 12) return;
    setVerified(true);
    router.replace("/(tabs)");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar barStyle="dark-content" />
      {/* 🔙 Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <ArrowLeft size={24} color={Colors.light.text} />
      </TouchableOpacity>

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <ShieldCheck size={48} color={Colors.light.tint} />
        </View>
        <Text style={styles.title}>Legal Age Check</Text>
        <Text style={styles.subtitle}>
          As per regulations, you must be 21+ to order alcohol. Please provide your Aadhaar for quick verification.
        </Text>

        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Aadhaar Card Number"
            placeholderTextColor={Colors.light.muted}
            keyboardType="number-pad"
            maxLength={12}
            value={aadhaar}
            onChangeText={setAadhaar}
            style={styles.input}
          />
        </View>

        <TouchableOpacity
          style={[styles.button, aadhaar.length < 12 && styles.buttonDisabled]}
          onPress={handleVerify}
          disabled={aadhaar.length < 12}
        >
          <Text style={styles.buttonText}>Verify & Proceed</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Your data is encrypted and handled securely.
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  backButton: {
    padding: 16,
    marginTop: Platform.OS === "ios" ? 50 : 20,
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  iconContainer: {
    width: 80,
    height: 80,
    backgroundColor: "rgba(79, 70, 229, 0.1)",
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    color: Colors.light.text,
    marginBottom: 8,
  },
  subtitle: {
    color: Colors.light.muted,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 40,
  },
  inputWrapper: {
    backgroundColor: "#f8fafc",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    marginBottom: 24,
  },
  input: {
    padding: 18,
    fontSize: 18,
    color: Colors.light.text,
    fontWeight: "600",
  },
  button: {
    backgroundColor: Colors.light.tint,
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: Colors.light.tint,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonDisabled: {
    opacity: 0.5,
    backgroundColor: Colors.light.muted,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 16,
  },
  footerText: {
    color: Colors.light.muted,
    textAlign: "center",
    marginTop: 24,
    fontSize: 12,
  },
});
