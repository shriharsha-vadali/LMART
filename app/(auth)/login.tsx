import { router } from "expo-router";
import { Smartphone } from "lucide-react-native";
import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { authStyles as styles } from "../../styles/auth.styles";

export default function Login() {
  const [phone, setPhone] = useState("");

  const handleContinue = () => {
    if (phone.length < 10) return;
    Keyboard.dismiss();

    // 👉 For now go directly to home / tabs
    router.replace("/(tabs)");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        {/* Title */}
        <Text style={styles.title}>Welcome to LiquorSwift</Text>
        <Text style={styles.subtitle}>
          Login or Sign up using your mobile number
        </Text>

        {/* Input */}
        <View style={styles.inputBox}>
          <Smartphone size={20} color="#9ca3af" />

          <TextInput
            placeholder="Enter mobile number"
            placeholderTextColor="#9ca3af" // ✅ FIXED
            keyboardType="number-pad"
            maxLength={10}
            value={phone}
            onChangeText={setPhone}
            style={styles.input}
            returnKeyType="done"
            onSubmitEditing={Keyboard.dismiss}
          />
        </View>

        {/* Button */}
        <TouchableOpacity
          style={[styles.button, phone.length < 10 && styles.buttonDisabled]}
          onPress={handleContinue}
          disabled={phone.length< 10}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

        {/* Signup Link */}
        <TouchableOpacity
          style={{ marginTop: 24, alignItems: "center" }}
          onPress={() => router.push("/(auth)/signup" as any)}
        >
          <Text style={{ color: "#4f46e5", fontWeight: "600" }}>
            Dont have an account? Sign Up
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
