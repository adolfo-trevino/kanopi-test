import { useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const { testimonials, title, description } = attributes;

	const blockProps = useBlockProps.save( {
		className: 'wp-block-knopi-testimonials',
	} );

	return (
		<div { ...blockProps }>

			<div className="container">
				<div className="testimonials-header">
					<h2 className="testimonials-title">{ title }</h2>
					<p className="testimonials-description">{ description }</p>
				</div>
				<div className="testimonials-grid">
					{ testimonials.map( ( testimonial, index ) => (
						<div key={ index } className="testimonial">
							<div className="testimonial-content">
								<div className="testimonial-quote">
									<p className="testimonial-quote-text">{ testimonial.quote }</p>
								</div>
								<div className="testimonial-author">
									{ testimonial.imageUrl && (
										<div className="author-image">
											<img src={ testimonial.imageUrl } alt={ testimonial.name } />
										</div>
									) }
									<div className="author-info">
										<h3 className="author-name">{ testimonial.name }</h3>
										<p className="author-title">{ testimonial.title }</p>
									</div>
								</div>
							</div>
						</div>
					) ) }
				</div>
			</div>
		</div>
	);
}
