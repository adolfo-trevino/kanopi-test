import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { processSteps, title, description } = attributes;

	const blockProps = useBlockProps( {
		className: 'wp-block-knopi-working-process',
	} );

	const updateProcessStep = ( index, field, value ) => {
		const newProcessSteps = [ ...processSteps ];
		newProcessSteps[ index ][ field ] = value;
		setAttributes( { processSteps: newProcessSteps } );
	};

	const addProcessStep = () => {
		const newProcessSteps = [ ...processSteps, {
			number: ( processSteps.length + 1 ).toString(),
			title: 'New Step',
			description: 'Description for new step'
		} ];
		setAttributes( { processSteps: newProcessSteps } );
	};

	const removeProcessStep = ( index ) => {
		const newProcessSteps = [ ...processSteps ];
		newProcessSteps.splice( index, 1 );
		setAttributes( { processSteps: newProcessSteps } );
	};

	return (
		<>
		<div className="container">
			<InspectorControls>
				<PanelBody title={ __( 'Working Process Settings', 'kanopi' ) }>
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
						onClick={ addProcessStep }
						style={ { marginTop: '10px' } }
					>
						{ __( 'Add Process Step', 'kanopi' ) }
					</Button>
				</PanelBody>
				
				{ processSteps.map( ( step, index ) => (
					<PanelBody 
						key={ index } 
						title={ `${ __( 'Step', 'kanopi' ) } ${ index + 1 }` }
						initialOpen={ false }
					>
						<TextControl
							label={ __( 'Step Number', 'kanopi' ) }
							value={ step.number }
							onChange={ ( value ) => updateProcessStep( index, 'number', value ) }
						/>
						<TextControl
							label={ __( 'Title', 'kanopi' ) }
							value={ step.title }
							onChange={ ( value ) => updateProcessStep( index, 'title', value ) }
						/>
						<TextareaControl
							label={ __( 'Description', 'kanopi' ) }
							value={ step.description }
							onChange={ ( value ) => updateProcessStep( index, 'description', value ) }
						/>
						<Button 
							variant="secondary" 
							onClick={ () => removeProcessStep( index ) }
							isDestructive
							style={ { marginTop: '10px' } }
						>
							{ __( 'Remove Step', 'kanopi' ) }
						</Button>
					</PanelBody>
				) ) }
			</InspectorControls>
			<div { ...blockProps }>
				<div className="working-process-header">
					<RichText
						tagName="h2"
						value={ title }
						onChange={ ( value ) => setAttributes( { title: value } ) }
						placeholder={ __( 'Section Title', 'kanopi' ) }
						className="working-process-title"
					/>
					<RichText
						tagName="p"
						value={ description }
						onChange={ ( value ) => setAttributes( { description: value } ) }
						placeholder={ __( 'Section Description', 'kanopi' ) }
						className="working-process-description"
					/>
				</div>
				<div className="working-process-steps">
					{ processSteps.map( ( step, index ) => (
						<div key={ index } className={`working-process-step ${index === 0 ? 'active' : ''}`}>
							<div className="step-header">
								<div className="step-title-container">
									<span className="step-number">{step.number}</span>
									<RichText
										tagName="h3"
										value={ step.title }
										onChange={ ( value ) => updateProcessStep( index, 'title', value ) }
										placeholder={ __( 'Step Title', 'kanopi' ) }
										className="step-title"
									/>
								</div>
								<button className="step-toggle" aria-label={index === 0 ? "Collapse" : "Expand"}>
									<span className="toggle-icon">{index === 0 ? '−' : '+'}</span>
								</button>
							</div>
							<div className="step-content">
								<div className="step-divider"></div>
								<RichText
									tagName="p"
									value={ step.description }
									onChange={ ( value ) => updateProcessStep( index, 'description', value ) }
									placeholder={ __( 'Step Description', 'kanopi' ) }
									className="step-description"
								/>
							</div>
						</div>
					) ) }
				</div>
			</div>
			</div>
		</>
	);
}
