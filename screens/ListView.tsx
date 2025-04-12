import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { usePinStore } from '../stores/pinStore';
import { PinCard } from '../components/PinCard';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ListView = () => {
    const pins = usePinStore(state => state.pins);
    const fetchPins = usePinStore(state => state.fetchPins);

    useEffect(() => {
        fetchPins(); // Load dummy data
    }, []);

    return (
        <SafeAreaView style={styles.container} edges={['top']} accessibilityRole="list">
            <Text style={styles.title} accessibilityRole="header">Pins</Text>
            <FlatList
                data={pins}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <PinCard pin={item} />}
                contentContainerStyle={styles.listContent}
                accessibilityLabel="List of saved pins"
				showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16
    },
    listContent: {
        paddingBottom: 32,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});