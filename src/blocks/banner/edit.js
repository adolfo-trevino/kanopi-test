import { useBlockProps, MediaUpload, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button, FocalPointPicker } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { title, content, backgroundImg, backgroundImgID, textColor, textAlign } = attributes;

	const blockProps = useBlockProps( {
		className: 'wp-block-knopi-banner',
		style: {
			backgroundImage: backgroundImg ? `url(${ backgroundImg })` : 'none',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			color: textColor,
			textAlign: textAlign,
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
				<PanelBody title={ __( 'Banner Settings', 'kanopi' ) }>
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
					<TextControl
						label={ __( 'Text Color', 'kanopi' ) }
						value={ textColor }
						onChange={ ( value ) => setAttributes( { textColor: value } ) }
					/>
					<TextControl
						label={ __( 'Text Alignment', 'kanopi' ) }
						value={ textAlign }
						onChange={ ( value ) => setAttributes( { textAlign: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
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
			</div>
		</>
	);
}
