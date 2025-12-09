document.addEventListener('DOMContentLoaded', () => {
    // Select all scrollable containers
    const sliders = document.querySelectorAll('.leads-table-container, .table-responsive');
    let isDown = false;
    let startX;
    let scrollLeft;

    sliders.forEach(slider => {
        // Init Drag
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            slider.style.cursor = 'grabbing';
        });

        // Stop Drag on Leave
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
            slider.style.cursor = 'grab';
        });

        // Stop Drag on Mouse Up
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
            slider.style.cursor = 'grab';
        });

        // Handle Drag Scroll Movement
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; // Scroll-fast factor
            slider.scrollLeft = scrollLeft - walk;
        });

        // Set initial cursor style
        slider.style.cursor = 'grab';
    });
});
