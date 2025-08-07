<?php
/**
 * Block Name: Contact Us
 * Description: A section with contact information and a contact form.
 * 
 * @package kanopi
 */

// Register the block
function kanopi_register_contact_us_block() {
    register_block_type(
        __DIR__ . '/../build/blocks/ContactUs'
    );
}
add_action( 'init', 'kanopi_register_contact_us_block' );
