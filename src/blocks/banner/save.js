import { useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const { title, content, backgroundImg, textColor, textAlign } = attributes;

	const blockProps = useBlockProps.save( {
		className: 'wp-block-knopi-banner',
		style: {
			backgroundImage: backgroundImg ? `url(${ backgroundImg })` : 'none',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			color: textColor,
			textAlign: textAlign,
		},
	} );

	return (
		<div { ...blockProps }>
			<h2 className="banner-title">{ title }</h2>
			<p className="banner-content">{ content }</p>
		</div>
	);
}
