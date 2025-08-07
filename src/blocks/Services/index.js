import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
	title: __( 'Services', 'kanopi' ),
	description: __( 'A section to display services with icons, titles, and descriptions.', 'kanopi' ),
	edit: Edit,
	save: Save,
} );
