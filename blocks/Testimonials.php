<?php
/**
 * Block Name: Testimonials
 * Description: A section to display customer testimonials with photos, names, and quotes.
 * 
 * @package kanopi
 */

// Register the block
function kanopi_register_testimonials_block() {
    register_block_type(
        __DIR__ . '/../build/blocks/Testimonials'
    );
}
add_action( 'init', 'kanopi_register_testimonials_block' );
