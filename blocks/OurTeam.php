<?php
/**
 * Block Name: Our Team
 * Description: A section to display team members with photos, names, titles, and descriptions.
 * 
 * @package kanopi
 */

// Register the block
function kanopi_register_our_team_block() {
    register_block_type(
        __DIR__ . '/../build/blocks/OurTeam'
    );
}
add_action( 'init', 'kanopi_register_our_team_block' );
