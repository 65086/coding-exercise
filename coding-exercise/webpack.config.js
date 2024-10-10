// const path = require('path');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader'
//         }
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['.js', '.jsx']
//   },
//   devServer: {
//     contentBase: path.join(__dirname, 'dist'),
//     compress: true,
//     port: 9000
//   }
// };

// const path = require('path');

// module.exports = {
//   entry: path.join(__dirname, "src", "index.js"),
// }

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  // output: {
  //   path:path.resolve(__dirname, "dist"),
  // },
  output: {
    path: path.join(__dirname, 'dist'),
      filename: 'build.js',
      publicPath: '/',
  },
  mode: 'development',
  devtool: "inline-source-map", 
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      // {
      //   test: /\.(css|scss)$/i,
      //   use: ["style-loader", "css-loader","sass-loader"],
      // },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                silenceDeprecations: ["legacy-js-api"], // 👈 HERE
              }
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: ["ts-loader", "source-map-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: ['file-loader']  
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
}