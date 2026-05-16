import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import { Bell, MapPin, Mic, Search, Settings2 } from "lucide-react-native";
import { useState } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

/* ---------------- DATA ---------------- */

const CATEGORIES = [
  { id: "all", name: "All", emoji: "🍾" },
  { id: "beer", name: "Beer", emoji: "🍺" },
  { id: "wine", name: "Wine", emoji: "🍷" },
  { id: "whisky", name: "Whisky", emoji: "🥃" },
  { id: "vodka", name: "Vodka", emoji: "🍸" },
  { id: "rum", name: "Rum", emoji: "🍹" },
];

const STORES = [
  {
    id: "1",
    name: "Paradise Liquors",
    rating: 4.2,
    time: "15–20 mins",
    offer: "FLAT 50% OFF",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400",
  },
  {
    id: "2",
    name: "Liquor Nation",
    rating: 4.1,
    time: "15–20 mins",
    offer: "₹100 OFF",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400",
  },
  {
    id: "3",
    name: "Spirit Hub",
    rating: 4.0,
    time: "20–25 mins",
    offer: "UP TO 30% OFF",
    image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?w=400",
  },
  {
    id: "4",
    name: "Downtown Spirits",
    rating: 4.3,
    time: "15–20 mins",
    offer: "FLAT ₹50 OFF",
    image: "https://images.unsplash.com/photo-1597290282695-edc43d0e7129?w=400",
  },
];

