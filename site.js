var images = document.querySelectorAll(' section .diaporama img');
var current = 0;

function nextImage() {
  images[current].style.display = 'none';
  current = (current + 1) % images.length;
  images[current].style.display = 'block';
}

setInterval(nextImage, 3000);