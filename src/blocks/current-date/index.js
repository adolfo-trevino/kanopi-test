import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

import './style.scss';
import './editor.scss';

registerBlockType('kanopi/current-date', {
    edit: () => {
        const blockProps = useBlockProps();
        
        // Get current date for preview in editor
        const currentDate = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        return (
            <div {...blockProps}>
                <p className="current-date">
                    {currentDate}
                </p>
            </div>
        );
    },
    save: () => {
        // Return null because this is a dynamic block rendered by PHP
        return null;
    },
});
