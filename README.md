This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

<!-- ================================================================= -->

cd android
gradlew clean
gradlew assembleRelease

npx react-native run-android --active-arch-only
npm start --reset-cache
npx react-native start --reset-cache


npm install --save-dev metro-react-native-babel-preset


dark mode off syntax
=======================================================================
android - > android/app/src/main/res/values/styles.xml open pannunga 
===========
 <style name="AppTheme" parent="Theme.AppCompat.Light.NoActionBar">
      <!-- Dark mode force disable -->
        <item name="android:forceDarkAllowed">false</item>
=======================================================================

ios -> ios/YourApp/Info.plist open pannunga
===========
 <key>UIUserInterfaceStyle</key>
    <string>Light</string>
=======================================================================

└── 📁src
    ├── 📁app                 # App-level setup
    │   ├── App.js
    │   ├── index.js
    │   ├── navigation.js     # Root navigation setup
    │   ├── store.js          # Redux/Zustand setup
    │   └── theme.js          # Global theme (colors, spacing, typography)
    │
    ├── 📁assets              # Static resources
    │   ├── fonts/
    │   ├── images/
    │   ├── svgs/
    │   └── lottie/
    │
    ├── 📁components          # Shared reusable UI
    │   ├── common/           # Buttons, Inputs, Loaders, Modals
    │   ├── forms/            # Form elements (TextInput, Dropdown, DatePicker)
    │   ├── layout/           # Layout components (Header, Sidebar, Drawer)
    │   └── index.js
    │
    ├── 📁constants           # Global constants/config
    │   ├── colors.js
    │   ├── fonts.js
    │   ├── images.js
    │   ├── strings.js
    │   └── index.js
    │
    ├── 📁features            # 💡 Feature-based structure
    │   ├── 📁auth
    │   │   ├── api/          # login, register, logout
    │   │   ├── components/   # Auth-specific UI
    │   │   ├── hooks/        # useAuth, useLogin
    │   │   ├── screens/      # LoginScreen, RegisterScreen, SplashScreen, OnboardScreen
    │   │   ├── store/        # authSlice.js
    │   │   └── index.js
    │   │
    │   ├── 📁products
    │   │   ├── api/          # productApi.js
    │   │   ├── components/   # ProductCard, ProductForm
    │   │   ├── hooks/        # useProducts
    │   │   ├── screens/      # ProductsScreen, AddProductScreen, EditProductScreen
    │   │   ├── store/        # productSlice.js
    │   │   └── index.js
    │   │
    │   ├── 📁categories
    │   │   ├── api/          # categoryApi.js
    │   │   ├── components/   # CategoryForm, CategoryTree
    │   │   ├── hooks/        # useCategories
    │   │   ├── screens/      # CategoriesScreen, AddCategoryScreen
    │   │   ├── store/        # categorySlice.js
    │   │   └── index.js
    │   │
    │   ├── 📁orders
    │   │   ├── api/          # orderApi.js
    │   │   ├── components/   # OrderCard, OrderStatusBadge
    │   │   ├── hooks/        # useOrders
    │   │   ├── screens/      # OrdersScreen, OrderDetailScreen
    │   │   ├── store/        # orderSlice.js
    │   │   └── index.js
    │   │
    │   ├── 📁customers
    │   │   ├── api/          # customerApi.js
    │   │   ├── components/   # CustomerCard, CustomerForm
    │   │   ├── screens/      # CustomersScreen, CustomerDetailScreen
    │   │   ├── store/        # customerSlice.js
    │   │   └── index.js
    │   │
    │   ├── 📁services
    │   │   ├── api/          # servicesApi.js
    │   │   ├── components/   # ServiceCard, ServiceForm
    │   │   ├── screens/      # ServicesScreen, AddServiceScreen
    │   │   ├── store/        # serviceSlice.js
    │   │   └── index.js
    │   │
    │   ├── 📁appointments
    │   │   ├── api/          # appointmentApi.js
    │   │   ├── components/   # AppointmentCard
    │   │   ├── screens/      # AppointmentsScreen, AppointmentDetailScreen
    │   │   ├── store/        # appointmentSlice.js
    │   │   └── index.js
    │   │
    │   ├── 📁staff
    │   │   ├── api/          # staffApi.js
    │   │   ├── components/   # EmployeeCard, EmployeeForm
    │   │   ├── screens/      # EmployeesScreen, AddEmployeeScreen
    │   │   ├── store/        # staffSlice.js
    │   │   └── index.js
    │   │
    │   └── 📁core            # Cross-feature/global screens & logic
    │       ├── screens/
    │       │   ├── DashboardScreen.jsx
    │       │   ├── DynamicScreen.jsx   # ✅ put your DynamicScreen here
    │       │   ├── AddScreen.jsx       # ✅ put your AddScreen here
    │       │   └── ReportsScreen.jsx
    │       ├── components/   # Core widgets (charts, analytics cards)
    │       └── index.js
    │
    ├── 📁hooks               # Global reusable hooks
    │   ├── useTheme.js
    │   ├── useDebounce.js
    │   ├── useNetworkStatus.js
    │   └── index.js
    │
    ├── 📁navigations         # Navigation setup
    │   ├── RootNavigator.jsx
    │   ├── AuthNavigator.jsx
    │   ├── AppNavigator.jsx
    │   ├── DrawerNavigator.jsx
    │   └── TabNavigator.jsx
    │
    ├── 📁services            # External integrations
    │   ├── firebase.js
    │   ├── analytics.js
    │   └── paymentGateway.js
    │
    ├── 📁utils               # Global utilities
    │   ├── formatters.js     # formatDate, formatCurrency
    │   ├── validators.js     # emailValidator, passwordValidator
    │   ├── storage.js        # mmkvStorage wrapper
    │   └── index.js
    │
    └── 📁types               # (optional, if using TypeScript)



====================================================================================
wireless debugging wi-fi option on
===================================
/* step - 1 */
adb devices
/* message */
List of devices attached


/* step - 2  */
adb pair 192.168.1.35:45453 237711  -> Pair device with pairing code
/* message */
Successfully paired to 192.168.1.35:45453 [guid=adb-00055349J001656-iwKIg9]


/* step - 3 */
adb connect 192.168.1.35:46611 
/* message */
connected to 192.168.1.35:46611


/* step - 4 */
adb devices
/* message */
List of devices attached
192.168.1.35:46611      device



/* kill process */
adb -s emulator-5554 emu kill
adb disconnect emulator-5554

====================================================================================