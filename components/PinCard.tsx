import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Pin } from '../models/pin';

type PinCardProps = {
    pin: Pin;
};

export const PinCard = ({ pin }: PinCardProps) => {
    const { name, description, tags, imageUrl, addedAgo } = pin;

    return (
        <View
            style={styles.card}
            accessibilityRole="button"
            accessible
            accessibilityLabel={`Pin: ${name}`}
        >
            <View style={styles.header}>
                <View style={styles.textBlock}>
                    <Text style={styles.title}>{name}</Text>
                    <View style={styles.tags}>
                        {tags.map((tag, index) => (
                            <Text key={index} style={styles.tag} accessibilityLabel={`Tag: ${tag}`}>
                                {tag}
                            </Text>
                        ))}
                    </View>
                </View>
                {imageUrl && (
                    <Image
                        source={{ uri: imageUrl }}
                        style={styles.image}
                        accessibilityLabel={`Image of ${name}`}
                    />
                )}
            </View>
            <Text style={styles.description}>{description}</Text>
            {addedAgo && <Text style={styles.timestamp}>Added on {addedAgo}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textBlock: {
        flex: 1,
        paddingRight: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    },
    tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6,
    },
    tag: {
        fontSize: 12,
        backgroundColor: '#e0e0e0',
        color: '#333',
        borderRadius: 16,
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginRight: 6,
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        color: '#555',
        marginTop: 8,
    },
    timestamp: {
        fontSize: 12,
        color: '#888',
        marginTop: 4,
    },
    image: {
        width: 64,
        height: 64,
        borderRadius: 8,
        backgroundColor: '#eee',
    },
});