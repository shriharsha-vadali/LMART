import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import { ChevronLeft, Package } from "lucide-react-native";
import {
    FlatList,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const ORDERS = [
    {
        id: "ORD-12345",
        store: "Paradise Liquors",
        date: "10 Jan 2024",
        amount: "₹1,250",
        status: "Delivered",
        items: "3 Items",
    },
    {
        id: "ORD-12340",
        store: "Liquor Nation",
        date: "08 Jan 2024",
        amount: "₹850",
        status: "Delivered",
        items: "1 Item",
    },
    {
        id: "ORD-12335",
        store: "Spirit Hub",
        date: "05 Jan 2024",
        amount: "₹2,100",
        status: "Delivered",
        items: "2 Items",
    },
];

export default function OrdersScreen() {
    return (
        <View style={styles.container}>
            {/* HEADER */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <ChevronLeft size={24} color={Colors.light.text} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>My Orders</Text>
                <View style={{ width: 40 }} />
            </View>

            <FlatList
                data={ORDERS}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.orderCard}>
                        <View style={styles.orderHeader}>
                            <View>
                                <Text style={styles.storeName}>{item.store}</Text>
                                <Text style={styles.orderId}>{item.id}</Text>
                            </View>
                            <View style={styles.statusBadge}>
                                <Text style={styles.statusText}>{item.status}</Text>
                            </View>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.orderFooter}>
                            <View>
                                <Text style={styles.label}>Date</Text>
                                <Text style={styles.value}>{item.date}</Text>
                            </View>
                            <View>
                                <Text style={[styles.label, { textAlign: 'right' }]}>Amount</Text>
                                <Text style={[styles.value, { color: Colors.light.tint }]}>{item.amount}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Package size={64} color={Colors.light.border} />
                        <Text style={styles.emptyText}>No orders yet</Text>
                    </View>
                }
            />
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
    listContent: {
        padding: 16,
    },
    orderCard: {
        backgroundColor: Colors.light.card,
        borderRadius: 24,
        padding: 20,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: Colors.light.border,
    },
    orderHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 16,
    },
    storeName: {
        fontSize: 16,
        fontWeight: "800",
        color: Colors.light.text,
    },
    orderId: {
        fontSize: 12,
        color: Colors.light.muted,
        marginTop: 2,
        fontWeight: "600",
    },
    statusBadge: {
        backgroundColor: "#f0fdf4",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
    },
    statusText: {
        fontSize: 11,
        fontWeight: "800",
        color: Colors.light.success,
    },
    divider: {
        height: 1,
        backgroundColor: Colors.light.border,
        marginBottom: 16,
    },
    orderFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    label: {
        fontSize: 12,
        color: Colors.light.muted,
        fontWeight: "600",
        marginBottom: 4,
    },
    value: {
        fontSize: 14,
        fontWeight: "700",
        color: Colors.light.text,
    },
    emptyContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 100,
    },
    emptyText: {
        marginTop: 16,
        fontSize: 16,
        color: Colors.light.muted,
        fontWeight: "600",
    },
});
