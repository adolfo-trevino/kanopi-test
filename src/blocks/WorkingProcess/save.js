import { useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const { processSteps, title, description } = attributes;

	const blockProps = useBlockProps.save( {
		className: 'wp-block-knopi-working-process',
	} );

	return (
		<div { ...blockProps }>
			<div className="working-process-header">
				<h2 className="working-process-title">{ title }</h2>
				<p className="working-process-description">{ description }</p>
			</div>
			<div className="working-process-steps">
				{ processSteps.map( ( step, index ) => (
					<div key={ index } className="working-process-step">
						<div className="step-number">
							<span className="step-number-text">{ step.number }</span>
						</div>
						<div className="step-content">
							<h3 className="step-title">{ step.title }</h3>
							<p className="step-description">{ step.description }</p>
						</div>
					</div>
				) ) }
			</div>
		</div>
	);
}
