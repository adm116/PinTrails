import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { ListStackNavigator } from './ListStackNavigator';

const Tab = createBottomTabNavigator();

// TODO: Is this respecting the safe are on the bottom?
export const BottomTabNavigator = () => {
	const theme = useTheme();

	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarActiveTintColor: theme.accentColor,
				tabBarInactiveTintColor: theme.textSecondary,
				tabBarStyle: {
					backgroundColor: theme.surface,
					borderTopWidth: 0
				},
			})}
		>
			<Tab.Screen
				name="ListTab"
				component={ListStackNavigator}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="list" color={color} size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};