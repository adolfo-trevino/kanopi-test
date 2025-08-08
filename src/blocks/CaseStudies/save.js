import { useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const { caseStudies, title, description } = attributes;

	const blockProps = useBlockProps.save( {
		className: 'wp-block-kanopi-case-studies',
	} );

	return (
		<div { ...blockProps }>
			<div className="container">
				<div className="case-studies-header">
					<div className="case-studies-title-wrapper">
						<h2 className="case-studies-title">{ title }</h2>
					</div>
					<p className="case-studies-description">{ description }</p>
				</div>
				<div className="case-studies-grid">
					{ caseStudies.map( ( caseStudy, index ) => (
						<div key={ index } className="case-study-item">
							<div className="case-study-content">
								<p className="case-study-description">{ caseStudy.description }</p>
								<div className="case-study-link">
									<a href={ caseStudy.linkUrl } className="case-study-link-text">
										{ caseStudy.linkText } <span className="arrow-icon">→</span>
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
