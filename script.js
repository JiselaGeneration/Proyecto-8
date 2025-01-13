document.querySelectorAll('.clickable-image').forEach(image => {
    image.addEventListener('click', function() {
        const overlay = document.getElementById('overlay');
        const overlayImage = document.getElementById('overlayImage');
        
        overlayImage.src = this.src;
        overlay.classList.add('show');
    });
});

document.getElementById('overlay').addEventListener('click', function() {
    this.classList.remove('show');
});
