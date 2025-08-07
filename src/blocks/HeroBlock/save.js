import { useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const { 
		imagePosition,
		title, 
		content, 
		heroImage, 
		primaryButtonText, 
		primaryButtonUrl, 
		secondaryButtonText, 
		secondaryButtonUrl 
	} = attributes;

	const blockProps = useBlockProps.save( {
		className: 'wp-block-knopi-hero-block'
	} );

	return (
		<div { ...blockProps }>
			<div className="container ">
				<div className="hero-content ">
					<h1 className="hero-title">{ title }</h1>
					<p className="hero-content-text">{ content }</p>
					<div className="hero-buttons">
						{primaryButtonText && primaryButtonUrl &&
						<a href={ primaryButtonUrl } className="button primary">
							{ primaryButtonText }
						</a>
						}
						{secondaryButtonText && secondaryButtonUrl &&
						<a href={ secondaryButtonUrl } className="button secondary">
							{ secondaryButtonText }
						</a>}
					</div>
				</div>
				<div className={`hero-image hero-image--position-${imagePosition}`}>
					{ heroImage && <img src={ heroImage } alt={ title } /> }
				</div>
			</div>
		</div>
	);
}
