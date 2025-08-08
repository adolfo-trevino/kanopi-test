document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.working-process-steps');
    
    accordions.forEach(accordion => {
        const steps = accordion.querySelectorAll('.working-process-step');
        
        steps.forEach(step => {
            const header = step.querySelector('.step-header');
            const content = step.querySelector('.step-content');
            const toggleBtn = step.querySelector('.step-toggle');
            const toggleIcon = step.querySelector('.toggle-icon');
            
            header.addEventListener('click', function(e) {
                // Don't toggle if clicking on a link inside the header
                if (e.target.tagName === 'A') return;
                
                const isActive = step.classList.contains('active');
                
                // Close all steps
                steps.forEach(s => {
                    s.classList.remove('active');
                    s.querySelector('.step-content').style.display = 'none';
                    s.querySelector('.toggle-icon').textContent = '+';
                    s.querySelector('.step-toggle').setAttribute('aria-label', 'Expand');
                });
                
                // If the clicked step wasn't active, open it
                if (!isActive) {
                    step.classList.add('active');
                    content.style.display = 'block';
                    toggleIcon.textContent = '−';
                    toggleBtn.setAttribute('aria-label', 'Collapse');
                }
            });
        });
    });
});
