import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const { services, title, description } = attributes;

	const blockProps = useBlockProps.save( {
		className: 'wp-block-kanopi-services',
	} );

	return (
		<div { ...blockProps }>
			<div className="container">
				<div className="services-header">
					<RichText.Content tagName="h2" value={ title } className="services-title" />
					<RichText.Content tagName="p" value={ description } className="services-description" />
				</div>
				<div className="services-grid">
					{ services.map( ( service, index ) => (
						<div key={ index } className={ `service-item service-item--${ service.cardType || 'green' }` }>
							<div className="service-content">
								<RichText.Content tagName="h3" value={ service.title } className="service-title" />
								<div className="service-learn-more">
									<span className="learn-more-text">Learn more</span>
									<span className="learn-more-icon">
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
										</svg>
									</span>
								</div>
							</div>
							<div className="service-image">
								{ service.imageUrl && (
									<img 
										src={ service.imageUrl } 
										alt={ service.title }
									/>
								) }
							</div>
						</div>
					) ) }
				</div>
			</div>
		</div>
	);
}
