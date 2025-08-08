import { useBlockProps, MediaUpload, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, Button, Placeholder } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { testimonials, title, description } = attributes;

	const blockProps = useBlockProps( {
		className: 'wp-block-knopi-testimonials',
	} );

	const updateTestimonial = ( index, field, value ) => {
		const newTestimonials = [ ...testimonials ];
		newTestimonials[ index ][ field ] = value;
		setAttributes( { testimonials: newTestimonials } );
	};

	const addTestimonial = () => {
		const newTestimonials = [ ...testimonials, {
			imageId: 0,
			imageUrl: '',
			name: 'New Customer',
			title: 'Position',
			quote: 'Quote from new customer'
		} ];
		setAttributes( { testimonials: newTestimonials } );
	};

	const removeTestimonial = ( index ) => {
		const newTestimonials = [ ...testimonials ];
		newTestimonials.splice( index, 1 );
		setAttributes( { testimonials: newTestimonials } );
	};

	const onSelectImage = ( index, media ) => {
		updateTestimonial( index, 'imageId', media.id );
		updateTestimonial( index, 'imageUrl', media.url );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Testimonials Settings', 'kanopi' ) }>
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
						onClick={ addTestimonial }
						style={ { marginTop: '10px' } }
					>
						{ __( 'Add Testimonial', 'kanopi' ) }
					</Button>
				</PanelBody>
				
				{ testimonials.map( ( testimonial, index ) => (
					<PanelBody 
						key={ index } 
						title={ `${ __( 'Testimonial', 'kanopi' ) } ${ index + 1 }` }
						initialOpen={ false }
					>
						<div style={ { marginBottom: '20px' } }>
							{ testimonial.imageUrl ? (
								<>
									<img 
										src={ testimonial.imageUrl } 
										alt="" 
										style={ { width: '100%', height: 'auto', marginBottom: '10px' } }
									/>
									<Button 
										variant="secondary" 
										onClick={ () => {
											updateTestimonial( index, 'imageId', 0 );
											updateTestimonial( index, 'imageUrl', '' );
										} }
										isDestructive
									>
										{ __( 'Remove Image', 'kanopi' ) }
									</Button>
								</>
							) : (
								<MediaUpload
									onSelect={ ( media ) => onSelectImage( index, media ) }
									allowedTypes={ [ 'image' ] }
									render={ ( { open } ) => (
										<Button variant="secondary" onClick={ open }>
											{ __( 'Select Image', 'kanopi' ) }
										</Button>
									) }
								/>
							) }
						</div>
						<TextControl
							label={ __( 'Name', 'kanopi' ) }
							value={ testimonial.name }
							onChange={ ( value ) => updateTestimonial( index, 'name', value ) }
						/>
						<TextControl
							label={ __( 'Title', 'kanopi' ) }
							value={ testimonial.title }
							onChange={ ( value ) => updateTestimonial( index, 'title', value ) }
						/>
						<TextareaControl
							label={ __( 'Quote', 'kanopi' ) }
							value={ testimonial.quote }
							onChange={ ( value ) => updateTestimonial( index, 'quote', value ) }
						/>
						<Button 
							variant="secondary" 
							onClick={ () => removeTestimonial( index ) }
							isDestructive
							style={ { marginTop: '10px' } }
						>
							{ __( 'Remove Testimonial', 'kanopi' ) }
						</Button>
					</PanelBody>
				) ) }
			</InspectorControls>
			<div { ...blockProps }>
				<div className="container">
					<div className="testimonials-header">
						
						<RichText
							tagName="h2"
							value={ title }
							onChange={ ( value ) => setAttributes( { title: value } ) }
							placeholder={ __( 'Section Title', 'kanopi' ) }
							className="testimonials-title"
						/>
						<RichText
							tagName="p"
							value={ description }
							onChange={ ( value ) => setAttributes( { description: value } ) }
							placeholder={ __( 'Section Description', 'kanopi' ) }
							className="testimonials-description"
						/>
					</div>
					
					<div className="testimonials-slider-container">
						<div className="swiper testimonials-slider">
							<div className="swiper-wrapper">
								{ testimonials.map( ( testimonial, index ) => (
									<div key={ index } className="swiper-slide">
										<div className="testimonial">
											<div className="testimonial-content">
												<div className="testimonial-quote">
													<RichText
														tagName="p"
														value={ testimonial.quote }
														onChange={ ( value ) => updateTestimonial( index, 'quote', value ) }
														placeholder={ __( 'Testimonial Quote', 'kanopi' ) }
														className="testimonial-quote-text"
													/>
												</div>
												<div className="testimonial-author">
													<div className="author-info">
														<RichText
															tagName="h3"
															value={ testimonial.name }
															onChange={ ( value ) => updateTestimonial( index, 'name', value ) }
															placeholder={ __( 'Author Name', 'kanopi' ) }
															className="author-name"
														/>
														<RichText
															tagName="p"
															value={ testimonial.title }
															onChange={ ( value ) => updateTestimonial( index, 'title', value ) }
															placeholder={ __( 'Author Title', 'kanopi' ) }
															className="author-title"
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								) ) }
							</div>
							
							<div className="swiper-button-prev"></div>
							<div className="swiper-button-next"></div>
							<div className="swiper-pagination"></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
