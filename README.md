# 📍 PinTrails

**PinTrails** is a minimalist app to help users save and organize meaningful locations using tags. Built with React Native and Expo, it's perfect for bookmarking your favorite spots and filtering them by tag — fast and clean.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/adm116/PinTrails.git
cd PinTrails
```

### 2. Use the Correct Node Version

Make sure you have [`nvm`](https://github.com/nvm-sh/nvm) installed, then run:

```bash
nvm use
```

If it fails, install Node 18:

```bash
nvm install 18
nvm use 18
```

You can verify with:

```bash
node -v    # should print v18.x.x
```

### 3. Install Dependencies

Install project-specific packages (in `node_modules`) with:

```bash
npm install
```

### 4. Start the App

Run the Expo development server:

```bash
npm start
```

- Scan the QR code using **Expo Go** on your iPhone
- Your app will instantly open and reload on changes

---

## 📁 Project Structure

```
PinTrails/
├── App.tsx               # Entry point
├── assets/               # Icons, images
├── components/           # Reusable components (e.g., TagChip, PinCard)
├── screens/              # App screens (ListView, AddPin, etc.)
├── navigation/           # Tab + stack navigators
├── constants/            # Static config (colors, tags, etc.)
├── package.json          # App metadata and dependencies
├── tsconfig.json         # TypeScript config
└── .nvmrc                # Node version file
```

---

## 🤝 Contributing

Pull requests welcome. For major changes, please open an issue first to discuss what you’d like to change.

---

## 📄 License

[MIT](LICENSE)

---

## 🧱 Architecture

PinTrails follows a lightweight **MVVM-inspired architecture** using React Native and Expo.

### 📦 Stack Overview

| Layer        | Tool                    | Purpose                                 |
|--------------|-------------------------|-----------------------------------------|
| Model        | Firebase + `pinService` | Data layer, Firestore & API integration |
| ViewModel    | `zustand` store         | State & business logic for components   |
| View         | React components        | UI rendering via hooks and props        |

### 💡 Why Zustand?

We use [`zustand`](https://github.com/pmndrs/zustand) for state management because it is:
- Minimal and intuitive (1 function to create a store)
- Fast and React Native–friendly
- Boilerplate-free (no reducers or dispatch)
- A perfect fit for scoped stores like `usePinStore`

This pattern helps us:
- Keep components clean and focused on UI
- Centralize logic around pins, tags, and filters
- Stay scalable as the app grows

Example usage:
```ts
const pins = usePinStore(state => state.pins);
const fetchPins = usePinStore(state => state.fetchPins);

useEffect(() => {
  fetchPins();
}, []);
```

---

## 📱 Responsive Layouts
To ensure that the PinTrails UI looks consistent across a wide range of devices (from iPhone SE to iPhone 16 Pro Max), we use custom scaling functions based on a chosen baseline screen size.

### 📐 Baseline Device: iPhone 16
Our design and scaling logic is anchored on the dimensions of the iPhone 16, which has:
- Width: **430 points**
- Height: **932 points**

This allows the app to scale proportionally on both smaller and larger devices.

### 🔧 Custom Scaling Helpers

We define three functions in `utils/scaling.ts`:

```ts
scale(size)         // Scales horizontally
verticalScale(size) // Scales vertically
moderateScale(size) // Scales gently, ideal for font sizes
```

#### ✅ Use Cases:

| Function             | Description                             | Use For                              |
|----------------------|-----------------------------------------|--------------------------------------|
| `scale(size)`         | Scales based on screen width (X axis)   | Horizontal padding, margin, widths   |
| `verticalScale(size)` | Scales based on screen height (Y axis)  | Top/bottom margin, heights           |
| `moderateScale(size)` | Partial scale to prevent over-scaling   | Font sizes, compact spacing          |

Each of these methods adjusts the given `size` value relative to the screen dimensions at runtime, making the layout adaptive and consistent.

To use them in your components:

```ts
import { scale, verticalScale, moderateScale } from '../utils/scaling';
```

> ⚠️ We do not use the default `react-native-size-matters` helpers because they are hardcoded to a 375x667 baseline and cannot be configured.

This approach gives us full control and aligns directly with the devices we're designing for.

### 🌗 Dark/Light Mode Support

PinTrails automatically adapts to the system's dark or light appearance setting using the `Appearance` API from React Native. We created a custom `ThemeProvider` that listens for changes in the device's color scheme and exposes the current theme (light or dark) via a `useTheme()` hook. All components use theme-aware styles, allowing them to respond dynamically to system changes — even live, without restarting the app. This ensures visual consistency and accessibility across user preferences.

### 📏 Font Scaling

`responsiveSize`, which will render text based on current accessibility font scaling, can be passed by using makeStyles, but for now, this is being skipped as the app seems to respond well already to font scaling without further work. 

---

## 🛠 macOS Simulator Setup (Optional)

If you'd like to run the iOS simulator (instead of Expo Go on a physical device), make sure your system is using the full version of Xcode — not just the Command Line Tools.

### 1. Point `xcode-select` to the full Xcode install

```bash
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
```

### 2. Confirm it worked

```bash
xcrun simctl help
```

✅ If successful, you'll see a list of simulator commands.  
❌ If not, make sure you've opened Xcode at least once: `open -a Xcode`

---

### 3. Accept the Xcode license (if needed)

```bash
sudo xcodebuild -license accept
```

---

After this setup, pressing **`i`** in the Expo CLI should launch the iOS simulator.

> 💡 This step is optional. You can always use **Expo Go** on your iPhone for the fastest development loop.
