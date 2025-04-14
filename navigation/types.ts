import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Pin } from "../models/pin";

export type RootStackParamList = {
	PinView: { pin: Pin };
	// other routes...
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
