import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
	title: __( 'Working Process', 'kanopi' ),
	description: __( 'A section to display the working process steps with icons, titles, and descriptions.', 'kanopi' ),
	edit: Edit,
	save: Save,
} );
