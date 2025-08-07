import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { title, description, address, phone, email, hours } = attributes;

	const blockProps = useBlockProps( {
		className: 'wp-block-knopi-contact-us',
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Contact Us Settings', 'kanopi' ) }>
					<TextControl
						label={ __( 'Section Title', 'kanopi' ) }
						value={ title }
						onChange={ ( value ) => setAttributes( { title: value } ) }
					/>
					<TextareaControl
						label={ __( 'Section Description', 'kanopi' ) }
						value={ description }
						onChange={ ( value ) => setAttributes( { description: value } ) }
					/>
					<TextControl
						label={ __( 'Address', 'kanopi' ) }
						value={ address }
						onChange={ ( value ) => setAttributes( { address: value } ) }
					/>
					<TextControl
						label={ __( 'Phone', 'kanopi' ) }
						value={ phone }
						onChange={ ( value ) => setAttributes( { phone: value } ) }
					/>
					<TextControl
						label={ __( 'Email', 'kanopi' ) }
						value={ email }
						onChange={ ( value ) => setAttributes( { email: value } ) }
					/>
					<TextControl
						label={ __( 'Hours', 'kanopi' ) }
						value={ hours }
						onChange={ ( value ) => setAttributes( { hours: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				<div className="contact-us-header">
					<RichText
						tagName="h2"
						value={ title }
						onChange={ ( value ) => setAttributes( { title: value } ) }
						placeholder={ __( 'Section Title', 'kanopi' ) }
						className="contact-us-title"
					/>
					<RichText
						tagName="p"
						value={ description }
						onChange={ ( value ) => setAttributes( { description: value } ) }
						placeholder={ __( 'Section Description', 'kanopi' ) }
						className="contact-us-description"
					/>
				</div>
				<div className="contact-us-content">
					<div className="contact-info">
						<h3>{ __( 'Contact Information', 'kanopi' ) }</h3>
						<div className="contact-details">
							<div className="contact-detail">
								<strong>{ __( 'Address:', 'kanopi' ) }</strong>
								<RichText
									tagName="span"
									value={ address }
									onChange={ ( value ) => setAttributes( { address: value } ) }
									placeholder={ __( 'Address', 'kanopi' ) }
									className="contact-address"
								/>
							</div>
							<div className="contact-detail">
								<strong>{ __( 'Phone:', 'kanopi' ) }</strong>
								<RichText
									tagName="span"
									value={ phone }
									onChange={ ( value ) => setAttributes( { phone: value } ) }
									placeholder={ __( 'Phone', 'kanopi' ) }
									className="contact-phone"
								/>
							</div>
							<div className="contact-detail">
								<strong>{ __( 'Email:', 'kanopi' ) }</strong>
								<RichText
									tagName="span"
									value={ email }
									onChange={ ( value ) => setAttributes( { email: value } ) }
									placeholder={ __( 'Email', 'kanopi' ) }
									className="contact-email"
								/>
							</div>
							<div className="contact-detail">
								<strong>{ __( 'Hours:', 'kanopi' ) }</strong>
								<RichText
									tagName="span"
									value={ hours }
									onChange={ ( value ) => setAttributes( { hours: value } ) }
									placeholder={ __( 'Hours', 'kanopi' ) }
									className="contact-hours"
								/>
							</div>
						</div>
					</div>
					<div className="contact-form">
						<h3>{ __( 'Send Us a Message', 'kanopi' ) }</h3>
						<form className="contact-form-fields">
							<div className="form-field">
								<label htmlFor="name">{ __( 'Name', 'kanopi' ) }</label>
								<input type="text" id="name" placeholder={ __( 'Your Name', 'kanopi' ) } />
							</div>
							<div className="form-field">
								<label htmlFor="email">{ __( 'Email', 'kanopi' ) }</label>
								<input type="email" id="email" placeholder={ __( 'Your Email', 'kanopi' ) } />
							</div>
							<div className="form-field">
								<label htmlFor="message">{ __( 'Message', 'kanopi' ) }</label>
								<textarea id="message" placeholder={ __( 'Your Message', 'kanopi' ) }></textarea>
							</div>
							<button type="submit" className="submit-button">
								{ __( 'Send Message', 'kanopi' ) }
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
