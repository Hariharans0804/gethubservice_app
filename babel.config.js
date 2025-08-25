module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // 'nativewind/babel', // ✅ must be here, not in presets
    'react-native-worklets/plugin',
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
  ],
};


// module.exports = {
//   presets: ["module:metro-react-native-babel-preset"], // only metro preset
//   plugins: [
//     "nativewind/babel", // add NativeWind here
//     "react-native-worklets/plugin", // keep worklets
//     [
//       "module:react-native-dotenv",
//       {
//         moduleName: "@env",
//         path: ".env",
//       },
//     ],
//   ],
// };
