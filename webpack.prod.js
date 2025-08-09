const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const fs = require( 'fs-extra' );

// Theme files to include in production build
const themeFiles = [
	'functions.php',
	'style.css',
	'theme.css',
	'theme.json'
];

// Directories to include in production build
const themeDirectories = [
	'blocks',
	'patterns',
	'templates'
];

// Development files/directories to exclude
const devFiles = [
	'src',
	'node_modules',
	'scripts',
	'webpack.config.js',
	'webpack.prod.js',
	'.git',
	'.gitignore',
	'package.json',
	'package-lock.json'
];

module.exports = {
	...defaultConfig,
	entry: {
		'blocks/banner/index': path.resolve( __dirname, 'src/blocks/banner/index.js' ),
		'blocks/banner/style': path.resolve( __dirname, 'src/blocks/banner/style.scss' ),
		'blocks/HeroBlock/index': path.resolve( __dirname, 'src/blocks/HeroBlock/index.js' ),
		'blocks/HeroBlock/style': path.resolve( __dirname, 'src/blocks/HeroBlock/style.scss' ),
		'blocks/Logos/index': path.resolve( __dirname, 'src/blocks/Logos/index.js' ),
		'blocks/Logos/style': path.resolve( __dirname, 'src/blocks/Logos/style.scss' ),
		'blocks/Logos/frontend': path.resolve( __dirname, 'src/blocks/Logos/frontend.js' ),
		'blocks/Services/index': path.resolve( __dirname, 'src/blocks/Services/index.js' ),
		'blocks/Services/style': path.resolve( __dirname, 'src/blocks/Services/style.scss' ),
		'blocks/CaseStudies/index': path.resolve( __dirname, 'src/blocks/CaseStudies/index.js' ),
		'blocks/CaseStudies/style': path.resolve( __dirname, 'src/blocks/CaseStudies/style.scss' ),
		'blocks/CaseStudies/frontend': path.resolve( __dirname, 'src/blocks/CaseStudies/frontend.js' ),
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
		path: path.resolve( __dirname, 'dist' ),
		filename: '[name].js',
	},
	mode: 'production',
	devtool: false, // Exclude source maps for production
	plugins: [
		...defaultConfig.plugins || [],
		// Custom plugin to copy theme directories and exclude dev files
		{
			apply: ( compiler ) => {
				compiler.hooks.done.tap( 'CopyThemeDirectories', () => {
					// Copy theme files
					themeFiles.forEach( file => {
						const srcPath = path.resolve( __dirname, file );
						const destPath = path.resolve( __dirname, 'dist', file );
						if ( fs.existsSync( srcPath ) ) {
							fs.copySync( srcPath, destPath );
							console.log( `Copied file: ${file}` );
						}
					} );
					
					// Copy theme directories
					themeDirectories.forEach( dir => {
						const srcPath = path.resolve( __dirname, dir );
						const destPath = path.resolve( __dirname, 'dist', dir );
						if ( fs.existsSync( srcPath ) ) {
							fs.copySync( srcPath, destPath );
							console.log( `Copied directory: ${dir}` );
						}
					} );
					
					// Copy build/blocks to dist/build/blocks
					const buildBlocksSrc = path.resolve( __dirname, 'build/blocks' );
					const buildBlocksDest = path.resolve( __dirname, 'dist/build/blocks' );
					if ( fs.existsSync( buildBlocksSrc ) ) {
						fs.copySync( buildBlocksSrc, buildBlocksDest );
						console.log( 'Copied build/blocks to dist/build/blocks' );
					}
					
					// Remove dev files from dist (if any were copied)
					devFiles.forEach( file => {
						const filePath = path.resolve( __dirname, 'dist', file );
						if ( fs.existsSync( filePath ) ) {
							fs.removeSync( filePath );
							console.log( `Removed dev file/directory: ${file}` );
						}
					} );
				} );
			}
		}
	]
};
