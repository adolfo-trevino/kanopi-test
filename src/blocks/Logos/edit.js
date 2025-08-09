import { useBlockProps, MediaUpload, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button, Placeholder } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { logos, title } = attributes;

	const blockProps = useBlockProps( {
		className: 'wp-block-knopi-logos',
	} );

	const onSelectLogo = ( media ) => {
	
		if ( logos.length >= 7 ) {
			return;
		}
		
		const newLogos = [ ...logos, {
			id: media.id,
			url: media.url,
			alt: media.alt || ''
		} ];
		setAttributes( { logos: newLogos } );
	};

	const removeLogo = ( index ) => {
		const newLogos = [ ...logos ];
		newLogos.splice( index, 1 );
		setAttributes( { logos: newLogos } );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Logos Settings', 'kanopi' ) }>
					<TextControl
						label={ __( 'Section Title', 'kanopi' ) }
						value={ title }
						onChange={ ( value ) => setAttributes( { title: value } ) }
					/>
					<div style={ { marginBottom: '20px' } }>
						<MediaUpload
							onSelect={ onSelectLogo }
							allowedTypes={ [ 'image' ] }
							render={ ( { open } ) => (
								<Button 
									variant="secondary" 
									onClick={ open }
									disabled={ logos.length >= 7 }
								>
									{ logos.length >= 7 
										? __( 'Maximum Logos Added', 'kanopi' ) 
										: __( 'Add Logo', 'kanopi' ) 
									}
								</Button>
							) }
						/>
					</div>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				<div className="container">
					<RichText
						tagName="h2"
						value={ title }
						onChange={ ( value ) => setAttributes( { title: value } ) }
						placeholder={ __( 'Section Title', 'kanopi' ) }
						className="logos-title"
					/>
						{ logos.length > 0 ? (
							<>
								{/* Desktop preview */}
								<div className="logos-grid">
									{ logos.map( ( logo, index ) => (
										logo.url && (
											<div key={ index } className="logo-item">
												<img src={ logo.url } alt={ logo.alt } />
												<Button 
													variant="secondary" 
													onClick={ () => removeLogo( index ) }
													style={ { marginTop: '5px' } }
												>
													{ __( 'Remove', 'kanopi' ) }
												</Button>
											</div>
										)
									) ) }
								</div>
								{/* Mobile preview */}
								<div className="logos-swiper">
									<div className="swiper">
										<div className="swiper-wrapper">
											{ logos.map( ( logo, index ) => (
												logo.url && (
													<div key={ index } className="swiper-slide logo-item">
														<img src={ logo.url } alt={ logo.alt } />
													</div>
												)
											) ) }
										</div>
									</div>
								</div>
							</>
						) : (
							<Placeholder
								icon="groups"
								label={ __( 'Logos', 'kanopi' ) }
								instructions={ __( 'Add logos to display in this section.', 'kanopi' ) }
							>
								<MediaUpload
									onSelect={ onSelectLogo }
									allowedTypes={ [ 'image' ] }
									render={ ( { open } ) => (
										<Button variant="primary" onClick={ open }>
											{ __( 'Add Logo', 'kanopi' ) }
										</Button>
									) }
								/>
							</Placeholder>
						) }
				</div>
			</div>
		</>
	);
}
