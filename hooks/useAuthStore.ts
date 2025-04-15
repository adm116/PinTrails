import { create } from 'zustand';
import { persist, PersistStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

// TODO: type user here
type AuthState = {
	user: any;
	setUser: (user: any) => void;
	logout: () => void;
};

const zustandStorage: PersistStorage<AuthState> = {
	getItem: async (key) => {
	  const value = await AsyncStorage.getItem(key);
	  return value ? JSON.parse(value) : null;
	},
	setItem: async (key, value) => {
	  await AsyncStorage.setItem(key, JSON.stringify(value));
	},
	removeItem: async (key) => {
	  await AsyncStorage.removeItem(key);
	},
  };

export const useAuthStore = create<AuthState>()(
	persist(
		(set) => ({
			user: null,
			setUser: (user) => set({ user }),
			logout: () => set({ user: null }),
		}),
		{
			name: 'auth-storage',
			storage: zustandStorage,
		}
	)
);