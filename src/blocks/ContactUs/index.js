import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
	title: __( 'Contact Us', 'kanopi' ),
	description: __( 'A section with contact information and a contact form.', 'kanopi' ),
	edit: Edit,
	save: Save,
} );
