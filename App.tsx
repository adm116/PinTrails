import { ListView } from './screens/ListView';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
	return (
		<SafeAreaProvider>
			<ListView />
		</SafeAreaProvider>
	)
}
