import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import { Bell, ChevronLeft, ChevronRight, Info, Moon, Shield, User } from "lucide-react-native";
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function SettingsScreen() {
    const SETTINGS_GROUPS = [
        {
            title: "Account",
            items: [
                { id: "profile", label: "Edit Profile", icon: User, color: "#4f46e5" },
                { id: "security", label: "Security", icon: Shield, color: "#10b981" },
            ],
        },
        {
            title: "Preferences",
            items: [
                { id: "notifications", label: "Notifications", icon: Bell, color: "#f59e0b" },
                { id: "appearance", label: "Appearance", icon: Moon, color: "#6366f1" },
            ],
        },
        {
            title: "Support",
            items: [
                { id: "about", label: "About LiquorSwift", icon: Info, color: "#6b7280" },
            ],
        },
    ];

    return (
        <View style={styles.container}>
            {/* HEADER */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <ChevronLeft size={24} color={Colors.light.text} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Settings</Text>
                <View style={{ width: 40 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {SETTINGS_GROUPS.map((group, index) => (
                    <View key={group.title} style={styles.group}>
                        <Text style={styles.groupTitle}>{group.title}</Text>
                        <View style={styles.card}>
                            {group.items.map((item, itemIndex) => (
                                <View key={item.id}>
                                    <TouchableOpacity style={styles.item}>
                                        <View style={[styles.iconBox, { backgroundColor: item.color + '15' }]}>
                                            <item.icon size={20} color={item.color} />
                                        </View>
                                        <Text style={styles.itemLabel}>{item.label}</Text>
                                        <ChevronRight size={20} color={Colors.light.border} />
                                    </TouchableOpacity>
                                    {itemIndex < group.items.length - 1 && <View style={styles.divider} />}
                                </View>
                            ))}
                        </View>
                    </View>
                ))}

                <TouchableOpacity
                    style={styles.logoutButton}
                    onPress={() => router.replace("/(auth)/login")}
                >
                    <Text style={styles.logoutText}>Log Out</Text>
                </TouchableOpacity>

                <Text style={styles.version}>Version 1.0.0</Text>
                <View style={{ height: 40 }} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
    },
    header: {
        paddingTop: Platform.OS === "ios" ? 60 : 40,
        paddingBottom: 16,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: Colors.light.border,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: Colors.light.card,
        alignItems: "center",
        justifyContent: "center",
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "800",
        color: Colors.light.text,
    },
    scrollContent: {
        padding: 16,
    },
    group: {
        marginBottom: 24,
    },
    groupTitle: {
        fontSize: 13,
        fontWeight: "800",
        color: Colors.light.muted,
        textTransform: "uppercase",
        letterSpacing: 1,
        marginBottom: 12,
        marginLeft: 4,
    },
    card: {
        backgroundColor: Colors.light.card,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: Colors.light.border,
        overflow: "hidden",
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
    },
    iconBox: {
        width: 40,
        height: 40,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 16,
    },
    itemLabel: {
        flex: 1,
        fontSize: 16,
        fontWeight: "700",
        color: Colors.light.text,
    },
    divider: {
        height: 1,
        backgroundColor: Colors.light.border,
        marginHorizontal: 16,
    },
    logoutButton: {
        marginTop: 8,
        backgroundColor: '#fef2f2',
        paddingVertical: 18,
        borderRadius: 20,
        alignItems: "center",
        borderWidth: 1,
        borderColor: '#fee2e2',
    },
    logoutText: {
        color: '#ef4444',
        fontSize: 16,
        fontWeight: "800",
    },
    version: {
        textAlign: "center",
        color: Colors.light.muted,
        fontSize: 12,
        fontWeight: "600",
        marginTop: 32,
    },
});
