import withAppComponentFactoryFix from './plugins/withAppComponentFactoryFix';

export default {
  expo: {
    name: "aia-mobile",
    slug: "aia-mobile",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.nabil.aia",
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      },
    },
    android: {
      versionCode: 1,
      package: "com.nabil.aia",
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      manifest: [
        {
          application: {
            'tools:replace': 'android:appComponentFactory',
            'android:appComponentFactory': 'androidx.core.app.CoreComponentFactory'
          }
        }
      ]
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
      [
        "expo-build-properties",
        {
          android: {
            compileSdkVersion: 35,
            targetSdkVersion: 35,
            minSdkVersion: 24,
          },
        },
      ],
      withAppComponentFactoryFix, // 👈 ensures appComponentFactory fix
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      eas: {
        projectId: "779f189c-6a10-40ff-95e5-bda9e9221195",
      },
    },
  },
};
