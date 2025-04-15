import React, { useEffect, useState } from 'react';
import { View, Text, Platform, ViewStyle, TextStyle, useColorScheme } from 'react-native';
import * as AppleAuthentication from 'expo-apple-authentication';
import { scale, verticalScale, moderateScale } from '../utils/scaling';
import { makeStyles } from '../utils/makeStyles';
import { useAuthStore } from '../hooks/useAuthStore';

export const LoginView = () => {
	const styles = useStyles();
	const [isAppleAvailable, setIsAppleAvailable] = useState(false);
	const scheme = useColorScheme();
	const setUser = useAuthStore((state) => state.setUser);

	useEffect(() => {
		if (Platform.OS === 'ios') {
			AppleAuthentication.isAvailableAsync().then(setIsAppleAvailable);
		}
	}, []);

	const handleAppleSignIn = async () => {
		return await AppleAuthentication.signInAsync({
			requestedScopes: [
				AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
				AppleAuthentication.AppleAuthenticationScope.EMAIL,
			],
		}).then((credential) => {
			setUser(credential.user);
		}).catch((error) => {
			if (error.code === 'ERR_CANCELED') {
				// User cancelled the sign-in
			} else {
				console.error('Apple Sign-In Error:', error);
			}
		});
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome to PinTrails</Text>
			{isAppleAvailable && (
				<AppleAuthentication.AppleAuthenticationButton
					buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
					buttonStyle={scheme === 'dark' ? AppleAuthentication.AppleAuthenticationButtonStyle.WHITE_OUTLINE : AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
					cornerRadius={scale(5)}
					style={styles.appleButton}
					onPress={handleAppleSignIn}
				/>
			)}
		</View>
	);
};

const useStyles = makeStyles((theme) => ({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: scale(24),
		backgroundColor: theme.background,
	} as ViewStyle,
	title: {
		fontSize: moderateScale(24),
		fontWeight: '600',
		marginBottom: verticalScale(24),
		color: theme.textPrimary,
	} as TextStyle,
	appleButton: {
		width: scale(280),
		height: verticalScale(44),
	} as ViewStyle,
}));
