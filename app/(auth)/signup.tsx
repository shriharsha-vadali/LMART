import { router } from "expo-router";
import { Mail, Smartphone, User } from "lucide-react-native";
import { useState } from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import { authStyles as styles } from "../../styles/auth.styles";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSignup = () => {
        if (phone.length < 10 || !name || !email) return;
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
                <Text style={styles.title}>Create Account</Text>
                <Text style={styles.subtitle}>
                    Join LiquorSwift to get started
                </Text>

                {/* Name Input */}
                <View style={styles.inputBox}>
                    <User size={20} color="#9ca3af" />
                    <TextInput
                        placeholder="Full Name"
                        placeholderTextColor="#9ca3af"
                        value={name}
                        onChangeText={setName}
                        style={styles.input}
                        returnKeyType="next"
                    />
                </View>

                {/* Email Input */}
                <View style={styles.inputBox}>
                    <Mail size={20} color="#9ca3af" />
                    <TextInput
                        placeholder="Email Address"
                        placeholderTextColor="#9ca3af"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                        style={styles.input}
                        returnKeyType="next"
                    />
                </View>

                {/* Phone Input */}
                <View style={styles.inputBox}>
                    <Smartphone size={20} color="#9ca3af" />

                    <TextInput
                        placeholder="Mobile number"
                        placeholderTextColor="#9ca3af"
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
                    style={[
                        styles.button,
                        (phone.length < 10 || !name || !email) && styles.buttonDisabled,
                    ]}
                    onPress={handleSignup}
                    disabled={phone.length < 10 || !name || !email}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>

                {/* Login Link */}
                <TouchableOpacity
                    style={{ marginTop: 24, alignItems: "center" }}
                    onPress={() => router.back()}
                >
                    <Text style={{ color: "#4f46e5", fontWeight: "600" }}>
                        Already have an account? Login
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}
