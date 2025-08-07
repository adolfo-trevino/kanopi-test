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
