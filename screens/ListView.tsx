import React, { useEffect } from 'react';
import { FlatList, Text, TextStyle, ViewStyle, Pressable, View } from 'react-native';
import { usePinStore } from '../stores/pinStore';
import { PinCard } from '../components/PinCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { scale, verticalScale, moderateScale } from '../utils/scaling';
import { makeStyles } from '../utils/makeStyles';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { ListStackNavigationProp } from '../navigation/types';
import { Header } from '../components/Header';
import { useTheme } from '../hooks/useTheme';

export const ListView = () => {
    const pins = usePinStore(state => state.pins);
    const fetchPins = usePinStore(state => state.fetchPins);
    const navigation = useNavigation<ListStackNavigationProp>();
	const styles = useStyles();
	const theme = useTheme();

    useEffect(() => {
        fetchPins();
    }, []);

    return (
        <SafeAreaView style={styles.container} edges={['top']} accessibilityRole="list">
            <Header
                rightItem={
					<Pressable
						onPress={() => navigation.navigate('AddPinView')}
						accessibilityLabel="Add new pin"
						style={styles.addButton}
                	>
                    	<Ionicons name="add" size={28} color={theme.accentColor} />
                	</Pressable>
				}
            />
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
	addButton: ViewStyle;
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
		color: theme.textPrimary,
		marginBottom: verticalScale(10),
		marginTop: verticalScale(8),
    },
    addButton: {
    } as ViewStyle,
}));