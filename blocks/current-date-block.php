<?php
/**
 * Block Name: Current Date
 * Description: A dynamic block that displays the current date.
 * 
 * @package kanopi
 */

// Register the block
function kanopi_register_current_date_block() {
    register_block_type(
        'kanopi/current-date',
        array(
            'editor_script' => 'kanopi-current-date-block-editor',
            'editor_style'  => 'kanopi-current-date-block-editor',
            'style'         => 'kanopi-current-date-block',
            'render_callback' => 'kanopi_render_current_date_block',
        )
    );
}
add_action( 'init', 'kanopi_register_current_date_block' );

// Render the block content
function kanopi_render_current_date_block( $attributes, $content ) {
    // Get the current date in the format "F j, Y" (e.g., "August 5, 2025")
    $current_date = date('F j, Y');
    
    // Return the HTML for the block
    return '<!-- wp:paragraph {"className":"current-date"} --><p class="current-date">' . $current_date . '</p><!-- /wp:paragraph -->';
}
