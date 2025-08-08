import { useBlockProps, MediaUpload, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, Button, Placeholder } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { teamMembers, title, description } = attributes;

	const blockProps = useBlockProps( {
		className: 'wp-block-knopi-our-team',
	} );

	const updateTeamMember = ( index, field, value ) => {
		const newTeamMembers = [ ...teamMembers ];
		newTeamMembers[ index ][ field ] = value;
		setAttributes( { teamMembers: newTeamMembers } );
	};

	const addTeamMember = () => {
		const newTeamMembers = [ ...teamMembers, {
			imageId: 0,
			imageUrl: '',
			name: 'New Team Member',
			title: 'Position',
			description: 'Description for new team member'
		} ];
		setAttributes( { teamMembers: newTeamMembers } );
	};

	const removeTeamMember = ( index ) => {
		const newTeamMembers = [ ...teamMembers ];
		newTeamMembers.splice( index, 1 );
		setAttributes( { teamMembers: newTeamMembers } );
	};

	const onSelectImage = ( index, media ) => {
		updateTeamMember( index, 'imageId', media.id );
		updateTeamMember( index, 'imageUrl', media.url );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Our Team Settings', 'kanopi' ) }>
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
						onClick={ addTeamMember }
						style={ { marginTop: '10px' } }
					>
						{ __( 'Add Team Member', 'kanopi' ) }
					</Button>
				</PanelBody>
				
				{ teamMembers.map( ( member, index ) => (
					<PanelBody 
						key={ index } 
						title={ `${ __( 'Team Member', 'kanopi' ) } ${ index + 1 }` }
						initialOpen={ false }
					>
						<div style={ { marginBottom: '20px' } }>
							{ member.imageUrl ? (
								<>
									<img 
										src={ member.imageUrl } 
										alt="" 
										style={ { width: '100%', height: 'auto', marginBottom: '10px' } }
									/>
									<Button 
										variant="secondary" 
										onClick={ () => {
											updateTeamMember( index, 'imageId', 0 );
											updateTeamMember( index, 'imageUrl', '' );
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
							value={ member.name }
							onChange={ ( value ) => updateTeamMember( index, 'name', value ) }
						/>
						<TextControl
							label={ __( 'Title', 'kanopi' ) }
							value={ member.title }
							onChange={ ( value ) => updateTeamMember( index, 'title', value ) }
						/>
						<TextareaControl
							label={ __( 'Description', 'kanopi' ) }
							value={ member.description }
							onChange={ ( value ) => updateTeamMember( index, 'description', value ) }
						/>
						<Button 
							variant="secondary" 
							onClick={ () => removeTeamMember( index ) }
							isDestructive
							style={ { marginTop: '10px' } }
						>
							{ __( 'Remove Team Member', 'kanopi' ) }
						</Button>
					</PanelBody>
				) ) }
			</InspectorControls>
			<div { ...blockProps }>
				<div className="our-team-header">
					<RichText
						tagName="h2"
						value={ title }
						onChange={ ( value ) => setAttributes( { title: value } ) }
						placeholder={ __( 'Section Title', 'kanopi' ) }
						className="our-team-title"
					/>
					<RichText
						tagName="p"
						value={ description }
						onChange={ ( value ) => setAttributes( { description: value } ) }
						placeholder={ __( 'Section Description', 'kanopi' ) }
						className="our-team-description"
					/>
				</div>
				<div className="our-team-grid">
					{ teamMembers.map( ( member, index ) => (
						<div key={ index } className="team-member">
							<div className="linkedin-icon"></div>
							{ member.imageUrl ? (
								<div className="team-member-image">
									<img src={ member.imageUrl } alt={ member.name } />
								</div>
							) : (
								<div className="team-member-placeholder">
									<Placeholder
										icon="format-image"
										label={ __( 'Team Member Photo', 'kanopi' ) }
										instructions={ __( 'Upload a photo for this team member.', 'kanopi' ) }
									>
										<MediaUpload
											onSelect={ ( media ) => onSelectImage( index, media ) }
											allowedTypes={ [ 'image' ] }
											render={ ( { open } ) => (
												<Button variant="primary" onClick={ open }>
													{ __( 'Select Image', 'kanopi' ) }
												</Button>
											) }
										/>
									</Placeholder>
								</div>
							) }
							<div className="team-member-content">
								<RichText
									tagName="h3"
									value={ member.name }
									onChange={ ( value ) => updateTeamMember( index, 'name', value ) }
									placeholder={ __( 'Team Member Name', 'kanopi' ) }
									className="team-member-name"
								/>
								<RichText
									tagName="p"
									value={ member.title }
									onChange={ ( value ) => updateTeamMember( index, 'title', value ) }
									placeholder={ __( 'Team Member Title', 'kanopi' ) }
									className="team-member-title"
								/>
								<RichText
									tagName="p"
									value={ member.description }
									onChange={ ( value ) => updateTeamMember( index, 'description', value ) }
									placeholder={ __( 'Team Member Description', 'kanopi' ) }
									className="team-member-description"
								/>
							</div>
						</div>
					) ) }
				</div>
			</div>
		</>
	);
}
