import { useBlockProps, MediaUpload, RichText, InspectorControls, URLInput } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button, FocalPointPicker, InnerBlocks, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { 
		title, 
		content, 
		heroImage, 
		heroImageID, 
		imagePosition,
		primaryButtonText, 
		primaryButtonUrl, 
		secondaryButtonText, 
		secondaryButtonUrl 
	} = attributes;

	const blockProps = useBlockProps( {
		className: 'wp-block-knopi-hero-block'
		
	} );

	const onSelectImage = ( media ) => {
		setAttributes( {
			heroImage: media.url,
			heroImageID: media.id,
		} );
	};

	const onRemoveImage = () => {
		setAttributes( {
			heroImage: '',
			heroImageID: 0,
		} );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Hero Settings', 'kanopi' ) }>
					  <SelectControl
						label="Image Position"
						value={attributes.imagePosition}
						onChange={(value) => setAttributes({ imagePosition: value })}
						options={[
						{ label: "Right", value: "right" },
						{ label: "Left", value: "left" },
						]}
					/>
				</PanelBody>		
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
			</InspectorControls>
			<div { ...blockProps }>
				<div className="container">
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
					<div className={`hero-image hero-image--position-${imagePosition}`}>
						{heroImage && (
							<img src={heroImage} alt="Hero" />
						)}
						<MediaUpload
							onSelect={onSelectImage}
							allowedTypes={['image']}
							value={heroImageID}
							render={({ open }) => (
								<Button 
									className={heroImageID ? 'image-button' : ''}
									onClick={open}
									variant={heroImageID ? 'secondary' : 'primary'}
								>
									{heroImageID ? __('Replace Image', 'kanopi') : __('Upload Image', 'kanopi')}
								</Button>
							)}
						/>
						{heroImageID && (
							<Button 
								onClick={onRemoveImage}
								variant="secondary"
							>
								{__('Remove Image', 'kanopi')}
							</Button>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
