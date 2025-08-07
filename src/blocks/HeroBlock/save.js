import { useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const { 
		title, 
		content, 
		backgroundImg, 
		primaryButtonText, 
		primaryButtonUrl, 
		secondaryButtonText, 
		secondaryButtonUrl 
	} = attributes;

	const blockProps = useBlockProps.save( {
		className: 'wp-block-knopi-hero-block',
		style: {
			backgroundImage: backgroundImg ? `url(${ backgroundImg })` : 'none',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
		},
	} );

	return (
		<div { ...blockProps }>
			<div className="hero-content">
				<h1 className="hero-title">{ title }</h1>
				<p className="hero-content-text">{ content }</p>
				<div className="hero-buttons">
					<a href={ primaryButtonUrl } className="button primary">
						{ primaryButtonText }
					</a>
					<a href={ secondaryButtonUrl } className="button secondary">
						{ secondaryButtonText }
					</a>
				</div>
			</div>
		</div>
	);
}
