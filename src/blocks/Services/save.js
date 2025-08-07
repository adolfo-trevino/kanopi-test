import { useBlockProps } from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';

export default function Save( { attributes } ) {
	const { services, title, description } = attributes;

	const blockProps = useBlockProps.save( {
		className: 'wp-block-knopi-services',
	} );

	return (
		<div { ...blockProps }>
			<div className="services-header">
				<h2 className="services-title">{ title }</h2>
				<p className="services-description">{ description }</p>
			</div>
			<div className="services-grid">
				{ services.map( ( service, index ) => (
					<div key={ index } className="service-item">
						<div className="service-icon">
							<Icon icon={ service.icon } size={ 48 } />
						</div>
						<h3 className="service-title">{ service.title }</h3>
						<p className="service-description">{ service.description }</p>
					</div>
				) ) }
			</div>
		</div>
	);
}
