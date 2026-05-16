import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import { ChevronLeft, Clock, Mic, Search, X } from "lucide-react-native";
import { useState } from "react";
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const RECENT_SEARCHES = ["Chivas Regal", "Kingfisher Ultra", "Sula Cabernet", "Jack Daniels"];
const SUGGESTIONS = ["Glenfiddich", "Heineken", "Bacardi", "Grey Goose"];

export default function SearchScreen() {
    const [query, setQuery] = useState("");

    return (
        <View style={styles.container}>
            {/* HEADER WITH SEARCH BAR */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <ChevronLeft size={24} color={Colors.light.text} />
                </TouchableOpacity>

                <View style={styles.searchBox}>
                    <Search size={20} color="#94a3b8" />
                    <TextInput
                        placeholder="Search drinks or brands..."
                        placeholderTextColor="#94a3b8"
                        style={styles.searchInput}
                        value={query}
                        onChangeText={setQuery}
                        autoFocus
                    />
                    {query.length > 0 ? (
                        <TouchableOpacity onPress={() => setQuery("")}>
                            <X size={20} color="#94a3b8" />
                        </TouchableOpacity>
                    ) : (
                        <Mic size={20} color={Colors.light.tint} />
                    )}
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* RECENT SEARCHES */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Recent Searches</Text>
                        <TouchableOpacity>
                            <Text style={styles.clearText}>Clear</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.tagContainer}>
                        {RECENT_SEARCHES.map((item) => (
                            <TouchableOpacity key={item} style={styles.tag}>
                                <Clock size={14} color={Colors.light.muted} style={{ marginRight: 6 }} />
                                <Text style={styles.tagText}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* TRENDING / SUGGESTIONS */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Trending Now</Text>
                    <View style={styles.suggestionList}>
                        {SUGGESTIONS.map((item) => (
                            <TouchableOpacity key={item} style={styles.suggestionItem}>
                                <Search size={18} color={Colors.light.muted} style={{ marginRight: 12 }} />
                                <Text style={styles.suggestionText}>{item}</Text>
                                <ChevronLeft size={18} color={Colors.light.border} style={{ transform: [{ rotate: '180deg' }] }} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
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
        paddingTop: Platform.OS === "ios" ? 60 : 40,
        paddingBottom: 16,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
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
    searchBox: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.light.card,
        borderRadius: 16,
        paddingHorizontal: 14,
        height: 50,
        gap: 10,
        borderWidth: 1,
        borderColor: Colors.light.border,
    },
    searchInput: {
        flex: 1,
        color: Colors.light.text,
        fontSize: 15,
        fontWeight: "600",
    },
    scrollContent: {
        padding: 16,
    },
    section: {
        marginBottom: 32,
    },
    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "800",
        color: Colors.light.text,
    },
    clearText: {
        fontSize: 13,
        fontWeight: "700",
        color: Colors.light.tint,
    },
    tagContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
    },
    tag: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.light.card,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors.light.border,
    },
    tagText: {
        fontSize: 14,
        fontWeight: "600",
        color: Colors.light.text,
    },
    suggestionList: {
        marginTop: 12,
    },
    suggestionItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: Colors.light.border,
    },
    suggestionText: {
        flex: 1,
        fontSize: 15,
        fontWeight: "600",
        color: Colors.light.text,
    },
});
