import { useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const { title, subtitle, image, formBackgroundColor, messageType } = attributes;

	const blockProps = useBlockProps.save( {
		className: 'wp-block-knopi-contact-us',
	} );

	const formStyle = {
		backgroundColor: formBackgroundColor || '#f5f5f5',
	};

	return (
		<div { ...blockProps }>
			<div className="contact-us-header">
				<div className="contact-title-container">
					<h2 className="contact-us-title">{ title }</h2>
				</div>
				<p className="contact-us-subtitle">{ subtitle }</p>
			</div>
			<div className="contact-us-content" style={formStyle}>
				<div className="contact-form-container" >
					<div className="contact-form-wrapper">
						<div className="message-type-selector">
							<div className={`message-type-option ${messageType === 'sayHi' ? 'selected' : ''}`}>
								<input
									type="radio"
									id="sayHi"
									name="messageType"
									checked={messageType === 'sayHi'}
									readOnly
								/>
								<label htmlFor="sayHi">Say Hi</label>
							</div>
							<div className={`message-type-option ${messageType === 'getQuote' ? 'selected' : ''}`}>
								<input
									type="radio"
									id="getQuote"
									name="messageType"
									checked={messageType === 'getQuote'}
									readOnly
								/>
								<label htmlFor="getQuote">Get a Quote</label>
							</div>
						</div>
						<form className="contact-form-fields">
							<div className="form-field">
								<label htmlFor="name">Name</label>
								<input type="text" id="name" placeholder="Name" />
							</div>
							<div className="form-field">
								<label htmlFor="email">Email<span className="required">*</span></label>
								<input type="email" id="email" placeholder="Email" required />
							</div>
							<div className="form-field">
								<label htmlFor="message">Message<span className="required">*</span></label>
								<textarea id="message" placeholder="Message" required></textarea>
							</div>
							<button type="submit" className="submit-button">
								Send Message
							</button>
						</form>
					</div>
				</div>
				{image?.url && (
					<div className="contact-image-container">
						<img src={image.url} alt={image.alt || ''} />
					</div>
				)}
			</div>
		</div>
	);
}
