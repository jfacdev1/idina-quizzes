// Lightbox functionality to enlarge gallery images
window.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const targetImg = lightbox.querySelector('img');

  const closeLightbox = () => {
    lightbox.classList.add('hidden');
    targetImg.src = '';
    targetImg.alt = '';
  };

  // Add click handler to each gallery image
  document.querySelectorAll('.image-gallery img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      targetImg.src = img.src;
      targetImg.alt = img.alt;
      lightbox.classList.remove('hidden');
      lightbox.focus();
    });
  });

  // Close when clicking overlay
  lightbox.addEventListener('click', closeLightbox);

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
      closeLightbox();
    }
  });
});
