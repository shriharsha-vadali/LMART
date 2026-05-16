import { Colors } from "@/constants/theme";
import { ChevronRight, Search } from "lucide-react-native";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const CATEGORIES = [
  { id: "beer", name: "Beer & Cider", count: 120, emoji: "🍺", color: "#fef3c7" },
  { id: "wine", name: "Wine & Champagne", count: 85, emoji: "🍷", color: "#fee2e2" },
  { id: "whisky", name: "Whisky & Scotch", count: 64, emoji: "🥃", color: "#ffedd5" },
  { id: "vodka", name: "Vodka", count: 42, emoji: "🍸", color: "#e0f2fe" },
  { id: "gin", name: "Gin & Tequila", count: 35, emoji: "🌵", color: "#f0fdf4" },
  { id: "rum", name: "Rum & Brandy", count: 28, emoji: "🍹", color: "#fdf2f8" },
  { id: "mixers", name: "Mixers & Soft Drinks", count: 56, emoji: "🥤", color: "#f3f4f6" },
];

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <Text style={styles.title}>Explore</Text>
        <Text style={styles.subtitle}>Discover your favorite spirits</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Search size={20} color={Colors.light.muted} />
          <TextInput
            placeholder="What are you looking for?"
            placeholderTextColor={Colors.light.muted}
            style={styles.searchInput}
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Categories</Text>

        <View style={styles.grid}>
          {CATEGORIES.map((cat) => (
            <TouchableOpacity key={cat.id} style={styles.card}>
              <View style={[styles.emojiContainer, { backgroundColor: cat.color }]}>
                <Text style={styles.emoji}>{cat.emoji}</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.name}>{cat.name}</Text>
                <Text style={styles.count}>{cat.count} Items</Text>
              </View>
              <ChevronRight size={18} color={Colors.light.muted} />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>Plan a Party? 🎊</Text>
          <Text style={styles.bannerText}>Get bulk discounts on corporate orders</Text>
          <TouchableOpacity style={styles.bannerBtn}>
            <Text style={styles.bannerBtnText}>Contact Us</Text>
          </TouchableOpacity>
        </View>

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
    paddingBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: Colors.light.text,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.light.muted,
    marginTop: 4,
  },
  searchContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8fafc",
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 54,
    gap: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  searchInput: {
    flex: 1,
    color: Colors.light.text,
    fontSize: 16,
  },
  scrollContent: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: Colors.light.text,
    marginBottom: 16,
  },
  grid: {
    gap: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 12,
    borderWidth: 1,
    borderColor: "#f1f5f9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  emojiContainer: {
    width: 60,
    height: 60,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: {
    fontSize: 28,
  },
  info: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.light.text,
  },
  count: {
    fontSize: 12,
    color: Colors.light.muted,
    marginTop: 2,
  },
  banner: {
    marginTop: 32,
    backgroundColor: "#4f46e5",
    borderRadius: 24,
    padding: 24,
    alignItems: "center",
  },
  bannerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "900",
  },
  bannerText: {
    color: "#e0e7ff",
    textAlign: "center",
    marginTop: 8,
    lineHeight: 20,
  },
  bannerBtn: {
    backgroundColor: "white",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 14,
    marginTop: 20,
  },
  bannerBtnText: {
    color: "#4f46e5",
    fontWeight: "800",
  },
});
