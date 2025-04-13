import { ThemeProvider } from './contexts/ThemeContext';
import { ListView } from './screens/ListView';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
	return (
		<SafeAreaProvider>
			<ThemeProvider>
				<ListView />
			</ThemeProvider>
		</SafeAreaProvider>
	)
}
