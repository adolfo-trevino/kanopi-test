import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, Button, Icon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { services, title, description } = attributes;

	const blockProps = useBlockProps( {
		className: 'wp-block-knopi-services',
	} );

	const updateService = ( index, field, value ) => {
		const newServices = [ ...services ];
		newServices[ index ][ field ] = value;
		setAttributes( { services: newServices } );
	};

	const addService = () => {
		const newServices = [ ...services, {
			icon: 'admin-tools',
			title: 'New Service',
			description: 'Description for new service'
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
						<TextControl
							label={ __( 'Icon', 'kanopi' ) }
							value={ service.icon }
							onChange={ ( value ) => updateService( index, 'icon', value ) }
							help={ __( 'Enter a Dashicon name (e.g., admin-tools, admin-customizer)', 'kanopi' ) }
						/>
						<TextControl
							label={ __( 'Title', 'kanopi' ) }
							value={ service.title }
							onChange={ ( value ) => updateService( index, 'title', value ) }
						/>
						<TextareaControl
							label={ __( 'Description', 'kanopi' ) }
							value={ service.description }
							onChange={ ( value ) => updateService( index, 'description', value ) }
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
						<div key={ index } className="service-item">
							<div className="service-icon">
								<Icon icon={ service.icon } size={ 48 } />
							</div>
							<RichText
								tagName="h3"
								value={ service.title }
								onChange={ ( value ) => updateService( index, 'title', value ) }
								placeholder={ __( 'Service Title', 'kanopi' ) }
								className="service-title"
							/>
							<RichText
								tagName="p"
								value={ service.description }
								onChange={ ( value ) => updateService( index, 'description', value ) }
								placeholder={ __( 'Service Description', 'kanopi' ) }
								className="service-description"
							/>
						</div>
					) ) }
				</div>
			</div>
		</>
	);
}
