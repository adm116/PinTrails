import React, { useEffect } from 'react';
import { FlatList, Text, TextStyle, ViewStyle } from 'react-native';
import { usePinStore } from '../stores/pinStore';
import { PinCard } from '../components/PinCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { scale, verticalScale, moderateScale } from '../utils/scaling';
import { makeStyles } from '../utils/makeStyles';

export const ListView = () => {
    const pins = usePinStore(state => state.pins);
    const fetchPins = usePinStore(state => state.fetchPins);
	const styles = useStyles();

    useEffect(() => {
        fetchPins();
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

type ListViewStyles = {
	container: ViewStyle;
	listContent: ViewStyle;
	title: TextStyle;
};

const useStyles = makeStyles<ListViewStyles>((theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme.background,
        paddingHorizontal: scale(16),
    },
    listContent: {
        paddingBottom: verticalScale(32),
    },
    title: {
        fontSize: moderateScale(40),
        fontWeight: 'bold',
        marginBottom: verticalScale(16),
		color: theme.textPrimary
    },
}));