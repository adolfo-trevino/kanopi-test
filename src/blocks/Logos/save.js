import { useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const { logos, title } = attributes;

	const blockProps = useBlockProps.save( {
		className: 'wp-block-knopi-logos',
	} );

	return (
		<div { ...blockProps }>
			<div className="container">
				{title && <h2 className="logos-title">{ title }</h2>}
				<div className="logos-grid">
					{ logos.map( ( logo, index ) => (
						logo.url && (
							<div key={ index } className="logo-item" data-id={ logo.id } src={ logo.url } alt={ logo.alt }>
								<img src={ logo.url } alt={ logo.alt } />
							</div>
						)
					) ) }
				</div>
			</div>
		</div>
	);
}
