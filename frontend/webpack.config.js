const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  /*devServer: {
    contentBase: path.resolve(__dirname, "./src"),
    historyApiFallback: true
  },*/
  entry: path.resolve(__dirname, "./static/App.js"),
  output: {
    path: path.join(__dirname, '/static'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude:/node_modules/,
        use:{
          loader:'babel-loader'
        }
      },
      
        {
            test: /\.css$/i,
            use: [
                "style-loader",
                {
                    loader: "css-loader",
                   
                },
               
               
            ]
        },
        
        {
            test: /\.(jpe?g|png|gif|svg|ico)$/i,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        name: '[name].[ext]',
                        publicPath: '../static/img',
                        outputPath: "img/"
                    }
                }
            ]
        }
    ]
},
 
};
