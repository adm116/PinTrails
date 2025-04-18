import React from 'react';
import { View, Text, TextInput, Pressable, ScrollView, Image, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../hooks/useTheme';
import { makeStyles } from '../utils/makeStyles';
import { scale, verticalScale, moderateScale } from '../utils/scaling';

export const AddPinView = () => {
	const theme = useTheme();
	const styles = useStyles();

	return (
		<SafeAreaView style={styles.safeArea} edges={['top']}>
			<ScrollView contentContainerStyle={styles.container}>
				<TextInput
					placeholder="Name"
					placeholderTextColor={theme.textSecondary}
					style={styles.input}
				/>

				<Pressable style={styles.input}>
					<Text style={styles.locationText}>Location</Text>
				</Pressable>

				<View style={styles.tagSection}>
					<Text style={styles.addTagsText}>Add Tags</Text>
					<View style={styles.tagsContainer}>
						<Pressable style={styles.tag}>
							<Text style={styles.tagText}>brunch</Text>
						</Pressable>
						<Pressable style={styles.tag}>
							<Text style={styles.tagText}>great views</Text>
						</Pressable>
					</View>
				</View>

				<TextInput
					placeholder="Notes"
					placeholderTextColor={theme.textSecondary}
					style={[styles.input, styles.notesInput]}
					multiline
				/>

				<Text style={styles.photosLabel}>Photos:</Text>
				<View style={styles.photosGrid}>
					<Pressable style={styles.uploadPhoto}>
						<Text style={styles.uploadText}>+</Text>
						<Text style={styles.uploadText}>Upload Photo</Text>
					</Pressable>
					<Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.photo} />
					<Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.photo} />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const useStyles = makeStyles((theme) => ({
	container: {
		padding: scale(16),
		backgroundColor: theme.background,
	} as ViewStyle,
	input: {
		backgroundColor: theme.surface,
		color: theme.textPrimary,
		fontSize: moderateScale(16),
		borderRadius: scale(10),
		paddingHorizontal: scale(12),
		paddingVertical: verticalScale(14),
		marginBottom: verticalScale(12),
	} as TextStyle,
	locationText: {
		color: theme.textPrimary,
		fontSize: moderateScale(16),
	} as TextStyle,
	tagSection: {
		marginBottom: verticalScale(12),
	} as ViewStyle,
	addTagsText: {
		color: theme.accentColor,
		marginBottom: verticalScale(4),
		fontSize: moderateScale(16),
	} as TextStyle,
	tagsContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	} as ViewStyle,
	tag: {
		backgroundColor: theme.surface,
		paddingHorizontal: scale(8),
		paddingVertical: verticalScale(4),
		borderRadius: scale(8),
		marginRight: scale(6),
		marginBottom: verticalScale(6),
	} as ViewStyle,
	tagText: {
		color: theme.accentColor,
	} as TextStyle,
	notesInput: {
		height: verticalScale(100),
		textAlignVertical: 'top',
	} as TextStyle,
	photosLabel: {
		color: theme.textPrimary,
		fontSize: moderateScale(16),
		marginVertical: verticalScale(12),
	} as TextStyle,
	photosGrid: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: scale(8),
	} as ViewStyle,
	uploadPhoto: {
		width: scale(100),
		height: scale(100),
		borderRadius: scale(10),
		borderWidth: 1,
		borderColor: theme.textSecondary,
		justifyContent: 'center',
		alignItems: 'center',
	} as ViewStyle,
	uploadText: {
		color: theme.textPrimary,
		fontSize: moderateScale(14),
		textAlign: 'center',
	} as TextStyle,
	photo: {
		width: scale(100),
		height: scale(100),
		borderRadius: scale(10),
	} as ImageStyle,
	safeArea: {
		flex: 1,
		backgroundColor: theme.background,
	} as ViewStyle,
}));