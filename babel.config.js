module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./src'],
        extensions: ['.js', '.ios.js', '.android.js'],
        alias: {
          _actions: './src/actions',
          _api: './src/api',
          _assets: './src/assets',
          _components: './src/components',
          _containers: './src/containers',
          _features: './src/features',
          _navigations: './src/navigations',
          _reducers: './src/reducers',
          _selectors: './src/selectors',
        },
      },
    ],
  ],
};
