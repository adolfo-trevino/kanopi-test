<?php
/**
 * Block Name: Logos
 * Description: A section to display client or partner logos.
 * 
 * @package kanopi
 */

// Register the block
function kanopi_register_logos_block() {
    register_block_type(
        __DIR__ . '/../build/blocks/Logos'
    );
}
add_action( 'init', 'kanopi_register_logos_block' );
