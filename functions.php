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
