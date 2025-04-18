import React from 'react';
import { View, Text, Image, ViewStyle, TextStyle, ImageStyle, Pressable } from 'react-native';
import { Pin } from '../models/pin';
import { scale, verticalScale, moderateScale } from '../utils/scaling';
import { makeStyles } from '../utils/makeStyles';
import { useNavigation } from '@react-navigation/native';
import { ListStackNavigationProp } from '../navigation/types';
import { Tag } from './Tag';

type PinCardProps = {
	pin: Pin;
};

export const PinCard = ({ pin }: PinCardProps) => {
	const { name, description, tags, imageUrl, addedAgo } = pin;
	const styles = useStyles();
	const navigation = useNavigation<ListStackNavigationProp>();

	return (
		<Pressable onPress={() => navigation.navigate('PinView', { pin })}>
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
								<Tag tag={tag} key={index}/>
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
		</Pressable>
	);
};

type PinCardStyles = {
	card: ViewStyle;
	header: ViewStyle;
	textBlock: ViewStyle;
	title: TextStyle;
	tags: ViewStyle;
	tag: TextStyle;
	description: TextStyle;
	timestamp: TextStyle;
	image: ImageStyle;
};

const useStyles = makeStyles<PinCardStyles>((theme) => ({
	card: {
		backgroundColor: theme.surface,
		borderRadius: scale(12),
		padding: scale(16),
		marginBottom: verticalScale(12),
		shadowColor: '#000',
		shadowOpacity: 0.05,
		shadowRadius: scale(4),
		shadowOffset: { width: 0, height: scale(2) },
		elevation: 1,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	textBlock: {
		flex: 1,
		paddingRight: scale(8),
	},
	title: {
		fontSize: moderateScale(16),
		fontWeight: '600',
		marginBottom: verticalScale(4),
		color: theme.textPrimary,
	},
	tags: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: scale(6),
	},
	tag: {
		fontSize: moderateScale(12),
		backgroundColor: theme.accentColor,
		color: theme.textPrimary,
		borderRadius: scale(16),
		paddingHorizontal: scale(10),
		paddingVertical: verticalScale(4),
		marginRight: scale(6),
		marginBottom: verticalScale(4),
	},
	description: {
		fontSize: moderateScale(14),
		color: theme.textPrimary,
		marginTop: verticalScale(8),
	},
	timestamp: {
		fontSize: moderateScale(12),
		color: theme.textSecondary,
		marginTop: verticalScale(4),
	},
	image: {
		width: scale(64),
		height: scale(64),
		borderRadius: scale(8),
		backgroundColor: '#eee',
	},
}));