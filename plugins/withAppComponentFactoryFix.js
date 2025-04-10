// plugins/withAppComponentFactoryFix.js
const { withAndroidManifest } = require('@expo/config-plugins');

module.exports = function withAppComponentFactoryFix(config) {
  return withAndroidManifest(config, (config) => {
    const application = config.modResults.manifest.application?.[0];

    if (!application) return config;

    application['$'] = {
      ...application['$'],
      'tools:replace': 'android:appComponentFactory',
      'android:appComponentFactory': 'androidx.core.app.CoreComponentFactory',
    };

    return config;
  });
};
