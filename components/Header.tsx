import React from 'react';
import { View, ViewStyle } from 'react-native';
import { makeStyles } from '../utils/makeStyles';
import { scale, verticalScale } from '../utils/scaling';

type HeaderProps = {
	leftItem?: React.ReactNode;
	rightItem?: React.ReactNode;
};

export const Header = ({ leftItem, rightItem }: HeaderProps) => {
	const styles = useStyles();

	return (
		<View style={styles.container}>
			<View style={styles.sideItem}>{leftItem}</View>
			<View style={styles.spacer} />
			<View style={styles.sideItem}>{rightItem}</View>
		</View>
	);
};

const useStyles = makeStyles((theme) => ({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: verticalScale(8)
	} as ViewStyle,
	sideItem: {
		width: scale(40),
		justifyContent: 'center',
		alignItems: 'center',
	} as ViewStyle,
	spacer: {
		flex: 1,
	} as ViewStyle,
}));