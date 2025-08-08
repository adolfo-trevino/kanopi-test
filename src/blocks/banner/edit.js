import { useBlockProps, MediaUpload, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button, TextareaControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { 
		title, 
		content, 
		backgroundImg, 
		backgroundImgID, 
		foregroundImg, 
		foregroundImgID, 
		buttonText, 
		buttonUrl, 
		textColor, 
		textAlign,
		backgroundColor 
	} = attributes;

	const blockProps = useBlockProps( {
		className: 'wp-block-knopi-banner',
		style: {
			backgroundColor: backgroundColor,
			color: textColor,
			textAlign: textAlign,
		},
	} );

	const onSelectBackgroundImage = ( media ) => {
		setAttributes( {
			backgroundImg: media.url,
			backgroundImgID: media.id,
		} );
	};

	const onRemoveBackgroundImage = () => {
		setAttributes( {
			backgroundImg: '',
			backgroundImgID: 0,
		} );
	};

	const onSelectForegroundImage = ( media ) => {
		setAttributes( {
			foregroundImg: media.url,
			foregroundImgID: media.id,
		} );
	};

	const onRemoveForegroundImage = () => {
		setAttributes( {
			foregroundImg: '',
			foregroundImgID: 0,
		} );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Banner Settings', 'kanopi' ) }>
					<div style={ { marginBottom: '20px' } }>
						<p><strong>{ __( 'Background Image', 'kanopi' ) }</strong></p>
						<MediaUpload
							onSelect={ onSelectBackgroundImage }
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
							<Button variant="secondary" onClick={ onRemoveBackgroundImage }>
								{ __( 'Remove', 'kanopi' ) }
							</Button>
						) }
					</div>
					
					<div style={ { marginBottom: '20px' } }>
						<p><strong>{ __( 'Foreground Image', 'kanopi' ) }</strong></p>
						<MediaUpload
							onSelect={ onSelectForegroundImage }
							allowedTypes={ [ 'image' ] }
							value={ foregroundImgID }
							render={ ( { open } ) => (
								<Button
									variant="secondary"
									onClick={ open }
									style={ { marginRight: '10px' } }
								>
									{ foregroundImg
										? __( 'Change Foreground Image', 'kanopi' )
										: __( 'Select Foreground Image', 'kanopi' ) }
								</Button>
							) }
						/>
						{ foregroundImg && (
							<Button variant="secondary" onClick={ onRemoveForegroundImage }>
								{ __( 'Remove', 'kanopi' ) }
							</Button>
						) }
					</div>
					
					<TextControl
						label={ __( 'Button Text', 'kanopi' ) }
						value={ buttonText }
						onChange={ ( value ) => setAttributes( { buttonText: value } ) }
					/>
					
					<TextControl
						label={ __( 'Button URL', 'kanopi' ) }
						value={ buttonUrl }
						onChange={ ( value ) => setAttributes( { buttonUrl: value } ) }
					/>
					
					<TextControl
						label={ __( 'Text Color', 'kanopi' ) }
						value={ textColor }
						onChange={ ( value ) => setAttributes( { textColor: value } ) }
					/>
					
					<TextControl
						label={ __( 'Background Color', 'kanopi' ) }
						value={ backgroundColor }
						onChange={ ( value ) => setAttributes( { backgroundColor: value } ) }
					/>
					
					<TextControl
						label={ __( 'Text Alignment', 'kanopi' ) }
						value={ textAlign }
						onChange={ ( value ) => setAttributes( { textAlign: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				<div className="container">
					<div className="banner-content-wrapper">
						<div className="banner-text">
							<RichText
								tagName="h2"
								value={ title }
								onChange={ ( value ) => setAttributes( { title: value } ) }
								placeholder={ __( 'Banner Title', 'kanopi' ) }
								className="banner-title"
							/>
							<RichText
								tagName="p"
								value={ content }
								onChange={ ( value ) => setAttributes( { content: value } ) }
								placeholder={ __( 'Banner Content', 'kanopi' ) }
								className="banner-content"
							/>
							<div className="banner-button-wrapper">
								<RichText
									tagName="a"
									value={ buttonText }
									onChange={ ( value ) => setAttributes( { buttonText: value } ) }
									placeholder={ __( 'Button Text', 'kanopi' ) }
									className="banner-button"
								/>
							</div>
						</div>
						<div className="banner-image">
							{foregroundImg ? (
								<img src={foregroundImg} alt="" className="banner-foreground-image" />
							) : (
								<div className="banner-image-placeholder">
									<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"></path>
									</svg>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
