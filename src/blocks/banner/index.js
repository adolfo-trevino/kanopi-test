import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
	title: __( 'Banner', 'kanopi' ),
	description: __( 'A banner with text and background image.', 'kanopi' ),
	edit: Edit,
	save: Save,
} );
