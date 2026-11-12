import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import {
  Bell,
  ChevronLeft,
  ChevronRight,
  Info,
  Moon,
  Shield,
  Sun,
  User,
} from "lucide-react-native";

import {
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useState } from "react";

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = darkMode ? Colors.dark : Colors.dark
  
  
  
  
  
  
  
  
  
  
  
  
  
  ;

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
        {
          id: "notifications",
          label: "Notifications",
          icon: Bell,
          color: "#f59e0b",
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          id: "about",
          label: "About LiquorSwift",
          icon: Info,
          color: "#6b7280",
        },
      ],
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* HEADER */}
      <View style={[styles.header, { borderBottomColor: theme.border }]}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={[styles.backButton, { backgroundColor: theme.card }]}
        >
          <ChevronLeft size={24} color={theme.text} />
        </TouchableOpacity>

        <Text style={[styles.headerTitle, { color: theme.text }]}>
          Settings
        </Text>

        <View style={{ width: 40 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* DARK MODE CARD */}
        <View style={styles.group}>
          <Text style={[styles.groupTitle, { color: theme.muted }]}>
            Appearance
          </Text>

          <View
            style={[
              styles.card,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
              },
            ]}
          >
            <View style={styles.item}>
              <View style={[styles.iconBox, { backgroundColor: "#6366f115" }]}>
                {darkMode ? (
                  <Moon size={20} color="#6366f1" />
                ) : (
                  <Sun size={20} color="#f59e0b" />
                )}
              </View>

              <Text style={[styles.itemLabel, { color: theme.text }]}>
                {darkMode ? "Dark Mode" : "Light Mode"}
              </Text>

              <Switch value={darkMode} onValueChange={setDarkMode} />
            </View>
          </View>
        </View>

        {/* OTHER SETTINGS */}
        {SETTINGS_GROUPS.map((group) => (
          <View key={group.title} style={styles.group}>
            <Text style={[styles.groupTitle, { color: theme.muted }]}>
              {group.title}
            </Text>

            <View
              style={[
                styles.card,
                {
                  backgroundColor: theme.card,
                  borderColor: theme.border,
                },
              ]}
            >
              {group.items.map((item, itemIndex) => (
                <View key={item.id}>
                  <TouchableOpacity style={styles.item}>
                    <View
                      style={[
                        styles.iconBox,
                        { backgroundColor: item.color + "15" },
                      ]}
                    >
                      <item.icon size={20} color={item.color} />
                    </View>

                    <Text style={[styles.itemLabel, { color: theme.text }]}>
                      {item.label}
                    </Text>

                    <ChevronRight size={20} color={theme.border} />
                  </TouchableOpacity>

                  {itemIndex < group.items.length - 1 && (
                    <View
                      style={[
                        styles.divider,
                        { backgroundColor: theme.border },
                      ]}
                    />
                  )}
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

        <Text style={[styles.version, { color: theme.muted }]}>
          Version 1.0.0
        </Text>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    paddingTop: Platform.OS === "ios" ? 60 : 40,
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "800",
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
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 12,
    marginLeft: 4,
  },

  card: {
    borderRadius: 24,
    borderWidth: 1,
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
  },

  divider: {
    height: 1,
    marginHorizontal: 16,
  },

  logoutButton: {
    marginTop: 8,
    backgroundColor: "#fef2f2",
    paddingVertical: 18,
    borderRadius: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fee2e2",
  },

  logoutText: {
    color: "#ef4444",
    fontSize: 16,
    fontWeight: "800",
  },

  version: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "600",
    marginTop: 32,
  },
});
