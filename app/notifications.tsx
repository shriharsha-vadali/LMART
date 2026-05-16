import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import { Bell, ChevronLeft } from "lucide-react-native";
import {
    FlatList,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const NOTIFICATIONS = [
    {
        id: "1",
        title: "Order Delivered!",
        message: "Your order from Paradise Liquors has been delivered.",
        time: "2 hours ago",
        type: "order",
    },
    {
        id: "2",
        title: "Weekend Special 🍾",
        message: "Get flat 40% OFF on all premium wines this weekend.",
        time: "5 hours ago",
        type: "promo",
    },
    {
        id: "3",
        title: "Restock Alert",
        message: "Your favorite single malt is back in stock at Spirit Hub.",
        time: "1 day ago",
        type: "alert",
    },
];

export default function NotificationsScreen() {
    return (
        <View style={styles.container}>
            {/* HEADER */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <ChevronLeft size={24} color={Colors.light.text} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Notifications</Text>
                <View style={{ width: 40 }} />
            </View>

            <FlatList
                data={NOTIFICATIONS}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.notificationCard}>
                        <View style={[styles.iconContainer, item.type === 'order' && styles.orderIcon]}>
                            <Bell size={20} color={item.type === 'order' ? Colors.light.success : Colors.light.tint} />
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.message}>{item.message}</Text>
                            <Text style={styles.time}>{item.time}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Bell size={64} color={Colors.light.border} />
                        <Text style={styles.emptyText}>No notifications yet</Text>
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
    notificationCard: {
        flexDirection: "row",
        backgroundColor: Colors.light.card,
        borderRadius: 20,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: Colors.light.border,
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 14,
        backgroundColor: "#eef2ff",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 16,
    },
    orderIcon: {
        backgroundColor: "#f0fdf4",
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: "700",
        color: Colors.light.text,
        marginBottom: 4,
    },
    message: {
        fontSize: 14,
        color: Colors.light.muted,
        lineHeight: 20,
        marginBottom: 6,
    },
    time: {
        fontSize: 12,
        color: Colors.light.muted,
        fontWeight: "500",
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
