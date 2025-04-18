import React from 'react';
import { View, Text, Image, ScrollView, Pressable, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { makeStyles } from '../utils/makeStyles';
import { scale, verticalScale, moderateScale } from '../utils/scaling';
import { ListStackParamList } from '../navigation/types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Tag } from '../components/Tag';
import { Header } from '../components/Header';

type PinViewRouteProp = RouteProp<ListStackParamList, 'PinView'>;

export const PinView = () => {
	const navigation = useNavigation();
	const { params } = useRoute<PinViewRouteProp>();
	const { pin } = params;
	const theme = useTheme();
	const styles = useStyles();

	// TODO: remove inline styles
	// TODO: pull out buttons into own components
	return (
		<SafeAreaView edges={['top']} style={styles.container}>
			<Header
				leftItem={
					<Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
						<Ionicons name="chevron-back" size={scale(30)} color={theme.accentColor} />
					</Pressable>
				}
				rightItem={
					<Pressable onPress={() => console.log('Edit pressed')} style={styles.editButton}>
						<Ionicons name="create-outline" size={scale(30)} color={theme.accentColor} />
					</Pressable>
				}
			/>
			<ScrollView contentContainerStyle={{ paddingBottom: verticalScale(16) }}>
				<Image source={{ uri: pin.imageUrl }} style={[styles.image, { marginTop: verticalScale(0) }]} resizeMode="cover" />

				<View style={styles.content}>
					<Text style={styles.title}>{pin.name}</Text>
					<Text style={styles.location}>{pin.location}</Text>

					<View style={styles.tags}>
						{pin.tags.map((tag, index) => (
							<Tag tag={tag} key={index} />
						))}
					</View>

					<Text style={styles.description}>{pin.description}</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const useStyles = makeStyles((theme) => ({
	container: {
		flex: 1,
		backgroundColor: theme.background
	} as ViewStyle,
	image: {
		width: '100%',
		height: verticalScale(240),
	} as ImageStyle,
	backButton: {
	} as ViewStyle,
	editButton: {
	} as ViewStyle,
	content: {
		padding: scale(16),
	} as ViewStyle,
	title: {
		fontSize: moderateScale(24),
		fontWeight: '600',
		color: theme.textPrimary,
	} as TextStyle,
	location: {
		fontSize: moderateScale(16),
		color: theme.textSecondary,
		marginVertical: verticalScale(4),
	} as TextStyle,
	tags: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginVertical: verticalScale(8),
	} as ViewStyle,
	description: {
		fontSize: moderateScale(16),
		color: theme.textPrimary,
		marginTop: verticalScale(12),
	} as TextStyle,
}));