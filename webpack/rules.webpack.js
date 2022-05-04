module.exports = [
  {
    test: /\.(less|css)$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'less-loader',
        options: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: { '@primary-color': '#1DA57A' },
          }
        }
      }
    ],
  },
  {
    test: /\.node$/,
    use: 'node-loader',
  },
  {
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@marshallofsound/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  {
    test: /\.(js|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        "plugins": [
          [
            "import", {
              "libraryName": "antd",
              "style": true
            }
          ]
        ]
      }
    }
  },
  {
    test: /\.(png|jpe?g|gif)$/i,
    loader: 'file-loader',
    options: {
      name: '[path][name].[ext]',
    },
  }
]
