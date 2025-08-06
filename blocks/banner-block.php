<?php
/**
 * Block Name: Banner
 * Description: A dynamic block that displays a banner with text and background image.
 * 
 * @package kanopi
 */

// Register the block
function kanopi_register_banner_block() {
    register_block_type(
        __DIR__ . '/../build/blocks/banner'
    );
}
add_action( 'init', 'kanopi_register_banner_block' );
