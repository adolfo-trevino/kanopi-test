import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { caseStudies, title, description } = attributes;

	const blockProps = useBlockProps( {
		className: 'wp-block-knopi-case-studies',
	} );

	const updateCaseStudy = ( index, field, value ) => {
		const newCaseStudies = [ ...caseStudies ];
		newCaseStudies[ index ][ field ] = value;
		setAttributes( { caseStudies: newCaseStudies } );
	};

	const addCaseStudy = () => {
		const newCaseStudies = [ ...caseStudies, {
			title: 'New Case Study',
			description: 'Description for new case study',
			linkText: 'Read More',
			linkUrl: '#'
		} ];
		setAttributes( { caseStudies: newCaseStudies } );
	};

	const removeCaseStudy = ( index ) => {
		const newCaseStudies = [ ...caseStudies ];
		newCaseStudies.splice( index, 1 );
		setAttributes( { caseStudies: newCaseStudies } );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Case Studies Settings', 'kanopi' ) }>
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
						onClick={ addCaseStudy }
						style={ { marginTop: '10px' } }
					>
						{ __( 'Add Case Study', 'kanopi' ) }
					</Button>
				</PanelBody>
				
				{ caseStudies.map( ( caseStudy, index ) => (
					<PanelBody 
						key={ index } 
						title={ `${ __( 'Case Study', 'kanopi' ) } ${ index + 1 }` }
						initialOpen={ false }
					>
						<TextControl
							label={ __( 'Title', 'kanopi' ) }
							value={ caseStudy.title }
							onChange={ ( value ) => updateCaseStudy( index, 'title', value ) }
						/>
						<TextareaControl
							label={ __( 'Description', 'kanopi' ) }
							value={ caseStudy.description }
							onChange={ ( value ) => updateCaseStudy( index, 'description', value ) }
						/>
						<TextControl
							label={ __( 'Link Text', 'kanopi' ) }
							value={ caseStudy.linkText }
							onChange={ ( value ) => updateCaseStudy( index, 'linkText', value ) }
						/>
						<TextControl
							label={ __( 'Link URL', 'kanopi' ) }
							value={ caseStudy.linkUrl }
							onChange={ ( value ) => updateCaseStudy( index, 'linkUrl', value ) }
						/>
						<Button 
							variant="secondary" 
							onClick={ () => removeCaseStudy( index ) }
							isDestructive
							style={ { marginTop: '10px' } }
						>
							{ __( 'Remove Case Study', 'kanopi' ) }
						</Button>
					</PanelBody>
				) ) }
			</InspectorControls>
			<div { ...blockProps }>
				<div className="container">
					<div className="case-studies-header">
						<RichText
							tagName="h2"
							value={ title }
							onChange={ ( value ) => setAttributes( { title: value } ) }
							placeholder={ __( 'Section Title', 'kanopi' ) }
							className="case-studies-title"
						/>
						<RichText
							tagName="p"
							value={ description }
							onChange={ ( value ) => setAttributes( { description: value } ) }
							placeholder={ __( 'Section Description', 'kanopi' ) }
							className="case-studies-description"
						/>
					</div>
					<div className="case-studies-grid">
						{ caseStudies.map( ( caseStudy, index ) => (
							<div key={ index } className="case-study-item">
								<div className="case-study-content">
									<RichText
										tagName="h3"
										value={ caseStudy.title }
										onChange={ ( value ) => updateCaseStudy( index, 'title', value ) }
										placeholder={ __( 'Case Study Title', 'kanopi' ) }
										className="case-study-title"
									/>
									<RichText
										tagName="p"
										value={ caseStudy.description }
										onChange={ ( value ) => updateCaseStudy( index, 'description', value ) }
										placeholder={ __( 'Case Study Description', 'kanopi' ) }
										className="case-study-description"
									/>
									<div className="case-study-link">
										<RichText
											tagName="a"
											href={ caseStudy.linkUrl }
											value={ caseStudy.linkText }
											onChange={ ( value ) => updateCaseStudy( index, 'linkText', value ) }
											placeholder={ __( 'Link Text', 'kanopi' ) }
											className="case-study-link-text"
										/>
									</div>
								</div>
							</div>
						) ) }
					</div>
				</div>
			</div>
		</>
	);
}
