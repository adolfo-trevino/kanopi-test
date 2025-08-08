import { useBlockProps, RichText, InspectorControls, MediaUpload, MediaUploadCheck, ColorPalette } from '@wordpress/block-editor';
import { PanelBody, TextControl, RadioControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { title, subtitle, image, formBackgroundColor, messageType } = attributes;

	const blockProps = useBlockProps( {
		className: 'wp-block-knopi-contact-us',
	} );

	const formStyle = {
		backgroundColor: formBackgroundColor || '#f5f5f5',
	};

	const onSelectImage = (media) => {
		setAttributes({
			image: {
				id: media.id,
				url: media.url,
				alt: media.alt || '',
			},
		});
	};

	const removeImage = () => {
		setAttributes({
			image: {},
		});
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Contact Us Settings', 'kanopi' ) }>
					<TextControl
						label={ __( 'Section Title', 'kanopi' ) }
						value={ title }
						onChange={ ( value ) => setAttributes( { title: value } ) }
					/>
					<TextControl
						label={ __( 'Section Subtitle', 'kanopi' ) }
						value={ subtitle }
						onChange={ ( value ) => setAttributes( { subtitle: value } ) }
					/>
					<div className="editor-post-featured-image">
						<MediaUploadCheck>
							<MediaUpload
								onSelect={onSelectImage}
								allowedTypes={['image']}
								value={image?.id}
								render={({open}) => (
									<Button 
										onClick={open}
										className={!image?.id ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
									>
										{!image?.id && __('Set image', 'kanopi')}
										{image?.id && <img src={image.url} alt={image.alt} />}
									</Button>
								)}
							/>
						</MediaUploadCheck>
						{image?.id && (
							<MediaUploadCheck>
								<Button onClick={removeImage} isLink isDestructive>
									{__('Remove image', 'kanopi')}
								</Button>
							</MediaUploadCheck>
						)}
					</div>
					<div className="components-base-control">
						<label className="components-base-control__label">
							{__('Form Background Color', 'kanopi')}
						</label>
						<ColorPalette
							value={formBackgroundColor}
							onChange={(color) => setAttributes({ formBackgroundColor: color })}
						/>
					</div>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				<div className="contact-us-header">
					<div className="contact-title-container">
						<RichText
							tagName="h2"
							value={ title }
							onChange={ ( value ) => setAttributes( { title: value } ) }
							placeholder={ __( 'Contact Us', 'kanopi' ) }
							className="contact-us-title"
						/>
					</div>
					<RichText
						tagName="p"
						value={ subtitle }
						onChange={ ( value ) => setAttributes( { subtitle: value } ) }
						placeholder={ __( 'Connect with Us', 'kanopi' ) }
						className="contact-us-subtitle"
					/>
				</div>
				<div className="contact-us-content">
					<div className="contact-form-container" style={formStyle}>
						<div className="contact-form-wrapper">
							<div className="message-type-selector">
								<div className={`message-type-option ${messageType === 'sayHi' ? 'selected' : ''}`}>
									<input
										type="radio"
										id="sayHi"
										name="messageType"
										checked={messageType === 'sayHi'}
										onChange={() => setAttributes({ messageType: 'sayHi' })}
									/>
									<label htmlFor="sayHi">{__('Say Hi', 'kanopi')}</label>
								</div>
								<div className={`message-type-option ${messageType === 'getQuote' ? 'selected' : ''}`}>
									<input
										type="radio"
										id="getQuote"
										name="messageType"
										checked={messageType === 'getQuote'}
										onChange={() => setAttributes({ messageType: 'getQuote' })}
									/>
									<label htmlFor="getQuote">{__('Get a Quote', 'kanopi')}</label>
								</div>
							</div>
							<form className="contact-form-fields">
								<div className="form-field">
									<label htmlFor="name">{__('Name', 'kanopi')}</label>
									<input type="text" id="name" placeholder={__('Name', 'kanopi')} />
								</div>
								<div className="form-field">
									<label htmlFor="email">{__('Email', 'kanopi')}<span className="required">*</span></label>
									<input type="email" id="email" placeholder={__('Email', 'kanopi')} required />
								</div>
								<div className="form-field">
									<label htmlFor="message">{__('Message', 'kanopi')}<span className="required">*</span></label>
									<textarea id="message" placeholder={__('Message', 'kanopi')} required></textarea>
								</div>
								<button type="submit" className="submit-button">
									{__('Send Message', 'kanopi')}
								</button>
							</form>
							<div className="decorative-elements">
								<div className="star-element star-dark"></div>
								<div className="star-element star-light"></div>
								<div className="lines-element"></div>
							</div>
						</div>
					</div>
					{image?.url && (
						<div className="contact-image-container">
							<img src={image.url} alt={image.alt || ''} />
						</div>
					)}
				</div>
			</div>
		</>
	);
}
