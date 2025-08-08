document.addEventListener('DOMContentLoaded', function() {
    // Initialize all accordions on the page
    const accordions = document.querySelectorAll('.working-process-steps');
    
    accordions.forEach(accordion => {
        const steps = accordion.querySelectorAll('.working-process-step');
        
        // Set up each step in the accordion
        steps.forEach((step, index) => {
            const header = step.querySelector('.step-header');
            const content = step.querySelector('.step-content');
            const toggleBtn = step.querySelector('.step-toggle');
            
            // Set initial state - first step open, others closed
            if (index === 0) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
            
            // Add click event listener to header
            header.addEventListener('click', function(e) {
                // Prevent toggling if clicking on a link
                if (e.target.tagName === 'A') return;
                
                // Check if this step is currently active
                const isActive = step.classList.contains('active');
                
                // Close all steps
                steps.forEach(s => {
                    s.classList.remove('active');
                });
                
                // If this step was not active, open it
                if (!isActive) {
                    step.classList.add('active');
                }
            });
        });
    });
});
