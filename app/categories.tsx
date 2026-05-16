import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import {
    FlatList,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const ALL_CATEGORIES = [
    { id: "beer", name: "Beer", emoji: "🍺", count: "120+ Options" },
    { id: "wine", name: "Wine", emoji: "🍷", count: "80+ Options" },
    { id: "whisky", name: "Whisky", emoji: "🥃", count: "150+ Options" },
    { id: "vodka", name: "Vodka", emoji: "🍸", count: "60+ Options" },
    { id: "rum", name: "Rum", emoji: "🍹", count: "45+ Options" },
    { id: "gin", name: "Gin", emoji: "🍸", count: "30+ Options" },
    { id: "tequila", name: "Tequila", emoji: "🌵", count: "25+ Options" },
    { id: "brandy", name: "Brandy", emoji: "🥃", count: "20+ Options" },
];

export default function CategoriesScreen() {
    return (
        <View style={styles.container}>
            {/* HEADER */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <ChevronLeft size={24} color={Colors.light.text} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>All Categories</Text>
                <View style={{ width: 40 }} />
            </View>

            <FlatList
                data={ALL_CATEGORIES}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.categoryCard}
                        onPress={() => router.push(`/(tabs)?category=${item.id}` as any)}
                    >
                        <Text style={styles.emoji}>{item.emoji}</Text>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.count}>{item.count}</Text>
                    </TouchableOpacity>
                )}
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
        padding: 12,
    },
    categoryCard: {
        flex: 1,
        backgroundColor: Colors.light.card,
        borderRadius: 24,
        padding: 24,
        margin: 6,
        alignItems: "center",
        borderWidth: 1,
        borderColor: Colors.light.border,
    },
    emoji: {
        fontSize: 40,
        marginBottom: 12,
    },
    name: {
        fontSize: 16,
        fontWeight: "800",
        color: Colors.light.text,
    },
    count: {
        fontSize: 12,
        color: Colors.light.muted,
        marginTop: 4,
        fontWeight: "600",
    },
});
