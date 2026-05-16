import { Colors } from "@/constants/theme";
import { router, useLocalSearchParams } from "expo-router";
import { ArrowLeft, Minus, Plus, ShoppingBag } from "lucide-react-native";
import { useState } from "react";
import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useCartStore } from "../store/useCartStore";

export default function ProductDetails() {
    const { id } = useLocalSearchParams();
    const addItem = useCartStore((state) => state.addItem);
    const [quantity, setQuantity] = useState(1);

    // Mock product data (In a real app, fetch by id)
    const product = {
        id: "p1",
        name: "Macallan 12 Year Old",
        price: 8500,
        image: "https://images.unsplash.com/photo-1527281032234-50367a644621?w=800",
        category: "Whisky",
        description: "The Macallan Double Cask 12 Years Old forms part of our Double Cask range which marries the classic Macallan style and the unmistakable sweetness of American oak with the rich character of European oak. The result is a perfect balance of flavors, with a honeyed, citrus note and balanced wood spice.",
        abv: "40%",
        region: "Speyside, Scotland",
        storeId: "1",
    };

    const handleAddToCart = () => {
        // For simplicity, we add the product multiple times based on quantity
        for (let i = 0; i < quantity; i++) {
            addItem(product);
        }
        router.back();
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: product.image }} style={styles.image} />
                    <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                        <ArrowLeft size={24} color="#fff" />
                    </TouchableOpacity>
                </View>

                <View style={styles.content}>
                    <View style={styles.categoryBadge}>
                        <Text style={styles.categoryText}>{product.category}</Text>
                    </View>

                    <Text style={styles.name}>{product.name}</Text>

                    <View style={styles.metaGrid}>
                        <View style={styles.metaItem}>
                            <Text style={styles.metaLabel}>ABV</Text>
                            <Text style={styles.metaValue}>{product.abv}</Text>
                        </View>
                        <View style={styles.metaItem}>
                            <Text style={styles.metaLabel}>REGION</Text>
                            <Text style={styles.metaValue}>{product.region}</Text>
                        </View>
                    </View>

                    <Text style={styles.sectionTitle}>About this spirit</Text>
                    <Text style={styles.description}>{product.description}</Text>

                    <View style={{ height: 120 }} />
                </View>
            </ScrollView>

            <View style={styles.bottomBar}>
                <View style={styles.quantityContainer}>
                    <TouchableOpacity
                        style={styles.qtyBtn}
                        onPress={() => quantity > 1 && setQuantity(q => q - 1)}
                    >
                        <Minus size={20} color={Colors.light.text} />
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{quantity}</Text>
                    <TouchableOpacity
                        style={styles.qtyBtn}
                        onPress={() => setQuantity(q => q + 1)}
                    >
                        <Plus size={20} color={Colors.light.text} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.addToCartBtn} onPress={handleAddToCart}>
                    <ShoppingBag size={20} color="#fff" />
                    <Text style={styles.addToCartText}>Add to Cart • ₹{product.price * quantity}</Text>
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
    imageContainer: {
        height: 400,
        width: "100%",
    },
    image: {
        width: "100%",
        height: "100%",
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
    content: {
        padding: 24,
    },
    categoryBadge: {
        backgroundColor: "rgba(79, 70, 229, 0.1)",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
        alignSelf: "flex-start",
        marginBottom: 12,
    },
    categoryText: {
        color: Colors.light.tint,
        fontSize: 12,
        fontWeight: "900",
    },
    name: {
        fontSize: 32,
        fontWeight: "900",
        color: Colors.light.text,
        marginBottom: 24,
    },
    metaGrid: {
        flexDirection: "row",
        gap: 32,
        marginBottom: 32,
    },
    metaItem: {
        gap: 4,
    },
    metaLabel: {
        fontSize: 10,
        color: Colors.light.muted,
        fontWeight: "800",
        letterSpacing: 1,
    },
    metaValue: {
        fontSize: 16,
        color: Colors.light.text,
        fontWeight: "700",
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "800",
        color: Colors.light.text,
        marginBottom: 12,
    },
    description: {
        fontSize: 15,
        color: Colors.light.muted,
        lineHeight: 24,
    },
    bottomBar: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.light.background,
        padding: 24,
        flexDirection: "row",
        gap: 16,
        borderTopWidth: 1,
        borderColor: Colors.light.border,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 10,
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f8fafc",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#e2e8f0",
    },
    qtyBtn: {
        padding: 12,
    },
    quantityText: {
        color: Colors.light.text,
        fontSize: 18,
        fontWeight: "800",
        paddingHorizontal: 8,
    },
    addToCartBtn: {
        flex: 1,
        backgroundColor: Colors.light.tint,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 18,
        gap: 10,
        shadowColor: Colors.light.tint,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    addToCartText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "900",
    },
});
