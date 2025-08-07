import { useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const { logos, title } = attributes;

	const blockProps = useBlockProps.save( {
		className: 'wp-block-knopi-logos',
	} );

	return (
		<div { ...blockProps }>
			<h2 className="logos-title">{ title }</h2>
			<div className="logos-grid">
				{ logos.map( ( logo, index ) => (
					<div key={ index } className="logo-item" data-id={ logo.id }>
						<img src={ logo.url } alt={ logo.alt } />
					</div>
				) ) }
			</div>
		</div>
	);
}
