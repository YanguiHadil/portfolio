function showLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
  
    lightboxImg.src = imageSrc;
    lightbox.classList.add('active');
  }
  
  function hideLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
  }
  