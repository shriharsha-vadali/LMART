import { router, useLocalSearchParams } from "expo-router";
import { ArrowLeft, Clock, Plus, ShoppingCart, Star } from "lucide-react-native";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Product, useCartStore } from "./useCartStore";

const MOCK_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Macallan 12 Year Old",
    price: 8500,
    image: "https://images.unsplash.com/photo-1527281032234-50367a644621?w=400",
    category: "Whisky",
    description: "The Macallan Double Cask 12 Years Old forms part of our Double Cask range which marries the classic Macallan style and the unmistakable sweetness of American oak.",
    storeId: "1",
  },
  {
    id: "p2",
    name: "Corona Extra (6 Pack)",
    price: 1200,
    image: "https://images.unsplash.com/photo-1618885472179-5e474019f2a9?w=400",
    category: "Beer",
    description: "Corona Extra is a pale lager produced by Mexican brewery Cervecería Modelo and owned by Belgian company AB InBev.",
    storeId: "1",
  },
  {
    id: "p3",
    name: "Grey Goose Vodka",
    price: 4500,
    image: "https://images.unsplash.com/photo-1550985543-f47f38aee65e?w=400",
    category: "Vodka",
    description: "GREY GOOSE is a French premium vodka made with single-origin soft winter wheat from Picardy and spring water from Gensac-la-Pallue.",
    storeId: "1",
  },
  {
    id: "p4",
    name: "Moët & Chandon Imperial",
    price: 6800,
    image: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?w=400",
    category: "Wine",
    description: "Moët Impérial is the House’s iconic champagne. Created in 1869, it embodies Moët & Chandon’s unique style.",
    storeId: "1",
  },
];

export default function StoreDetails() {
  const { id } = useLocalSearchParams();
  const addItem = useCartStore((state) => state.addItem);
  const cartItems = useCartStore((state) => state.items);

  const totalCartItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* HEADER IMAGE */}
      <View style={styles.headerImageContainer}>
        <Image
          source={{ uri: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800" }}
          style={styles.headerImage}
        />
        <View style={styles.overlay} />

        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <ArrowLeft size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.cartHeaderBtn} onPress={() => router.push("/cart")}>
          <ShoppingCart size={24} color="#fff" />
          {totalCartItems > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{totalCartItems}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.storeHeader}>
          <Text style={styles.storeTitle}>Paradise Liquors</Text>
          <View style={styles.metaRow}>
            <View style={styles.metaItem}>
              <Star size={16} color="#4f46e5" fill="#4f46e5" />
              <Text style={styles.metaText}>4.2 (500+ ratings)</Text>
            </View>
            <View style={styles.metaItem}>
              <Clock size={16} color="#64748b" />
              <Text style={styles.metaText}>15-20 mins</Text>
            </View>
          </View>
        </View>

        <View style={styles.divider} />

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <Text style={styles.sectionTitle}>Popular Items</Text>

          {MOCK_PRODUCTS.map((product) => (
            <TouchableOpacity
              key={product.id}
              style={styles.productCard}
              onPress={() => router.push(`/product/${product.id}` as any)}
            >
              <Image source={{ uri: product.image }} style={styles.productImage} />
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productDesc} numberOfLines={2}>
                  {product.description}
                </Text>
                <View style={styles.productFooter}>
                  <Text style={styles.productPrice}>₹{product.price}</Text>
                  <TouchableOpacity
                    style={styles.addBtn}
                    onPress={() => addItem(product)}
                  >
                    <Plus size={20} color="#fff" />
                    <Text style={styles.addBtnText}>ADD</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
          <View style={{ height: 100 }} />
        </ScrollView>
      </View>

      {totalCartItems > 0 && (
        <TouchableOpacity
          style={styles.floatingCart}
          onPress={() => router.push("/cart")}
        >
          <View>
            <Text style={styles.floatingCartLabel}>{totalCartItems} ITEMS</Text>
            <Text style={styles.floatingCartValue}>₹{useCartStore.getState().totalPrice()} plus taxes</Text>
          </View>
          <View style={styles.floatingCartRight}>
            <Text style={styles.viewCartText}>View Cart</Text>
            <ShoppingCart size={18} color="#fff" />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerImageContainer: {
    height: 240,
    width: "100%",
    position: "relative",
  },
  headerImage: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  cartHeaderBtn: {
    position: "absolute",
    top: 50,
    right: 20,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "#4f46e5",
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "black",
  },
  badgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "900",
  },
  content: {
    flex: 1,
    marginTop: -30,
    backgroundColor: "white",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 24,
  },
  storeHeader: {
    marginBottom: 20,
  },
  storeTitle: {
    fontSize: 28,
    fontWeight: "900",
    color: "#1e293b",
  },
  metaRow: {
    flexDirection: "row",
    gap: 16,
    marginTop: 8,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  metaText: {
    color: "#64748b",
    fontSize: 14,
    fontWeight: "600",
  },
  divider: {
    height: 1,
    backgroundColor: "#f1f5f9",
    marginBottom: 24,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 20,
  },
  productCard: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 24,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#f1f5f9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 16,
  },
  productInfo: {
    flex: 1,
    marginLeft: 16,
    justifyContent: "space-between",
  },
  productName: {
    fontSize: 16,
    fontWeight: "800",
    color: "#1e293b",
  },
  productDesc: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 4,
  },
  productFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: "900",
    color: "#4f46e5",
  },
  addBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4f46e5",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 4,
  },
  addBtnText: {
    fontWeight: "900",
    fontSize: 12,
    color: "white",
  },
  floatingCart: {
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: "#4f46e5",
    borderRadius: 20,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#4f46e5",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  floatingCartLabel: {
    fontSize: 10,
    fontWeight: "900",
    color: "rgba(255,255,255,0.7)",
    letterSpacing: 1,
  },
  floatingCartValue: {
    fontSize: 16,
    fontWeight: "900",
    color: "white",
  },
  floatingCartRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  viewCartText: {
    fontSize: 16,
    fontWeight: "900",
    color: "white",
  },
});

