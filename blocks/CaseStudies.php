<?php
/**
 * Block Name: Case Studies
 * Description: A section to display case studies with images, titles, and descriptions.
 * 
 * @package kanopi
 */

// Register the block
function kanopi_register_case_studies_block() {
    register_block_type(
        __DIR__ . '/../build/blocks/CaseStudies'
    );
}
add_action( 'init', 'kanopi_register_case_studies_block' );
