// Add interactivity if needed (e.g., toggle subheadings on click for mobile)
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const subheadings = card.querySelector('.subheadings');
        if (window.innerWidth <= 768) {
            subheadings.style.display = subheadings.style.display === 'block' ? 'none' : 'block';
        }
    });
});