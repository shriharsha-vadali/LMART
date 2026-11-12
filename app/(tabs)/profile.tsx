import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import {
  Bell,
  ChevronRight,
  Coins,
  CreditCard,
  LogOut,
  MapPin,
  Settings,
  Shield,
  ShoppingBag,
  User,
} from "lucide-react-native";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProfileScreen() {
  const menuItems = [
    {
      icon: ShoppingBag,
      label: "My Orders",
      color: "#3b82f6",
      route: "/orders",
    },
    {
      icon: Coins,
      label: "Points",
      color: "#64748b",
      route: "/settings",
    },
    {
      icon: User,
      label: "My Details ",
      color: "#64748b",
      route: "/orders",
    },
    {
      icon: MapPin,
      label: "Saved Addresses",
      color: "#ef4444",
      route: "/addresses",
    },
    {
      icon: CreditCard,
      label: "Payment Methods",
      color: "#10b981",
      route: "/payments",
    },
    {
      icon: Bell,
      label: "Notifications",
      color: "#f59e0b",
      route: "/notifications",
    },
    {
      icon: Shield,
      label: "Privacy & Support'",
      color: "#6366f1",
      route: "/support",
    },
    { icon: Settings, label: "Settings", color: "#64748b", route: "/settings" },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.profileInfo}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>S</Text>
            </View>
            <View style={styles.textInfo}>
              <Text style={styles.name}>Shri Harsha</Text>
              <Text style={styles.phone}>+91 8186882967</Text>
            </View>
            <TouchableOpacity style={styles.editBtn}>
              <Text style={styles.editBtnText}>Edit</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>12</Text>
              <Text style={styles.statLabel}>Orders</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>₹450</Text>
              <Text style={styles.statLabel}>Credits</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>Pro</Text>
              <Text style={styles.statLabel}>Membership</Text>
            </View>
          </View>
        </View>

        <View style={styles.menuSection}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => item.route && router.push(item.route as any)}
            >
              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: item.color + "15" },
                ]}
              >
                <item.icon size={22} color={item.color} />
              </View>
              <Text style={styles.menuLabel}>{item.label}</Text>
              <ChevronRight size={18} color="#94a3b8" />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => router.replace("/(auth)/login")}
        >
          <LogOut size={20} color="#ef4444" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        <Text style={styles.versionText}>Version 1.0.0 (Premium)</Text>
        <View style={{ height: 100 }} />
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
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: Colors.light.card,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    borderBottomWidth: 1,
    borderColor: Colors.light.border,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 22,
    backgroundColor: "#eef2ff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: Colors.light.tint,
  },
  avatarText: {
    fontSize: 24,
    fontWeight: "900",
    color: Colors.light.tint,
  },
  textInfo: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "900",
    color: Colors.light.text,
  },
  phone: {
    fontSize: 14,
    color: Colors.light.muted,
    marginTop: 2,
  },
  editBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: "rgba(79, 70, 229, 0.1)",
  },
  editBtnText: {
    color: Colors.light.tint,
    fontWeight: "800",
    fontSize: 13,
  },
  statsRow: {
    flexDirection: "row",
    marginTop: 24,
    paddingTop: 24,
    borderTopWidth: 1,
    borderColor: "rgba(0,0,0,0.05)",
    justifyContent: "space-around",
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "900",
    color: Colors.light.text,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.light.muted,
    marginTop: 4,
    fontWeight: "600",
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: "rgba(0,0,0,0.1)",
    alignSelf: "center",
  },
  menuSection: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.light.card,
    padding: 16,
    borderRadius: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  menuLabel: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    fontWeight: "700",
    color: Colors.light.text,
  },
  logoutBtn: {
    marginHorizontal: 24,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(239, 68, 68, 0.1)",
    padding: 16,
    borderRadius: 20,
    gap: 12,
  },
  logoutText: {
    color: Colors.light.error,
    fontWeight: "800",
    fontSize: 16,
  },
  versionText: {
    textAlign: "center",
    marginTop: 32,
    color: Colors.light.muted,
    fontSize: 12,
    fontWeight: "600",
  },
});



