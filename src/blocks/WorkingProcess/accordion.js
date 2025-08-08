document.addEventListener('DOMContentLoaded', function() {
    // Initialize all accordions on the page
    const accordions = document.querySelectorAll('.working-process-steps');
    
    accordions.forEach(accordion => {
        const steps = accordion.querySelectorAll('.working-process-step');
        
        // Set up each step in the accordion
        steps.forEach((step, index) => {
            const header = step.querySelector('.step-header');
            const content = step.querySelector('.step-content');
            
            // Set initial state - first step open, others closed
            if (index === 0) {
                step.classList.add('active');
                // Set initial max-height for the first step after a short delay to ensure proper rendering
                setTimeout(() => {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }, 10);
            } else {
                step.classList.remove('active');
            }
            
            // Add click event listener to header
            header.addEventListener('click', function(e) {
                // Prevent toggling if clicking on a link
                if (e.target.tagName === 'A') return;
                
                // Check if this step is currently active
                const isActive = step.classList.contains('active');
                
                // Close all steps with proper animation
                steps.forEach(s => {
                    if (s.classList.contains('active')) {
                        const sContent = s.querySelector('.step-content');
                        // Set max-height to scrollHeight to ensure we're transitioning from the correct height
                        sContent.style.maxHeight = sContent.scrollHeight + 'px';
                        // Force reflow
                        s.offsetHeight;
                        // Then set to 0 to trigger transition
                        sContent.style.maxHeight = '0px';
                        s.classList.remove('active');
                    }
                });
                
                // If this step was not active, open it
                if (!isActive) {
                    step.classList.add('active');
                    // Set max-height to the scrollHeight to trigger transition
                    // We need to temporarily set it to 'none' to get the correct scrollHeight
                    content.style.maxHeight = 'none';
                    const scrollHeight = content.scrollHeight;
                    content.style.maxHeight = scrollHeight + 'px';
                }
            });
        });
    });
});
