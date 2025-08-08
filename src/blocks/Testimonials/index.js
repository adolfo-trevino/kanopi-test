import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';
import metadata from './block.json';
import './frontend';
import './style.scss';

registerBlockType( metadata.name, {
	title: __( 'Testimonials', 'kanopi' ),
	description: __( 'A section to display customer testimonials with photos, names, and quotes.', 'kanopi' ),
	edit: Edit,
	save: Save,
} );