/* ---------------- COMPONENT ---------------- */

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleStorePress = (storeId: string) => {
    router.push(`/store/${storeId}`);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <View style={styles.locationRow}>
            <MapPin size={14} color={Colors.light.tint} />
            <Text style={styles.locationLabel}>DELIVERING TO</Text>
          </View>
          <TouchableOpacity style={styles.addressContainer}>
            <Text style={styles.addressText} numberOfLines={1}>
              Home - Hitech City, Hyderabad
            </Text>
            <Text style={styles.dropdownArrow}>▼</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.headerIcons}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => router.push("/notifications" as any)}
          >
            <Bell size={22} color="#1e293b" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.avatar}
            onPress={() => router.push("/(tabs)/profile" as any)}
          >
            <Text style={styles.avatarText}>S</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* SEARCH */}
        <View style={styles.searchSection}>
          <TouchableOpacity
            style={styles.searchBox}
            onPress={() => router.push("/search" as any)}
          >
            <Search size={20} color="#94a3b8" />
            <Text style={styles.searchInput}>Search spirits, wine, beer...</Text>
            <Mic size={20} color={Colors.light.tint} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => router.push("/settings" as any)}
          >
            <Settings2 size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* PROMO BANNER */}
        <View style={styles.banner}>
          <View style={styles.bannerInfo}>
            <Text style={styles.bannerSub}>WEEKEND SPECIAL</Text>
            <Text style={styles.bannerTitle}>Up to 40% OFF</Text>
            <Text style={styles.bannerBody}>On premium single malts</Text>
            <TouchableOpacity style={styles.bannerButton}>
              <Text style={styles.bannerButtonText}>Shop Now</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bannerDot} />
        </View>

        {/* CATEGORIES */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Drink Categories</Text>
          <TouchableOpacity onPress={() => router.push("/categories" as any)}>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryContainer}
        >
          {CATEGORIES.map((item) => {
            const active = selectedCategory === item.id;
            return (
              <TouchableOpacity
                key={item.id}
                style={[styles.categoryCard, active && styles.categoryActive]}
                onPress={() => setSelectedCategory(item.id)}
              >
                <Text style={styles.categoryEmoji}>{item.emoji}</Text>
                <Text style={[styles.categoryText, active && styles.categoryTextActive]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* NEARBY STORES */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Collections</Text>
        </View>

        <View style={styles.storeGrid}>
          {STORES.map((store) => (
            <TouchableOpacity
              key={store.id}
              style={styles.storeCard}
              onPress={() => handleStorePress(store.id)}
            >
              <View style={styles.storeImageContainer}>
                <Image source={{ uri: store.image }} style={styles.storeImage} />
                <View style={styles.offerBadge}>
                  <Text style={styles.offerText}>{store.offer}</Text>
                </View>
              </View>
              <View style={styles.storeInfo}>
                <Text style={styles.storeName} numberOfLines={1}>{store.name}</Text>
                <View style={styles.storeMeta}>
                  <View style={styles.ratingRow}>
                    <Text style={styles.starText}>⭐</Text>
                    <Text style={styles.ratingText}>{store.rating}</Text>
                  </View>
                  <Text style={styles.dot}>•</Text>
                  <Text style={styles.timeText}>{store.time}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  header: {
    paddingTop: Platform.OS === "ios" ? 60 : 40,
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4
  },
  locationLabel: {
    color: Colors.light.tint,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  addressText: {
    color: Colors.light.text,
    fontSize: 15,
    fontWeight: "700",
    maxWidth: 200,
  },
  dropdownArrow: {
    color: Colors.light.text,
    fontSize: 10,
    marginLeft: 6,
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: Colors.light.card,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: "#eef2ff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: Colors.light.tint,
  },
  avatarText: {
    fontWeight: "900",
    color: Colors.light.tint,
  },
  searchSection: {
    flexDirection: "row",
    gap: 12,
    marginTop: 8,
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.light.card,
    borderRadius: 16,
    paddingHorizontal: 14,
    height: 54,
    gap: 10,
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  searchInput: {
    flex: 1,
    color: Colors.light.text,
    fontSize: 15,
    fontWeight: "500",
  },
  filterButton: {
    width: 54,
    height: 54,
    borderRadius: 16,
    backgroundColor: Colors.light.tint,
    alignItems: "center",
    justifyContent: "center",
  },
  banner: {
    backgroundColor: Colors.light.tint,
    borderRadius: 24,
    padding: 24,
    marginTop: 24,
    flexDirection: "row",
    overflow: "hidden",
    position: "relative",
  },
  bannerInfo: {
    flex: 1,
    zIndex: 1,
  },
  bannerSub: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 1,
    opacity: 0.8,
  },
  bannerTitle: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "900",
    marginTop: 4,
  },
  bannerBody: {
    color: "#fff",
    fontSize: 14,
    marginTop: 4,
    opacity: 0.8,
  },
  bannerButton: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    alignSelf: "flex-start",
    marginTop: 16,
  },
  bannerButtonText: {
    color: Colors.light.tint,
    fontWeight: "800",
    fontSize: 13,
  },
  bannerDot: {
    position: "absolute",
    right: -20,
    bottom: -20,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#fff",
    opacity: 0.1,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 16,
  },
  sectionTitle: {
    color: Colors.light.text,
    fontSize: 20,
    fontWeight: "900",
  },
  viewAll: {
    color: Colors.light.tint,
    fontWeight: "700",
    fontSize: 13,
  },
  categoryContainer: {
    paddingRight: 16,
  },
  categoryCard: {
    width: 80,
    height: 100,
    backgroundColor: Colors.light.card,
    borderRadius: 20,
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  categoryActive: {
    backgroundColor: Colors.light.tint,
    borderColor: Colors.light.tint,
  },
  categoryEmoji: {
    fontSize: 28,
    marginBottom: 6
  },
  categoryText: {
    color: Colors.light.muted,
    fontWeight: "800",
    fontSize: 12,
  },
  categoryTextActive: {
    color: "#fff"
  },
  storeGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  storeCard: {
    backgroundColor: "white",
    borderRadius: 24,
    width: "48%",
    marginBottom: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Colors.light.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  storeImageContainer: {
    height: 120,
    width: "100%",
    position: "relative",
  },
  storeImage: {
    width: "100%",
    height: "100%",
  },
  offerBadge: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: Colors.light.success,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  offerText: {
    color: "#fff",
    fontSize: 9,
    fontWeight: "900",
  },
  storeInfo: {
    padding: 12,
  },
  storeName: {
    color: Colors.light.text,
    fontSize: 15,
    fontWeight: "800"
  },
  storeMeta: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  starText: {
    fontSize: 10,
  },
  ratingText: {
    color: Colors.light.text,
    fontWeight: "700",
    fontSize: 12
  },
  dot: {
    color: Colors.light.muted,
    marginHorizontal: 4,
  },
  timeText: {
    color: Colors.light.muted,
    fontSize: 11,
    fontWeight: "600",
  },
});
