import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { ListStackNavigator } from './ListStackNavigator';

const Tab = createBottomTabNavigator();

// TODO: Is this respecting the safe are on the bottom?
export const BottomTabNavigator = () => {
	const theme = useTheme();

	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					headerShown: false,
					tabBarActiveTintColor: theme.textPrimary,
					tabBarInactiveTintColor: theme.textMuted,
					tabBarStyle: {
						backgroundColor: theme.surface,
						borderTopWidth: 0
					},
				})}
			>
				<Tab.Screen
					name="List"
					component={ListStackNavigator}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Ionicons name="list" color={color} size={size} />
						),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};