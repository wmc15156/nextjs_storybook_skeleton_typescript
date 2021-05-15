const path = require('path');

module.exports = {
  webpackFinal: async config => {
    config.module.rules.push(
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
          },
          {
            loader: require.resolve('react-docgen-typescript-loader'),
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.stories\.tsx?$/,
        loaders: [
          {
            loader: require.resolve('@storybook/addon-storysource/loader'),
            options: { parser: 'typescript' },
          },
        ],
        enforce: 'pre',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      // {
      //   test: /\.(jpe?g|png|svg|gif|ico|webp|jp2)$/,
      //   use: [
      //     {
      //       loader: require.resolve('url-loader'),
      //       options: {
      //         limit: 8192,
      //         fallback: require.resolve('file-loader'),
      //         name: '[name]-[hash].[ext]',
      //       },
      //     },
      //   ],
      // },
    );

    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, '../components'),
      '@utils': path.resolve(__dirname, '../utils'),
      '@styles': path.resolve(__dirname, '../styles'),
      '@assets': path.resolve(__dirname, '../assets'),
      '@hooks': path.resolve(__dirname, '../hooks'),
      '@sagas': path.resolve(__dirname, '../sagas'),
      '@store': path.resolve(__dirname, '../store'),
      '@services': path.resolve(__dirname, '../services'),
      '@reducers': path.resolve(__dirname, '../reducers'),
      '@config': path.resolve(__dirname, '../config'),
      '@interfaces': path.resolve(__dirname, '../interfaces'),
    };

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
  stories: ['../components/**/*.stories.tsx', '../pages/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-storysource/register',
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, './tsconfig.json'),
        },
        tsDocgenLoaderOptions: {
          tsconfigPath: path.resolve(__dirname, './tsconfig.json'),
        },
        forkTsCheckerWebpackPluginOptions: {
          colors: false, // disables built-in colors in logger messages
        },
        include: [path.resolve(__dirname, '../')],
      },
    },
  ],
};
