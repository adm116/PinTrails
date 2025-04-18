import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LoginView} from '../screens/LoginView';
import {BottomTabNavigator} from './BottomTabNavigator';
import { useAuthStore } from '../hooks/useAuthStore';

const Stack = createNativeStackNavigator();

export const RootStackNavigator = () => {
	const user = useAuthStore((state) => state.user);
	
	return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <Stack.Screen name="LoginView" component={LoginView} />
      ) : (
        <Stack.Screen name="MainView" component={BottomTabNavigator} />
      )}
    </Stack.Navigator>
  );
};