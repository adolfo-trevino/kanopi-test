const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

module.exports = {
	...defaultConfig,
	entry: {
		'blocks/banner/index': path.resolve( __dirname, 'src/blocks/banner/index.js' ),
		'blocks/HeroBlock/index': path.resolve( __dirname, 'src/blocks/HeroBlock/index.js' ),
		'blocks/Logos/index': path.resolve( __dirname, 'src/blocks/Logos/index.js' ),
		'blocks/Services/index': path.resolve( __dirname, 'src/blocks/Services/index.js' ),
		'blocks/CaseStudies/index': path.resolve( __dirname, 'src/blocks/CaseStudies/index.js' ),
		'blocks/WorkingProcess/index': path.resolve( __dirname, 'src/blocks/WorkingProcess/index.js' ),
		'blocks/OurTeam/index': path.resolve( __dirname, 'src/blocks/OurTeam/index.js' ),
		'blocks/Testimonials/index': path.resolve( __dirname, 'src/blocks/Testimonials/index.js' ),
		'blocks/ContactUs/index': path.resolve( __dirname, 'src/blocks/ContactUs/index.js' ),
	},
	output: {
		path: path.resolve( __dirname, 'dist' ),
		filename: '[name].js',
	},
	mode: 'production',
	devtool: false, // Exclude source maps for production
};
