import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Pin } from "../models/pin";

export type RootStackParamList = {
	LoginView: undefined;
	MainView: undefined; 
};

export type ListStackParamList = {
	ListView: undefined;
	PinView: { pin: Pin };
	AddPinView: undefined;
};

export type RootTabParamList = {
	ListTab: undefined;
};

// Navigation Props
export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type ListStackNavigationProp = NativeStackNavigationProp<ListStackParamList>;
export type RootTabNavigationProp = BottomTabNavigationProp<RootTabParamList>;