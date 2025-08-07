<?php
/**
 * Block Name: Working Process
 * Description: A section to display the working process steps with icons, titles, and descriptions.
 * 
 * @package kanopi
 */

// Register the block
function kanopi_register_working_process_block() {
    register_block_type(
        __DIR__ . '/../build/blocks/WorkingProcess'
    );
}
add_action( 'init', 'kanopi_register_working_process_block' );
