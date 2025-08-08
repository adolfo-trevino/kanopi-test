import { useBlockProps, RichText, InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, Button, Icon, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { services, title, description } = attributes;

	const blockProps = useBlockProps( {
		className: 'wp-block-kanopi-services',
	} );

	const updateService = ( index, field, value ) => {
		const newServices = [ ...services ];
		newServices[ index ][ field ] = value;
		setAttributes( { services: newServices } );
	};

	const addService = () => {
		const newServices = [ ...services, {
			imageId: 0,
			imageUrl: '',
			title: 'New Service',
			cardType: 'green'
		} ];
		setAttributes( { services: newServices } );
	};

	const removeService = ( index ) => {
		const newServices = [ ...services ];
		newServices.splice( index, 1 );
		setAttributes( { services: newServices } );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Services Settings', 'kanopi' ) }>
					<TextControl
						label={ __( 'Section Title', 'kanopi' ) }
						value={ title }
						onChange={ ( value ) => setAttributes( { title: value } ) }
					/>
					<TextareaControl
						label={ __( 'Section Description', 'kanopi' ) }
						value={ description }
						onChange={ ( value ) => setAttributes( { description: value } ) }
					/>
					<Button 
						variant="secondary" 
						onClick={ addService }
						style={ { marginTop: '10px' } }
					>
						{ __( 'Add Service', 'kanopi' ) }
					</Button>
				</PanelBody>
				
				{ services.map( ( service, index ) => (
					<PanelBody 
						key={ index } 
						title={ `${ __( 'Service', 'kanopi' ) } ${ index + 1 }` }
						initialOpen={ false }
					>
						<MediaUpload
							onSelect={ ( media ) => {
								updateService( index, 'imageId', media.id );
								updateService( index, 'imageUrl', media.url );
							} }
							allowedTypes={ [ 'image' ] }
							value={ service.imageId }
							render={ ( { open } ) => (
								<Button 
									onClick={ open }
									variant="secondary"
									style={ { marginTop: '10px', marginBottom: '10px' } }
								>
									{ service.imageUrl ? __( 'Replace Image', 'kanopi' ) : __( 'Upload Image', 'kanopi' ) }
								</Button>
							) }
						/>
						{ service.imageUrl && (
							<div style={ { marginBottom: '10px' } }>
								<img 
									src={ service.imageUrl } 
									alt={ __( 'Service Image', 'kanopi' ) }
									style={ { maxWidth: '100%', height: 'auto' } }
								/>
								<Button 
									onClick={ () => {
										updateService( index, 'imageId', 0 );
										updateService( index, 'imageUrl', '' );
									} }
									variant="secondary"
									isDestructive
									style={ { marginTop: '5px' } }
								>
									{ __( 'Remove Image', 'kanopi' ) }
								</Button>
							</div>
						) }
						<RichText
							tagName="div"
							value={ service.title }
							onChange={ ( value ) => updateService( index, 'title', value ) }
							placeholder={ __( 'Service Title', 'kanopi' ) }
							className="service-title-input"
						/>
						<SelectControl
							label={ __( 'Card Type', 'kanopi' ) }
							value={ service.cardType || 'green' }
							options={ [
								{ label: __( 'Green', 'kanopi' ), value: 'green' },
								{ label: __( 'Black', 'kanopi' ), value: 'black' },
								{ label: __( 'Gray', 'kanopi' ), value: 'gray' },
							] }
							onChange={ ( value ) => updateService( index, 'cardType', value ) }
						/>
						<Button 
							variant="secondary" 
							onClick={ () => removeService( index ) }
							isDestructive
						>
							{ __( 'Remove Service', 'kanopi' ) }
						</Button>
					</PanelBody>
				) ) }
			</InspectorControls>
			<div { ...blockProps }>
				<div className="services-header">
					<RichText
						tagName="h2"
						value={ title }
						onChange={ ( value ) => setAttributes( { title: value } ) }
						placeholder={ __( 'Section Title', 'kanopi' ) }
						className="services-title"
					/>
					<RichText
						tagName="p"
						value={ description }
						onChange={ ( value ) => setAttributes( { description: value } ) }
						placeholder={ __( 'Section Description', 'kanopi' ) }
						className="services-description"
					/>
				</div>
				<div className="services-grid">
					{ services.map( ( service, index ) => (
						<div key={ index } className={ `service-item service-item--${ service.cardType || 'green' }` }>
							<div className="service-content">
								<RichText
									tagName="h3"
									value={ service.title }
									onChange={ ( value ) => updateService( index, 'title', value ) }
									placeholder={ __( 'Service Title', 'kanopi' ) }
									className="service-title"
								/>
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
								{ service.imageUrl ? (
									<img 
										src={ service.imageUrl } 
										alt={ service.title }
										style={ { maxWidth: '100%', height: 'auto' } }
									/>
								) : (
									<div className="service-placeholder">
										{ __( 'No image selected', 'kanopi' ) }
									</div>
								) }
							</div>
						</div>
					) ) }
				</div>
			</div>
		</>
	);
}
