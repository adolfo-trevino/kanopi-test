import { useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const { processSteps, title, subtitle, description } = attributes;

	const blockProps = useBlockProps.save( {
		className: 'wp-block-knopi-working-process',
	} );

	return (
		<div { ...blockProps }>
			<div className="working-process-header">
				<h2 className="working-process-title">{ title }</h2>
				<p className="working-process-subtitle">{ subtitle }</p>
				<p className="working-process-description">{ description }</p>
			</div>
			<div className="working-process-steps" id="working-process-accordion">
				{ processSteps.map( ( step, index ) => (
					<div key={ index } className={`working-process-step ${index === 0 ? 'active' : ''}`} data-index={index}>
						<div className="step-header">
							<div className="step-title-container">
								<span className="step-number">{ step.number }</span>
								<h3 className="step-title">{ step.title }</h3>
							</div>
							<button className="step-toggle" aria-label={index === 0 ? "Collapse" : "Expand"}>
								<span className="toggle-icon">{index === 0 ? '−' : '+'}</span>
							</button>
						</div>
						<div className="step-content" style={{display: index === 0 ? 'block' : 'none'}}>
							<div className="step-divider"></div>
							<p className="step-description">{ step.description }</p>
						</div>
					</div>
				) ) }
			</div>
		</div>
	);
}
