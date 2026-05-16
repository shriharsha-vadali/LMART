import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import { ArrowLeft, ChevronRight, CreditCard, Minus, Plus, Trash2 } from "lucide-react-native";
import {
    Image,
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useCartStore } from "../store/useCartStore";

export default function CartScreen() {
    const { items, updateQuantity, removeItem, totalPrice, clearCart } = useCartStore();
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
    const total = totalPrice();

    if (items.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <StatusBar barStyle="dark-content" />
                <View style={styles.emptyContent}>
                    <View style={styles.emptyIconContainer}>
                        <CreditCard size={64} color="#94a3b8" />
                    </View>
                    <Text style={styles.emptyTitle}>Your cart is empty</Text>
                    <Text style={styles.emptySubtitle}>
                        Looks like you haven't added any spirits to your cart yet.
                    </Text>
                    <TouchableOpacity
                        style={styles.browseBtn}
                        onPress={() => router.replace("/(tabs)")}
                    >
                        <Text style={styles.browseBtnText}>Browse Drinks</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                    <ArrowLeft size={24} color="#1e293b" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Shopping Cart</Text>
                <TouchableOpacity onPress={clearCart}>
                    <Text style={styles.clearText}>Clear</Text>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                <View style={styles.itemsSection}>
                    <Text style={styles.sectionTitle}>{totalItems} Items in your cart</Text>

                    {items.map((item) => (
                        <View key={item.id} style={styles.itemCard}>
                            <Image source={{ uri: item.image }} style={styles.itemImage} />
                            <View style={styles.itemInfo}>
                                <View style={styles.itemHeader}>
                                    <Text style={styles.itemName} numberOfLines={1}>{item.name}</Text>
                                    <TouchableOpacity onPress={() => removeItem(item.id)}>
                                        <Trash2 size={18} color="#ef4444" />
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.itemCategory}>{item.category}</Text>

                                <View style={styles.itemFooter}>
                                    <Text style={styles.itemPrice}>₹{item.price * item.quantity}</Text>
                                    <View style={styles.quantityControls}>
                                        <TouchableOpacity
                                            style={styles.qtyBtn}
                                            onPress={() => updateQuantity(item.id, item.quantity - 1)}
                                        >
                                            <Minus size={16} color="#1e293b" />
                                        </TouchableOpacity>
                                        <Text style={styles.qtyText}>{item.quantity}</Text>
                                        <TouchableOpacity
                                            style={styles.qtyBtn}
                                            onPress={() => updateQuantity(item.id, item.quantity + 1)}
                                        >
                                            <Plus size={16} color="#1e293b" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>

                <View style={styles.summarySection}>
                    <Text style={styles.sectionTitle}>Price Summary</Text>
                    <View style={styles.summaryCard}>
                        <View style={styles.summaryRow}>
                            <Text style={styles.summaryLabel}>Subtotal</Text>
                            <Text style={styles.summaryValue}>₹{total}</Text>
                        </View>
                        <View style={styles.summaryRow}>
                            <Text style={styles.summaryLabel}>Delivery Fee</Text>
                            <Text style={styles.summaryValue}>₹50</Text>
                        </View>
                        <View style={styles.summaryRow}>
                            <Text style={styles.summaryLabel}>Taxes & GST</Text>
                            <Text style={styles.summaryValue}>₹{Math.floor(total * 0.18)}</Text>
                        </View>
                        <View style={[styles.summaryRow, styles.totalRow]}>
                            <Text style={styles.totalLabel}>Total Payable</Text>
                            <Text style={styles.totalValue}>₹{total + 50 + Math.floor(total * 0.18)}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.deliverySection}>
                    <Text style={styles.sectionTitle}>Delivery Address</Text>
                    <TouchableOpacity style={styles.addressCard}>
                        <View style={styles.addressInfo}>
                            <Text style={styles.addressTitle}>Home</Text>
                            <Text style={styles.addressText} numberOfLines={1}>
                                Plot 45, Hitech City Main Road, Hyderabad
                            </Text>
                        </View>
                        <ChevronRight size={20} color="#94a3b8" />
                    </TouchableOpacity>
                </View>

                <View style={{ height: 150 }} />
            </ScrollView>

            <View style={styles.bottomBar}>
                <TouchableOpacity
                    style={styles.checkoutBtn}
                    onPress={() => {
                        alert("Order placed successfully! 🥂");
                        clearCart();
                        router.replace("/(tabs)");
                    }}
                >
                    <Text style={styles.checkoutText}>Place Order • ₹{total + 50 + Math.floor(total * 0.18)}</Text>
                    <ChevronRight size={20} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
    },
    emptyContainer: {
        flex: 1,
        backgroundColor: Colors.light.background,
        justifyContent: "center",
        alignItems: "center",
        padding: 32,
    },
    emptyContent: {
        alignItems: "center",
        width: "100%",
    },
    emptyIconContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: Colors.light.card,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 24,
    },
    emptyTitle: {
        fontSize: 24,
        fontWeight: "900",
        color: Colors.light.text,
        textAlign: "center",
    },
    emptySubtitle: {
        fontSize: 16,
        color: Colors.light.muted,
        textAlign: "center",
        marginTop: 12,
        lineHeight: 24,
        marginBottom: 32,
    },
    browseBtn: {
        backgroundColor: Colors.light.tint,
        paddingHorizontal: 32,
        paddingVertical: 16,
        borderRadius: 16,
    },
    browseBtnText: {
        color: "#fff",
        fontWeight: "900",
        fontSize: 16,
    },
    header: {
        paddingTop: Platform.OS === "ios" ? 60 : 40,
        paddingHorizontal: 24,
        paddingBottom: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: Colors.light.card,
        borderBottomWidth: 1,
        borderColor: Colors.light.border,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: Colors.light.background,
        alignItems: "center",
        justifyContent: "center",
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "800",
        color: Colors.light.text,
    },
    clearText: {
        color: Colors.light.error,
        fontWeight: "700",
    },
    scrollContent: {
        padding: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "800",
        color: Colors.light.text,
        marginBottom: 16,
    },
    itemsSection: {
        marginBottom: 32,
    },
    itemCard: {
        flexDirection: "row",
        backgroundColor: Colors.light.card,
        borderRadius: 20,
        padding: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: Colors.light.border,
    },
    itemImage: {
        width: 80,
        height: 80,
        borderRadius: 14,
    },
    itemInfo: {
        flex: 1,
    },
    itemHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    itemName: {
        fontSize: 16,
        fontWeight: "800",
        color: Colors.light.text,
        flex: 1,
        marginRight: 8,
    },
    itemCategory: {
        fontSize: 12,
        color: Colors.light.muted,
        marginTop: 2,
    },
    itemFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 12,
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: "900",
        color: Colors.light.tint,
    },
    quantityControls: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.light.background,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.light.border,
    },
    qtyBtn: {
        padding: 6,
    },
    qtyText: {
        color: Colors.light.text,
        fontWeight: "800",
        paddingHorizontal: 8,
        fontSize: 14,
    },
    summarySection: {
        marginBottom: 32,
    },
    summaryCard: {
        backgroundColor: Colors.light.card,
        borderRadius: 20,
        padding: 20,
        borderWidth: 1,
        borderColor: Colors.light.border,
    },
    summaryRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 12,
    },
    summaryLabel: {
        color: Colors.light.muted,
        fontSize: 14,
        fontWeight: "600",
    },
    summaryValue: {
        color: Colors.light.text,
        fontSize: 14,
        fontWeight: "700",
    },
    totalRow: {
        marginTop: 12,
        paddingTop: 12,
        borderTopWidth: 1,
        borderColor: Colors.light.border,
        marginBottom: 0,
    },
    totalLabel: {
        color: Colors.light.text,
        fontSize: 18,
        fontWeight: "900",
    },
    totalValue: {
        color: Colors.light.tint,
        fontSize: 20,
        fontWeight: "900",
    },
    deliverySection: {
        marginBottom: 32,
    },
    addressCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.light.card,
        padding: 16,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Colors.light.border,
    },
    addressInfo: {
        flex: 1,
    },
    addressTitle: {
        color: Colors.light.text,
        fontSize: 16,
        fontWeight: "800",
    },
    addressText: {
        color: Colors.light.muted,
        fontSize: 13,
        marginTop: 2,
    },
    bottomBar: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.light.card,
        padding: 24,
        paddingBottom: Platform.OS === "ios" ? 40 : 24,
        borderTopWidth: 1,
        borderColor: Colors.light.border,
    },
    checkoutBtn: {
        backgroundColor: Colors.light.tint,
        height: 60,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
    },
    checkoutText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "900",
    },
});
