import { useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const { caseStudies, title, description } = attributes;

	const blockProps = useBlockProps.save( {
		className: 'wp-block-knopi-case-studies',
	} );

	return (
		<div { ...blockProps }>
			<div className="container">
				<div className="case-studies-header">
					<h2 className="case-studies-title">{ title }</h2>
					<p className="case-studies-description">{ description }</p>
				</div>
				<div className="case-studies-grid">
					{ caseStudies.map( ( caseStudy, index ) => (
						<div key={ index } className="case-study-item">
							<div className="case-study-content">
								<h3 className="case-study-title">{ caseStudy.title }</h3>
								<p className="case-study-description">{ caseStudy.description }</p>
								<div className="case-study-link">
									<a href={ caseStudy.linkUrl } className="case-study-link-text">
										{ caseStudy.linkText }
									</a>
								</div>
							</div>
						</div>
					) ) }
				</div>
			</div>
		</div>
	);
}
