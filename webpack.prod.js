const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

module.exports = {
	...defaultConfig,
	entry: {
		'blocks/banner/index': path.resolve( __dirname, 'src/blocks/banner/index.js' ),
	},
	output: {
		path: path.resolve( __dirname, 'dist' ),
		filename: '[name].js',
	},
	mode: 'production',
	devtool: false, // Exclude source maps for production
};
