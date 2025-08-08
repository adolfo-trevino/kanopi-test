const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

module.exports = {
	...defaultConfig,
	entry: {
		'blocks/banner/index': path.resolve( __dirname, 'src/blocks/banner/index.js' ),
		'blocks/banner/style': path.resolve( __dirname, 'src/blocks/banner/style.scss' ),
		'blocks/HeroBlock/index': path.resolve( __dirname, 'src/blocks/HeroBlock/index.js' ),
		'blocks/HeroBlock/style': path.resolve( __dirname, 'src/blocks/HeroBlock/style.scss' ),
		'blocks/Logos/index': path.resolve( __dirname, 'src/blocks/Logos/index.js' ),
		'blocks/Logos/style': path.resolve( __dirname, 'src/blocks/Logos/style.scss' ),
		'blocks/Services/index': path.resolve( __dirname, 'src/blocks/Services/index.js' ),
		'blocks/Services/style': path.resolve( __dirname, 'src/blocks/Services/style.scss' ),
		'blocks/CaseStudies/index': path.resolve( __dirname, 'src/blocks/CaseStudies/index.js' ),
		'blocks/CaseStudies/style': path.resolve( __dirname, 'src/blocks/CaseStudies/style.scss' ),
		'blocks/WorkingProcess/index': path.resolve( __dirname, 'src/blocks/WorkingProcess/index.js' ),
		'blocks/WorkingProcess/style': path.resolve( __dirname, 'src/blocks/WorkingProcess/style.scss' ),
		'blocks/WorkingProcess/accordion': path.resolve( __dirname, 'src/blocks/WorkingProcess/accordion.js' ),
		'blocks/OurTeam/index': path.resolve( __dirname, 'src/blocks/OurTeam/index.js' ),
		'blocks/OurTeam/style': path.resolve( __dirname, 'src/blocks/OurTeam/style.scss' ),
		'blocks/Testimonials/index': path.resolve( __dirname, 'src/blocks/Testimonials/index.js' ),
		'blocks/Testimonials/style': path.resolve( __dirname, 'src/blocks/Testimonials/style.scss' ),
		'blocks/Testimonials/frontend': path.resolve( __dirname, 'src/blocks/Testimonials/frontend.js' ),
		'blocks/ContactUs/index': path.resolve( __dirname, 'src/blocks/ContactUs/index.js' ),
		'blocks/ContactUs/style': path.resolve( __dirname, 'src/blocks/ContactUs/style.scss' ),
	},
	output: {
		path: path.resolve( __dirname, 'build' ),
		filename: '[name].js',
	},
};
