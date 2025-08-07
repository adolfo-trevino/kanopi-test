import { useBlockProps, MediaUpload, RichText, InspectorControls, URLInput } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button, FocalPointPicker } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { 
		title, 
		content, 
		backgroundImg, 
		backgroundImgID, 
		primaryButtonText, 
		primaryButtonUrl, 
		secondaryButtonText, 
		secondaryButtonUrl 
	} = attributes;

	const blockProps = useBlockProps( {
		className: 'wp-block-knopi-hero-block',
		style: {
			backgroundImage: backgroundImg ? `url(${ backgroundImg })` : 'none',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
		},
	} );

	const onSelectImage = ( media ) => {
		setAttributes( {
			backgroundImg: media.url,
			backgroundImgID: media.id,
		} );
	};

	const onRemoveImage = () => {
		setAttributes( {
			backgroundImg: '',
			backgroundImgID: 0,
		} );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Hero Settings', 'kanopi' ) }>
					<div style={ { marginBottom: '20px' } }>
						<MediaUpload
							onSelect={ onSelectImage }
							allowedTypes={ [ 'image' ] }
							value={ backgroundImgID }
							render={ ( { open } ) => (
								<Button
									variant="secondary"
									onClick={ open }
									style={ { marginRight: '10px' } }
								>
									{ backgroundImg
										? __( 'Change Background Image', 'kanopi' )
										: __( 'Select Background Image', 'kanopi' ) }
								</Button>
							) }
						/>
						{ backgroundImg && (
							<Button variant="secondary" onClick={ onRemoveImage }>
								{ __( 'Remove', 'kanopi' ) }
							</Button>
						) }
					</div>
					
					<PanelBody title={ __( 'Primary Button', 'kanopi' ) } initialOpen={ true }>
						<TextControl
							label={ __( 'Button Text', 'kanopi' ) }
							value={ primaryButtonText }
							onChange={ ( value ) => setAttributes( { primaryButtonText: value } ) }
						/>
						<TextControl
							label={ __( 'Button URL', 'kanopi' ) }
							value={ primaryButtonUrl }
							onChange={ ( value ) => setAttributes( { primaryButtonUrl: value } ) }
						/>
					</PanelBody>
					
					<PanelBody title={ __( 'Secondary Button', 'kanopi' ) } initialOpen={ true }>
						<TextControl
							label={ __( 'Button Text', 'kanopi' ) }
							value={ secondaryButtonText }
							onChange={ ( value ) => setAttributes( { secondaryButtonText: value } ) }
						/>
						<TextControl
							label={ __( 'Button URL', 'kanopi' ) }
							value={ secondaryButtonUrl }
							onChange={ ( value ) => setAttributes( { secondaryButtonUrl: value } ) }
						/>
					</PanelBody>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				<div className="hero-content">
					<RichText
						tagName="h1"
						value={ title }
						onChange={ ( value ) => setAttributes( { title: value } ) }
						placeholder={ __( 'Hero Title', 'kanopi' ) }
						className="hero-title"
					/>
					<RichText
						tagName="p"
						value={ content }
						onChange={ ( value ) => setAttributes( { content: value } ) }
						placeholder={ __( 'Hero Content', 'kanopi' ) }
						className="hero-content-text"
					/>
					<div className="hero-buttons">
						<Button variant="primary" href={ primaryButtonUrl }>
							{ primaryButtonText }
						</Button>
						<Button variant="secondary" href={ secondaryButtonUrl }>
							{ secondaryButtonText }
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}
