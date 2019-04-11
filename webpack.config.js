const webpack = require('webpack');
const path = require('path');
const { name } = require('./package.json');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');


module.exports = {
	entry: {main: './app/index.js'},
	output: {
	    path: path.resolve(__dirname, './dist'),
	    filename: 'index_bundle.js'
  	},
  	output: {
  	        path: path.resolve(__dirname, './dist'),
  	        chunkFilename: `[chunkhash].[id].${name}.js`,
  	        filename: `[hash].[id].${name}.js`,
    },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
			    test: /\.css$/,
			    use: [
			        'style-loader',
			        { loader: 'css-loader', options: { importLoaders: 1, sourceMap: true } },
			        {
			            loader: 'postcss-loader',
			            options: { sourceMap: true, config: { path: path.resolve(__dirname, 'postcss.config.js') } },
			        },
			    ],
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			}
		]
	},
	plugins: [
	    new HtmlWebPackPlugin({
			template: "./app/index.html",
			filename: "./index.html"
	    }),
	    new WebpackMd5Hash()
	]
}