<?php
/**
 * Block Name: Hero Block
 * Description: A hero section with title, content, and call-to-action buttons.
 * 
 * @package kanopi
 */

// Register the block
function kanopi_register_hero_block() {
    register_block_type(
        __DIR__ . '/../build/blocks/HeroBlock'
    );
}
add_action( 'init', 'kanopi_register_hero_block' );
