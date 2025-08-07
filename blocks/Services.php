<?php
/**
 * Block Name: Services
 * Description: A section to display services with icons, titles, and descriptions.
 * 
 * @package kanopi
 */

// Register the block
function kanopi_register_services_block() {
    register_block_type(
        __DIR__ . '/../build/blocks/Services'
    );
}
add_action( 'init', 'kanopi_register_services_block' );
