# 📍 PinTrail

**PinTrail** is a minimalist app to help users save and organize meaningful locations using tags. Built with React Native and Expo, it's perfect for bookmarking your favorite spots and filtering them by tag — fast and clean.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/PinTrail.git
cd PinTrail
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
PinTrail/
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
