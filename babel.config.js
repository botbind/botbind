const baseConfig = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  ignore: ['node_modules'],
};

if (process.env.NODE_ENV !== 'development') baseConfig.ignore.push('__test__');

module.exports = baseConfig;
