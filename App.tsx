import { ThemeProvider } from './contexts/ThemeContext';
import { BottomTabNavigator } from './navigation/BottomTabNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
	return (
		<SafeAreaProvider>
			<ThemeProvider>
				<BottomTabNavigator />
			</ThemeProvider>
		</SafeAreaProvider>
	)
}
