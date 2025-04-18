import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootStackNavigator } from './navigation/RootStackNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<RootStackNavigator />
			</NavigationContainer>
		</SafeAreaProvider>
	);
}
