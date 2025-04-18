import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListView } from '../screens/ListView';
import { PinView } from '../screens/PinView';
import { AddPinView } from '../screens/AddPinView';

const Stack = createNativeStackNavigator();

export const ListStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ListView" component={ListView} />
      <Stack.Screen name="PinView" component={PinView} />
	  <Stack.Screen name="AddPinView" component={AddPinView} />
    </Stack.Navigator>
  );
};