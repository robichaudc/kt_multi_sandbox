{
  mode: 'production',
  resolve: {
    modules: [
      '/Users/A155793/repos/kt_js/build/js/packages/kt_js/kotlin-dce',
      'node_modules'
    ]
  },
  plugins: [
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      '/Users/A155793/repos/kt_js/build/js/packages/kt_js/kotlin-dce/kt_js.js'
    ]
  },
  output: {
    path: '/Users/A155793/repos/kt_js/build/distributions',
    filename: [Function: filename],
    library: 'kt_js',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  stats: {
    warningsFilter: [
      /Failed to parse source map/
    ],
    warnings: false,
    errors: false
  },
  devServer: {
    inline: true,
    lazy: false,
    noInfo: true,
    open: true,
    overlay: false,
    contentBase: [
      '/Users/A155793/repos/kt_js/build/processedResources/js/main'
    ]
  }
}