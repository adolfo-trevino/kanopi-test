import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
	title: __( 'Hero Block', 'kanopi' ),
	description: __( 'A hero section with title, content, and call-to-action buttons.', 'kanopi' ),
	edit: Edit,
	save: Save,
} );
