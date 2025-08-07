import { useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const { title, description, address, phone, email, hours } = attributes;

	const blockProps = useBlockProps.save( {
		className: 'wp-block-knopi-contact-us',
	} );

	return (
		<div { ...blockProps }>
			<div className="contact-us-header">
				<h2 className="contact-us-title">{ title }</h2>
				<p className="contact-us-description">{ description }</p>
			</div>
			<div className="contact-us-content">
				<div className="contact-info">
					<h3>Contact Information</h3>
					<div className="contact-details">
						<div className="contact-detail">
							<strong>Address:</strong>
							<span className="contact-address">{ address }</span>
						</div>
						<div className="contact-detail">
							<strong>Phone:</strong>
							<span className="contact-phone">{ phone }</span>
						</div>
						<div className="contact-detail">
							<strong>Email:</strong>
							<span className="contact-email">{ email }</span>
						</div>
						<div className="contact-detail">
							<strong>Hours:</strong>
							<span className="contact-hours">{ hours }</span>
						</div>
					</div>
				</div>
				<div className="contact-form">
					<h3>Send Us a Message</h3>
					<form className="contact-form-fields">
						<div className="form-field">
							<label htmlFor="name">Name</label>
							<input type="text" id="name" placeholder="Your Name" />
						</div>
						<div className="form-field">
							<label htmlFor="email">Email</label>
							<input type="email" id="email" placeholder="Your Email" />
						</div>
						<div className="form-field">
							<label htmlFor="message">Message</label>
							<textarea id="message" placeholder="Your Message"></textarea>
						</div>
						<button type="submit" className="submit-button">
							Send Message
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
