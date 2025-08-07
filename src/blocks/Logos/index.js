import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
	title: __( 'Logos', 'kanopi' ),
	description: __( 'A section to display client or partner logos.', 'kanopi' ),
	edit: Edit,
	save: Save,
} );
