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
				<div className="container">
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
										<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z" 
											fill="currentColor"/>
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
			</div>
		</>
	);
}
