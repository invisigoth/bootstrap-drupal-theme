const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const sass = require('sass');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const globImporter = require('node-sass-glob-importer');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 * Theme development.
 *
 * @param {Object} env Webpack CLI env args.
 * @param {Object} argv Webpack CLI args.
 *
 * @return {Object} Built Webpack config
 */
module.exports = (env, argv) => {
  const resolve = (file) => path.resolve(__dirname, file);
  const themePublicPath = '/themes/custom/iconagency';
  const isDevelopment = argv.mode !== 'production';
  const outputPath = isDevelopment ? 'assets/dev' : 'assets/dist';
  const publicPath = `${themePublicPath}/${outputPath}/`;
  const devPortFile = resolve('assets/.webpack-dev-port');

  const config = {
    devtool: isDevelopment ? 'source-map' : false,

    cache: {
      type: 'filesystem',
      cacheDirectory: path.resolve(__dirname, '.webpack-cache')
    },

    target: 'web',

    stats: 'minimal',

    externals: {
      drupal: 'Drupal',
      drupalSettings: 'drupalSettings',
      bootstrap: 'bootstrap',
      jquery: 'jQuery',
    },

    entry: {
      app: [resolve('assets/src/js/app.js'), resolve('assets/src/scss/app.scss')],
      vendors: resolve('assets/src/scss/vendors.scss'),
      print: resolve('assets/src/scss/print.scss'),
      editor: resolve('assets/src/scss/editor.scss'),
    },

    output: {
      path: resolve(outputPath),
      filename: 'js/[name].js',
      chunkFilename: 'js/chunk/[name]-[chunkhash].js',
      publicPath: `${themePublicPath}/${outputPath}/`,
      clean: true,
    },

    watchOptions: {
      aggregateTimeout: 400,
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      corejs: 3,
                      useBuiltIns: 'usage',
                    },
                  ],
                ],
                plugins: [
                  [
                    '@babel/plugin-transform-runtime',
                    {
                      corejs: 3,
                    },
                  ],
                ],
              },
            },
            {
              loader: 'thread-loader',
              options: {
                workers: 5,
                workerParallelJobs: 50,
              }
            }
          ]
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                sourceMap: isDevelopment,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: isDevelopment,
                postcssOptions: {
                  plugins: [autoprefixer],
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                implementation: sass,
                sourceMap: isDevelopment,
                sassOptions: {
                  importer: globImporter(),
                },
              },
            },
            {
              loader: 'thread-loader',
              options: {
                workers: 5,
                workerParallelJobs: 50,
              }
            }
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp)$/,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name]-[hash:8][ext][query]',
          },
        },
        {
          test: /\.(mp3|mp4|webv|ogg)$/,
          type: 'asset/resource',
          generator: {
            filename: 'media/[name]-[hash:8][ext][query]',
          },
        },
        {
          test: /\.(woff|woff2|ttf|otf|eot)$/,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name]-[hash:8][ext][query]',
          },
        },
      ],
    },

    resolve: {
      alias: {
        '@': resolve('assets/'),
      },
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: 'css/chunks/[name]-[hash:8].css',
      }),

      new webpack.ProvidePlugin({
        Drupal: 'drupal',
        $: 'jquery',
        jQuery: 'jquery',
      }),

      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'node_modules/@popperjs/core/dist/umd/popper.min.js',
            to: 'js/popper.min.js',
          },
          {
            from: 'node_modules/bootstrap/dist/js/bootstrap.min.js',
            to: 'js/bootstrap.min.js',
          },
        ],
      }),

      {
        apply: (compiler) => {
          compiler.hooks.watchClose.tap('DevPortFile', () => {
            if (fs.existsSync(devPortFile)) {
              fs.unlinkSync(devPortFile);
            }
          });
        },
      },
    ],

    devServer: {
      host: 'localhost',
      allowedHosts: 'all',
      watchFiles: ['assets/**/*'],
      liveReload: false,
      client: {
        reconnect: 5,
        webSocketURL: {
          hostname: 'localhost',
        },
      },
      static: {
        directory: resolve('../../../'),
        watch: false,
      },
      devMiddleware: {
        publicPath,
        writeToDisk: (filePath) => /^(?!.*(hot)).*/.test(filePath),
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      },
      onListening: (devServer) => {
        const {port} = devServer.server.address();
        fs.writeFile(devPortFile, port.toString(), () => {
        });
      },
    },
  };

  return config;
};
