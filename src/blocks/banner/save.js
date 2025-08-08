import { useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const { 
		title, 
		content, 
		backgroundImg, 
		foregroundImg, 
		buttonText, 
		buttonUrl, 
		textColor, 
		textAlign,
		backgroundColor 
	} = attributes;

	const blockProps = useBlockProps.save( {
		className: 'wp-block-knopi-banner',
		style: {			
			color: textColor,
			textAlign: textAlign,
		},
	} );

	return (
		<div { ...blockProps }>
			<div className="container">
				<div className="banner-content-wrapper"
				style={ { backgroundColor: backgroundColor } }>
				
					<div className="banner-text">
						<h2 className="banner-title">{ title }</h2>
						<p className="banner-content">{ content }</p>
						<div className="banner-button-wrapper">
							<a href={ buttonUrl } className="banner-button">{ buttonText }</a>
						</div>
					</div>
					<div className="banner-image">
						{foregroundImg && (
							<img src={ foregroundImg } alt="" className="banner-foreground-image" />
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
