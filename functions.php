<?php
/**
 * Theme functions and definitions
 *
 * @package kanopi
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
/**
 * Enqueue theme styles
 */
function kanopi_enqueue_styles() {

	wp_enqueue_style('custom-google-fonts-v2', 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');
	wp_enqueue_style( 'kanopi-theme-style', get_stylesheet_directory_uri() . '/theme.css', array(), '1.0.0', 'all' );
	
}
add_action( 'wp_enqueue_scripts', 'kanopi_enqueue_styles' );
// Include the custom blocks
require_once get_template_directory() . '/blocks/current-date-block.php';
require_once get_template_directory() . '/blocks/banner-block.php';
require_once get_template_directory() . '/blocks/HeroBlock.php';
require_once get_template_directory() . '/blocks/Logos.php';
require_once get_template_directory() . '/blocks/Services.php';
require_once get_template_directory() . '/blocks/CaseStudies.php';
require_once get_template_directory() . '/blocks/WorkingProcess.php';
require_once get_template_directory() . '/blocks/OurTeam.php';
require_once get_template_directory() . '/blocks/Testimonials.php';
require_once get_template_directory() . '/blocks/ContactUs.php';


