import React from 'react';
import { makeStyles } from '../utils/makeStyles';
import { moderateScale, scale, verticalScale } from '../utils/scaling';
import { Text, TextStyle } from 'react-native';

type TagProps = {
	tag: string;
}

export const Tag = ({ tag }: TagProps) => {
	const styles = useStyles();

	return (
		<Text style={styles.tag} accessibilityLabel={`Tag: ${tag}`}>
			{tag}
		</Text>
	);
}

const useStyles = makeStyles((theme) => ({
	tag: {
		fontSize: moderateScale(14),
		backgroundColor: theme.accentColor,
		color: '#FFFFFF',
		borderRadius: scale(16),
		paddingHorizontal: scale(10),
		paddingVertical: verticalScale(4),
		marginRight: scale(6),
		marginBottom: verticalScale(4),
	} as TextStyle,
}));