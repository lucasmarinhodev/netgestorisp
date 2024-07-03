document.addEventListener('DOMContentLoaded', function() {
    const dropHoverItems = document.querySelectorAll('.drop-hover');

    dropHoverItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            document.querySelectorAll('.drop').forEach(dropdown => {
                dropdown.style.display = 'none';
            });
            const currentDropdown = this.querySelector('.drop');
            currentDropdown.style.display = 'block';
        });

        item.addEventListener('mouseout', function() {
            const currentDropdown = this.querySelector('.drop');
            currentDropdown.style.display = 'none';
        });
    });

    document.addEventListener('mouseover', function(event) {
        if (!event.target.closest('.drop-hover')) {
            document.querySelectorAll('.drop').forEach(dropdown => {
                dropdown.style.display = 'none';
            });
        }
    });
});
