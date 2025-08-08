import { useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const { teamMembers, title, description } = attributes;

	const blockProps = useBlockProps.save( {
		className: 'wp-block-knopi-our-team',
	} );

	return (
		<div { ...blockProps }>
			<div className="container">
				<div className="our-team-header">
					<h2 className="our-team-title">{ title }</h2>
					<p className="our-team-description">{ description }</p>
				</div>
				<div className="our-team-grid">
					{ teamMembers.map( ( member, index ) => (
						<div key={ index } className="team-member">
							{ member.imageUrl && (
								<div className="team-member-image">
									<img src={ member.imageUrl } alt={ member.name } />
								</div>
							) }
							<div className="team-member-content">
								<h3 className="team-member-name">{ member.name }</h3>
								<p className="team-member-title">{ member.title }</p>
								<p className="team-member-description">{ member.description }</p>
							</div>
						</div>
					) ) }
				</div>
			</div>
		</div>
	);
}
