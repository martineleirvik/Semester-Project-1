const carouselImages = document.querySelector('.image-carousel');
const carouselButtons = document.querySelectorAll('.carousel-button');
const numberOfImages = document.querySelectorAll('.image-carousel img').length;
let imageIndex = 1;
let translateX = 0;

carouselButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous') {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 500;
      }
    } else {
      if (imageIndex !== numberOfImages) {
        imageIndex++;
        translateX -= 500;
      }
    }
    
    carouselImages.style.transform = `translateX(${translateX}px)`;
  });
});